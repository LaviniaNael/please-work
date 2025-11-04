<?php

namespace App\Http\Controllers;

use App\Models\FAQ;
use App\Models\Feature;
use App\Models\Project;
use App\Models\Section;
use App\Models\Service;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // Optimize queries - only select needed columns and use specific queries
        $services = Service::select('id', 'title', 'title_ar', 'description', 'description_ar', 'slug', 'slug_ar', 'icon')
            ->get();
            
        $features = Feature::select('id', 'title', 'title_ar', 'description', 'description_ar', 'icon', 'is_published')
            ->where('is_published', 1)
            ->get();
            
        $faqs = Faq::select('id', 'question', 'question_ar', 'answer', 'answer_ar')
            ->get();
            
        $projects = Project::select('id', 'title', 'title_ar', 'subtitle', 'subtitle_ar', 'description', 'description_ar', 'images', 'is_published')
            ->where('is_published', 1)
            ->limit(10) // Limit to 10 projects for performance
            ->get();
        
        // Get AI features efficiently
        $aiFeatures = Section::select('id', 'title', 'title_ar', 'description', 'description_ar', 'icon', 'type')
            ->where('type', 'ai-feature')
            ->get();
        
        // Get Why Us features (already optimized above with $features)
        $whyUsFeatures = $features;
        
        // Get page sections efficiently - single query with specific slugs
        $sectionsList = Section::select('id', 'slug', 'title', 'title_ar', 'subtitle', 'subtitle_ar', 'description', 'description_ar')
            ->whereIn('slug', ['hero', 'about', 'services', 'whyus', 'contact', 'projects', 'faq', 'ai'])
            ->get()
            ->keyBy('slug');
            
        $sections = [
            'hero' => $sectionsList->get('hero'),
            'about' => $sectionsList->get('about'),
            'services' => $sectionsList->get('services'),
            'whyus' => $sectionsList->get('whyus'),
            'contact' => $sectionsList->get('contact'),
            'projects' => $sectionsList->get('projects'),
            'faq' => $sectionsList->get('faq'),
            'ai' => $sectionsList->get('ai'),
        ];
        
        return Inertia::render('welcome', compact(
            'services',
            'features',
            'faqs',
            'aiFeatures',
            'whyUsFeatures',
            'sections',
            'projects'));
    }
}