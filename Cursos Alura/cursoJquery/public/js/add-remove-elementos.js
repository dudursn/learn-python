
//Meu modo
function reiniciar(campo, tempo, tempoTotal) {
    var button = "<button class=\"#botao-reinicio2\">Reiniciar</button>";
    //Adiciona elemento, existem outros: prepend(), after(),before()
    //$(".container").append(button);
    //Insere depois
    campo.after(button);
    var botaoReinicio = $("#botao-reinicio2");
    botaoReinicio.on(function () {
        campo.val("");
        campo.attr('disabled', false);
        tempo.text(tempoTotal);
        $("#contagem-caracteres").text("0");
        $("#contagem-palavras").text("0");
        //Remover elementos
        $("#botao-reinicio2").remove();
    });



}