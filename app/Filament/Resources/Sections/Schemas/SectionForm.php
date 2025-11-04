<?php

namespace App\Filament\Resources\Sections\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class SectionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required()
                    ->afterStateUpdated(fn (Set $set, ?string $state) => $set('slug', Str::slug($state))),
                TextInput::make('title_ar')
                    ->required(),
                TextInput::make('slug')
                    ->required()
                    ->columnSpanFull(),
                    TextInput::make('subtitle')
                    ->default(null),
                    TextInput::make('subtitle_ar')
                    ->default(null),
                    Textarea::make('description')
                    ->default(null)
                    ->rows(8),
                    Textarea::make('description_ar')
                    ->default(null)
                    ->rows(8),
                    Select::make('type')
                        ->options([
                            'page' => 'Page Section',
                            'ai-feature' => 'AI Feature',
                            'whyus-feature' => 'Why Us Feature',
                        ])
                        ->default('page')
                        ->required(),
                TextInput::make('icon')
                    ->label('Icon (Lucide icon name)')
                    ->helperText('e.g., Award, Shield, Zap, Brain - Required for AI/Why Us features')
                    ->default(null),
                Textarea::make('service_items')
                    ->label('Service Items (English)')
                    ->helperText('One service per line - For About section')
                    ->default(null)
                    ->rows(4),
                Textarea::make('service_items_ar')
                    ->label('Service Items (Arabic)')
                    ->helperText('One service per line - For About section')
                    ->default(null)
                    ->rows(4),
                FileUpload::make('img')
                    ->image()
                    ->imageEditor()
                    ->default(null),
            ]);
    }
}
