$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);
var caminho = "http://localhost:3000/frases";

function fraseAleatoria(){
    $("#spinner").toggle();
    $.get(caminho, trocaFraseAleatoria)
    .fail(controlaSecaoErro())
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFraseAleatoria(data){
   var frase = $("#frase");
   var numeroAleatorio = Math.floor(Math.random()*data.length);
   frase.text(data[numeroAleatorio].texto);
   atualizaTempo(data[numeroAleatorio].tempo);
   contaPalavras();
}

function buscaFrase(){
    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();
    var dadoBusca = {id:fraseId};
    $.get(caminho, dadoBusca, trocaFrase)
    .fail(function(){
        alert("Frase não encontrada.");
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFrase(data){
    var frase = $("#frase");
    frase.text(data.texto);
    atualizaTempo(data.tempo);
    contaPalavras();
}