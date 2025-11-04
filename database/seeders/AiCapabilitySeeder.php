<?php

namespace Database\Seeders;

use App\Models\AiCapability;
use Illuminate\Database\Seeder;

class AiCapabilitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $capabilities = [
            [
                'icon' => 'BrainCircuit',
                'title' => 'Custom Machine Learning Models',
                'description' => 'We build predictive models for forecasting, recommendation engines to personalize user experiences, and classification systems to automate data sorting.'
            ],
            [
                'icon' => 'MessageSquare',
                'title' => 'Natural Language Processing (NLP)',
                'description' => 'Develop intelligent chatbots and virtual assistants, perform sentiment analysis on customer feedback, and automate text summarization and data extraction.'
            ],
            [
                'icon' => 'Eye',
                'title' => 'Computer Vision',
                'description' => 'Create systems for image recognition and object detection, automate data entry from documents, and build solutions for visual search and analysis.'
            ],
            [
                'icon' => 'Cog',
                'title' => 'Automation & Process Intelligence',
                'description' => 'Use AI to automate repetitive business tasks, optimize complex workflows, and provide intelligent analytics to improve your operational efficiency.'
            ],
        ];

        foreach ($capabilities as $capability) {
            AiCapability::create($capability);
        }
    }
}
