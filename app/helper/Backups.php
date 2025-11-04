<?php

namespace App\helper;

use ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups as BaseBackups;

class Backups extends BaseBackups
{
    protected static string|null|\BackedEnum $navigationIcon = null;

    public function getHeading(): string|\Illuminate\Contracts\Support\Htmlable
    {
        return 'Application Backups';
    }

//    public static function getNavigationGroup(): ?string
//    {
//        return 'Core';
//    }
}
