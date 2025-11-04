<?php

namespace App\Filament\Resources\Services\Schemas;

use App\Models\Service;
use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class ServiceInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(6)
            ->components([
                TextEntry::make('title')->columnSpan(3),
                TextEntry::make('slug')->columnSpan(3),
                TextEntry::make('subtitle')
                    ->placeholder('-')->columnSpan(3),
                TextEntry::make('description')
                    ->columnSpanFull()->columnSpan(3),

                ImageEntry::make('images')
                    ->placeholder('-')
                    ->columnSpanFull(),
                IconEntry::make('icon')
                    ->placeholder('-'),
                IconEntry::make('is_published')
                    ->boolean(),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('deleted_at')
                    ->dateTime()
                    ->visible(fn (Service $record): bool => $record->trashed()),

                ]);
    }
}
