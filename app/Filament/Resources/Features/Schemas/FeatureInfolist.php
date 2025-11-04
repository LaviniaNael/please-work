<?php

namespace App\Filament\Resources\Features\Schemas;

use App\Models\Feature;
use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class FeatureInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('title'),
                TextEntry::make('title_ar'),
                TextEntry::make('slug'),
                TextEntry::make('slug_ar'),
                TextEntry::make('description')
                    ->columnSpanFull(),
                TextEntry::make('description_ar'),
                IconEntry::make('is_pulished')
                    ->boolean(),
                TextEntry::make('images')
                    ->placeholder('-')
                    ->columnSpanFull(),
                TextEntry::make('icon'),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('deleted_at')
                    ->dateTime()
                    ->visible(fn (Feature $record): bool => $record->trashed()),
            ]);
    }
}
