<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Section extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'title_ar',
        'slug',
        'type',
        'subtitle',
        'subtitle_ar',
        'description',
        'description_ar',
        'service_items',
        'service_items_ar',
        'icon',
        'img',
    ];
}
