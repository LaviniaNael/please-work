<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                TextInput::make('title_ar')
                    ->required(),
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
                Toggle::make('is_published')
                    ->required(),
                FileUpload::make('images')
                    ->image()
                    ->imageEditor()
                    ->multiple()
                    ->reorderable()
                    ->disk('public')
                    ->directory('projects')
                    ->columnSpanFull(),
            ]);
    }
}