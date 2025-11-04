<?php

namespace Database\Factories;

use App\Models\FAQ;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class FAQFactory extends Factory
{
    protected $model = FAQ::class;

    public function definition(): array
    {
        return [
            'question' => $this->faker->word(),
            'question_ar' => $this->faker->word(),
            'answer' => $this->faker->word(),
            'answer_ar' => $this->faker->word(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
