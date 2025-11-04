<?php

namespace App\Filament\Resources\FAQS;

use App\Filament\Resources\FAQS\Pages\CreateFAQ;
use App\Filament\Resources\FAQS\Pages\EditFAQ;
use App\Filament\Resources\FAQS\Pages\ListFAQS;
use App\Filament\Resources\FAQS\Pages\ViewFAQ;
use App\Filament\Resources\FAQS\Schemas\FAQForm;
use App\Filament\Resources\FAQS\Schemas\FAQInfolist;
use App\Filament\Resources\FAQS\Tables\FAQSTable;
use App\Models\FAQ;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use UnitEnum;

class FAQResource extends Resource
{
    protected static ?string $model = FAQ::class;

//    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'question';

    public static function getNavigationGroup(): string|UnitEnum|null
    {
        return __('Website Content');
    }

    public static function form(Schema $schema): Schema
    {
        return FAQForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return FAQInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return FAQSTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListFAQS::route('/'),
            'create' => CreateFAQ::route('/create'),
            'view' => ViewFAQ::route('/{record}'),
            'edit' => EditFAQ::route('/{record}/edit'),
        ];
    }

    public static function getRecordRouteBindingEloquentQuery(): Builder
    {
        return parent::getRecordRouteBindingEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
