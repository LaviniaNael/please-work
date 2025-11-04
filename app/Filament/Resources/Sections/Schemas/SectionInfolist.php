<?php

namespace App\Filament\Resources\Sections\Schemas;

use App\Models\Section;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class SectionInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('title'),
                TextEntry::make('title_ar'),
                TextEntry::make('subtitle')
                    ->placeholder('-')
                    ->columnSpanFull(),
                TextEntry::make('subtitle_ar')
                    ->placeholder('-'),
                TextEntry::make('description')
                    ->placeholder('-')
                    ->columnSpanFull(),
                TextEntry::make('description_ar')
                    ->placeholder('-')
                    ->columnSpanFull(),
                TextEntry::make('icon')
                    ->placeholder('-'),
                TextEntry::make('img')
                    ->placeholder('-'),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('deleted_at')
                    ->dateTime()
                    ->visible(fn (Section $record): bool => $record->trashed()),
            ]);
    }
}
