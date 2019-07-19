
console.log("Olá mundo!")
/*Bem-vindo ao jquery*/
var campo = $(".campo-digitacao");
campo.val("");
var tempo = $("#contagem-tempo");
var tempoInicial = $("#contagem-tempo").text()
var cronometroId = null;
//Regex
var espaco = /[\s]+/g;

var placares = [];
var numDePlacares;

var frase = $(".frase").text();  //'$' querySelector do jquery, poderia ser tbm jQuery(".frase");
var palavras = frase.split(espaco);
var contagem = $("#contagem");

$(document).ready(function () {
    carregaPlacar();
    contaPalavras();
    atualizaDados();
    inicializaCronometro();
    inicializaMarcadores();

    //Atributo botao tem a função de atalho click
    $("#botao-reinicio").click(reinicializaJogo);
    $("#botao-placar").click(controlaSecaoPlacar);
});

