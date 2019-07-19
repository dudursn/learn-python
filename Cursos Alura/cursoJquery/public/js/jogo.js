function atualizaTempo(novoTempo) {
    tempoInicial = novoTempo;
    tempo.text(novoTempo);
}

function atualizaDados() {
    //Evento de "enquanto eu digito"
    campo.on("input", function () {
        //Recebe o que foi digitado na textarea
        var texto = campo.val();
        $("#contagem-caracteres").text(texto.length);
        $("#contagem-palavras").text(texto.split(espaco).length);
    });
}

function contaPalavras() {
    var palavras = $(".frase").text().split(espaco);
    $("#contagem").text(palavras.length);
}

/*Em javascript
function contaPalavras(){
    var frase = document.querySelector(".frase").textContent;
    var palavras = frase.split(espaco);
    console.log(palavras)
    var contagem = document.querySelector("#contagem");
    contagem.textContent = palavras.length;
}
*/

function inicializaCronometro() {
    //Evento de click ou do teclado - função one escutar uma unica vez
    campo.on("focus", function () {
        var tempoRestante = tempo.text();
        cronometroId = setInterval(function () {
            tempoRestante--;
            tempo.text(tempoRestante);
            if (tempoRestante == 0) {
                clearInterval(cronometroId);
                finalizaJogo();
            }
        }, 1000);
    });
}

function finalizaJogo() {

    //tempo.text("Acabou!");
    //attr - modifica os atributos da tag via jQuery
    campo.attr('disabled', true);

    /* Alterar css via jQuery
    campo.css("background","lightgray"); */

    /* Adiciona css */
    campo.addClass("campo-desativado");
    inserePlacar();
}



function reinicializaJogo() {
    campo.val("");

    //Desabilita o atributo 'disabled'
    campo.attr('disabled', false);

    //Reinicia o tempo
    tempo.text(tempoInicial);

    //Reinicia a contagem
    $("#contagem-caracteres").text("0");
    $("#contagem-palavras").text("0");

    /*Remover a classe*/
    campo.removeClass("campo-desativado");
    campo.removeClass("campo-errado");
    campo.removeClass("campo-correto");
    if (cronometroId != null) {
        clearInterval(cronometroId);
    }
}

function inicializaMarcadores() {

    campo.on("input", function () {
        var frase = $(".frase").text();
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);

        if (digitado == comparavel) {
            campo.addClass("campo-correto");
            campo.removeClass("campo-errado");
        } else {
            campo.addClass("campo-errado");
            campo.removeClass("campo-correto");
        }
    });
}


function controlaSecaoErro(){
    var msgErro = $("#erro");
    msgErro.stop().show();
}

function meuModo() {
    //Evento de click ou do teclado - função one escutar uma unica vez
    campo.on("focus", function () {
        var tempoRestante = tempo.text();
        var cronometroId = setInterval(function () {
            tempoRestante--;
            tempo.text(tempoRestante);
            if (tempoRestante == 0) {
                clearInterval(cronometroId);
                //tempo.text("Acabou!");
                //attr - modifica os atributos da tag via jQuery
                campo.attr('disabled', true);
                if (campo[0].disabled) {
                    reiniciar(campo, tempo, tempoInicial);
                }
            }
        }, 1000);

    });
}

