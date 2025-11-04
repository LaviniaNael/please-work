<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('f_a_qs', function (Blueprint $table) {
            $table->id();
            $table->string('question');
            $table->string('question_ar')->nullable();
            $table->text('answer');
            $table->text('answer_ar')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('f_a_qs');
    }
};
