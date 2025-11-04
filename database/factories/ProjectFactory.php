<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class ProjectFactory extends Factory
{
    protected $model = Project::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->word(),
            'title_ar' => $this->faker->word(),
            'subtitle' => $this->faker->word(),
            'subtitle_ar' => $this->faker->word(),
            'description' => $this->faker->text(),
            'description_ar' => $this->faker->text(),
            'is_published' => $this->faker->boolean(),
            'images' => $this->faker->words(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
