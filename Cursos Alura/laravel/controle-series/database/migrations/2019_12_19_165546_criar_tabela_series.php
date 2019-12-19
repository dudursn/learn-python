<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CriarTabelaSeries extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Tabela series
        Schema::create(table:"serie", function(Blueprint $table){
            $table->bigIncrements(column:"serie_id");
            $table->string(column:"nome");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //Remover a tabela
        Schema::drop(table:"series");
    }
}
