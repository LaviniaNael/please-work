<?php

namespace App\Filament\Resources\Services\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class ServiceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(6)
            ->components([
                TextInput::make('title')
                    ->required()
                    ->live()
                    ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state)))
                    ->columnSpan(3),
                TextInput::make('title_ar')
                    ->required()
                    ->live()
                    ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug_ar', Str::slug($state)))
                    ->columnSpan(3),
                TextInput::make('slug')
                    ->required()
                    ->reactive()
                    ->readonly()
                    ->columnSpan(3),
                TextInput::make('slug_ar')
                    ->required()
                    ->reactive()
                    ->readonly()
                    ->columnSpan(3),
                TextInput::make('subtitle')
                    ->default(null)
                    ->columnSpan(3),
                TextInput::make('subtitle_ar')
                    ->default(null)
                    ->columnSpan(3),
                Textarea::make('description')
                    ->required()
                    ->columnSpanFull()
                    ->rows(10)
                    ->columnSpan(3),
                Textarea::make('description_ar')
                    ->required()
                    ->columnSpanFull()
                    ->rows(10)
                    ->columnSpan(3),
                FileUpload::make('images')
                    ->multiple()
                    ->image()
                    ->directory('services')
                    ->reorderable()
                    ->downloadable()
                    ->columnSpanFull()
                    ->nullable(),
                TextInput::make('icon')
                    ->columnSpan(4),
                Toggle::make('is_published')
                    ->required()
                    ->inline(false)
                    ->columnSpan(2),
            ]);
    }
}
