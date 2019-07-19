$("#botao-sync").click(sincronizaPlacar);
$(".botao-remover").one("click", removeLinhaPlacar);

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

    //Assim que terminar o jogo, mostrar o placar
    $(".placar").slideDown(500);
    scrollPlacar();
}

//Faz a barra de rolagem se mover para uma certa posição da página
function scrollPlacar() {

    //Pega a posição da seção placar na tela
    var posicaoPlacar = $(".placar").offset().top;

    //Faz a animação da barra de rolagem (1s)
    //animate - para animar qualquer propriedade do CSS.
    $("body").animate({
        //Move até a posição específica
        scrollTop: posicaoPlacar + "px"
    }, 1000);
}

function criaElementoPlacarHTML(usuario, placar) {
    //Cria elementos html através do jquery
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPlacar = $("<td>").text(placar);
    var colunaBotaoRemover = $("<td>");

    //Adiciona classes e atributos das tags html abaixo
    var link = $("<a>").addClass("botao-remover");
    //.attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    //Adiciona um elemento filho html ao pai
    colunaBotaoRemover.append(link.append(icone));
    linha.append(colunaUsuario);
    linha.append(colunaPlacar);
    linha.append(colunaBotaoRemover);

    return linha;
}

function removeLinhaPlacar() {

    /*"Esquece" a execução padrão dos eventos do elemento selecionado
    event.preventDefault();*/

    //Procura o pai do pai
    var linhaRemovidaNaTabelaPlacar = $(this).parent().parent();
    linhaRemovidaNaTabelaPlacar.fadeOut(1000);
    //Executar um evento após um certo tempo passado no segundo parametro(1000 = 1s)
    setTimeout(function () {
        //Remove o pai do pai
        linhaRemovidaNaTabelaPlacar.remove();
    }, 1000);

}

function controlaSecaoPlacar() {
    var displaySecaoPlacar = $(".placar");
    //stop - animação que estiver acontecendo no momento é interrompida, e uma próxima é iniciada.
    displaySecaoPlacar.stop().toggle("slow");
    /*
    if (displaySecaoPlacar.css("display") == "none"){
        displaySecaoPlacar.attr("style", "display:block");
    }else{
        displaySecaoPlacar.attr("style", "display:none");
    }
    
    displaySecaoPlacar.show() or displaySecaoPlacar.hide()
    */
}

function carregaPlacar() {
    var corpoTabela = $(".placar").find("tbody");

    $.get("http://localhost:3000/placar", function (data) {
        $.each(data, function (i, item) {
            placares.push(item);
            linha = criaElementoPlacarHTML(item.usuario, item.pontos);
            //Procura dentro do elemento LINHA o elemento e classe botao-remover e adiciona um botão de click
            linha.find(".botao-remover").click(removeLinhaPlacar);
            corpoTabela.append(linha);
        });
    });
}
//Salvar metodo post
function sincronizaPlacar() {
    var placar = [];
    var linhas = $("tbody>tr");
    linhas.each(function (i, linha) {
        console.log(linha);
        var usuario = $(linha).find("td:nth-child(1)");
        var pontos = $(linha).find("td:nth-child(2)");
        var score = {
            usuario: usuario.text(),
            pontos: pontos.text()
        }
        //console.log(score);
        placar.push(score);
    });
    var dados = {
        placar: placar
    }
    $.post("http://localhost:3000/placar", dados, function () {
        console.log("Placar sincronizado com sucesso");
    });
}
