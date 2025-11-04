<?php

namespace App\Filament\Resources\StatusItems\Pages;

use App\Filament\Resources\StatusItems\StatusItemResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageStatusItems extends ManageRecords
{
    protected static string $resource = StatusItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
