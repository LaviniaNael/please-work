<?php

namespace App\Filament\Resources\FAQS\Schemas;

use App\Models\FAQ;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class FAQInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('question'),
                TextEntry::make('question_ar')
                    ->placeholder('-'),
                TextEntry::make('answer'),
                TextEntry::make('answer_ar')
                    ->placeholder('-'),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('deleted_at')
                    ->dateTime()
                    ->visible(fn (FAQ $record): bool => $record->trashed()),
            ]);
    }
}
