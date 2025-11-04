<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FAQ extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'question',
        'question_ar',
        'answer',
        'answer_ar',
    ];
    protected $table = 'f_a_qs';
}
