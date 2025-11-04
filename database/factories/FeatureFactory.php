<?php

namespace Database\Factories;

use App\Models\Feature;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class FeatureFactory extends Factory{
    protected $model = Feature::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->word(),//
'title_ar' => $this->faker->word(),
'slug' => $this->faker->slug(),
'slug_ar' => $this->faker->slug(),
'description' => $this->faker->text(),
'description_ar' => $this->faker->text(),
'is_pulished' => $this->faker->boolean(),
'images' => $this->faker->words(),
'icon' => $this->faker->word(),
'created_at' => Carbon::now(),
'updated_at' => Carbon::now(),
        ];
    }
}
