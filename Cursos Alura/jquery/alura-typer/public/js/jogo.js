

var campo = $(".campo-digitacao");
campo.val("");
var tempo = $("#contagem-tempo");
var tempoInicial = $("#contagem-tempo").text()
var cronometroId = null;

$(document).ready(function () {
    atualizaDados();
    inicializaCronometro();
    inicializaMarcadores();
    //Atributo botao tem a função de atalho click
    $("#botao-reinicio").click(reinicializaJogo);
});

function atualizaDados() {
    //Evento de "enquanto eu digito"
    campo.on("input", function () {
        //Recebe o que foi digitado na textarea
        var texto = campo.val();
        $("#contagem-caracteres").text(texto.length);
        $("#contagem-palavras").text(texto.split(espaco).length - 1);
    });
}

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

function inserePlacar() {
    //Procura dentro do elemento classe placar o elemento tbody
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Eduardo";
    var placar = $("#contagem-palavras").text();
    //Cria um elemento html estruturado
    var linha = criaElementoPlacarHTML(usuario, placar);
    /*Cria um elemento html através de string(Aqui não é possivel colocar o botão de click)
        var linha = "<tr>" +
        "<td>" +usuario+"</td>"+
        "<td>" +placar+"</td>"+
        "<td>"+botaoRemover+"<td>"+
    "</tr>"; */
  
    //Procura dentro do elemento LINHA o elemento e classe botao-remover e adiciona um botão de click
    linha.find(".botao-remover").click(removeLinhaPlacar);

    //Insere depois do ultimo filho
    corpoTabela.append(linha);
    // corpoTabela.prepend(linha); - insere antes do primeiro filho
}

function criaElementoPlacarHTML(usuario, placar){
    //Cria elementos html através do jquery
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPlacar = $("<td>").text(placar);
    var colunaBotaoRemover = $("<td>");

    //Adiciona classes e atributos das tags html abaixo
    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    //Adiciona um elemento filho html ao pai
    colunaBotaoRemover.append(link.append(icone));
    linha.append(colunaUsuario);
    linha.append(colunaPlacar);
    linha.append(colunaBotaoRemover);

    return linha;
}

function removeLinhaPlacar(){
    $(".botao-remover").on("click", function(event){
            //"Esquece" a execução padrão dos eventos do elemento selecionado
            event.preventDefault();
            //Procura o pai do pai
            var linhaRemovidaNaTabelaPlacar = $(this).parent().parent();
            //Remove o pai do pai
            linhaRemovidaNaTabelaPlacar.remove();
    });
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
    var frase = $(".frase").text();
    campo.on("input", function () {
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


