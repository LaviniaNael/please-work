<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LocaleController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::get('/', function () {
//    return Inertia::render('welcome');
//})->name('home');

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::post('/contacts', [ContactController::class, 'store'])->name('contacts.store');

Route::post('/locale/{lang}', function ($lang, Request $request) {
    if (!in_array($lang, ['en', 'ar'])) {
        $lang = 'ar';
    }
    session(['locale' => $lang]);
    App::setLocale($lang);
    return back();
})->name('locale.switch');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
