<?php

namespace App\Filament\Resources\FAQS\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class FAQForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('question')
                    ->required(),
                TextInput::make('question_ar')
                    ->default(null),
                TextInput::make('answer')
                    ->required(),
                TextInput::make('answer_ar')
                    ->default(null),
            ]);
    }
}
