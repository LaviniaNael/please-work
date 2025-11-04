<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Notifications\ContactUs;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => ['nullable', 'string', 'max:50'],
            'message' => 'required|string|max:5000',
        ]);

        if ($validator->fails()) {
            // Return validation errors with 422 status
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $data = $validator->validated();
        $data['status_item_id'] = 1;

        $contact = Contact::create($data);

        $contact->admin()->notify(new ContactUs($request->name, $request->phone, $request->email, $request->message));
        // We can dispatch a job/email/notification here

        return response()->json([
            'message' => 'We will get back to you as soon as possible.',
            'contact' => $contact->only(['id', 'name', 'email', 'phone', 'message']),
        ], 201);
    }
}
