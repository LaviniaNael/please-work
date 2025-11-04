<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'title_ar',
        'subtitle',
        'subtitle_ar',
        'description',
        'description_ar',
        'is_published',
        'images',
    ];

    protected function casts(): array
    {
        return [
            'is_published' => 'boolean',
            'images' => 'array',
        ];
    }
}
