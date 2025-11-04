<?php

namespace Database\Factories;

use App\Models\Section;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class SectionFactory extends Factory
{
    protected $model = Section::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->word(),
            'title_ar' => $this->faker->word(),
            'subtitle' => $this->faker->word(),
            'subtitle_ar' => $this->faker->word(),
            'description' => $this->faker->text(),
            'description_ar' => $this->faker->text(),
            'icon' => $this->faker->word(),
            'img' => $this->faker->word(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
