
function main() {
    var valoresDeEntrada = document.querySelectorAll(".valor");
    var botaoCalcular = document.querySelector("#calcQuad");
    botaoCalcular.addEventListener("click", function () {
        calculaQuadrado(valoresDeEntrada);
    });
}


function calculaQuadrado(valoresDeEntrada) {
    var resultados = [];
    valoresDeEntrada.forEach(function (valor) {
        resultados.push(valor.value ** 2);
    })
    console.log(resultados);
    insereResultadoNaTela(resultados);
}

function insereResultadoNaTela(resultados) {
    var divResultado = document.querySelector("#resultado");

    //Limpa tela
    divResultado.innerHTML="";

    for (var i = 0; i < resultados.length; i++) {

        var label = document.createElement("label");
        var span = document.createElement("span");
        span.textContent = resultados[i]+";    ";

        label.appendChild(span);
        label.setAttribute("margin-right","40px");
        //Quebra de linha
        divResultado.appendChild(label);
    }
}

main();