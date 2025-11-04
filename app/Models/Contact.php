<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'message',
        'notes',
        'status_item_id'
    ];

    public function admin()
    {
        return User::find(2);
    }

    public function status_item(): BelongsTo
    {
        return $this->belongsTo(StatusItem::class);
    }
}
