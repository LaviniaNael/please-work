<?php

namespace App\Filament\Resources\Contacts\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ContactForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required()
                    ->disabled(),
                TextInput::make('email')
                    ->label('Email address')
                    ->email()
                    ->required()
                    ->disabled(),
                TextInput::make('phone')
                    ->tel()
                    ->required()
                    ->disabled(),
                Textarea::make('message')
                    ->required()
                    ->columnSpanFull()
                    ->disabled(),
                Textarea::make('notes')
                    ->default(null)
                    ->columnSpanFull(),
                Select::make('status_item')
                    ->relationship('status_item', 'name')
                    ->label('Status')
                    ->createOptionForm([
                        TextInput::make('name'),
                    ])
                    ->required(),
            ])->columns(3);
    }
}
