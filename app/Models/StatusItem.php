<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class StatusItem extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
    ];


    public function contacts(): HasMany|StatusItem
    {
        return $this->hasMany(Contact::class);
    }
}
