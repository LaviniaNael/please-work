<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AiCapability extends Model
{
    use  SoftDeletes;

    protected $fillable = [
        'icon',
        'title',
        'title_ar',
        'description',
        'description_ar',
    ];
}
