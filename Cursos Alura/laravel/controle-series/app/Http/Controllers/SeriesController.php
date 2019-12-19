<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SeriesController extends Controller
{
    public function listarSeries(){

    	$series = [
    		"Grey's Anatomy",
    		"Lost",
    		"Agents of SHIELD"
    	];

    	$html = "<ul>";

    	foreach ($series as $serie) {
    		$html .= "<li>$serie</li>";
    	}
    	$html .= "</ul>";

    	return $html;
    }

    public function testarRequests(Request $request){
    	
    	//Mostra a url
    	echo $request->url() . "<br>";

    	//Mostra os parametros querystring
    	var_dump($request->query() );
    	echo "<br>";
    	$id = $request->query("id");
    	$nome = $request->query("nome");
    	echo $id . "<br>";
    	echo $nome . "<br>";
    }
}
