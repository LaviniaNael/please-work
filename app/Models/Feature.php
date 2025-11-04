<?php

namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\SoftDeletes;

    class Feature extends Model {
        use HasFactory, SoftDeletes;

        protected $fillable = [
        'title',
        'title_ar',
        'slug',
        'slug_ar',
        'description',
        'description_ar',
        'is_published',
        'images',
        'icon',
        ];

        protected function casts(): array
        {
        return [
        'is_published' => 'boolean',
        'images' => 'array',
        ];
        }
    }
