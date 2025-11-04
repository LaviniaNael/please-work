<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('features', function (Blueprint $table) {
            $table->id();
$table->string('title');
$table->string('title_ar');
$table->string('slug');
$table->string('slug_ar');
$table->text('description');
$table->text('description_ar');
$table->boolean('is_published');
$table->json('images')->nullable();
$table->string('icon');
$table->timestamps();
$table->softDeletes();//
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('features');
    }
};
