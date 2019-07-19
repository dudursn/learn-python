
function inserindoCamposValores() {
    var botaoAddCampo = document.querySelector(".addCampo");
    botaoAddCampo.addEventListener("click", function () {
        var spans = document.querySelectorAll(".indiceValor");
        var indice = spans.length;

        var label = document.createElement("label");

        var span = document.createElement("span");
        span.textContent = indice + 1 + " ";
        span.classList.add("indiceValor");

        var input = document.createElement("input");
        input.setAttribute("type", "number");
        input.classList.add("valor");

        addElementosADivInsercao(label,input, span);
    });
}

function addElementosADivInsercao(label, input, span) {
    var divPai = document.querySelector('#insercao');
    label.appendChild(span);
    divPai.appendChild(document.createElement("br"));
    divPai.appendChild(label);
    divPai.appendChild(input);
}

function calculaMedia(){
    var botaoCalculaMedia = document.querySelector(".calcMedia");
    botaoCalculaMedia.addEventListener("click", function(){

        var numElementos = document.querySelectorAll(".indiceValor").length;
        var valores = document.querySelectorAll(".valor");

        var soma = 0;
        valores.forEach(function(valor){
            soma = Number(soma) + Number(valor.value);
        });
        /*
        console.log(soma);
        console.log(numElementos);
        */
        var media = soma/numElementos;

        document.querySelector(".resultado").textContent = media;
    })

}

inserindoCamposValores();
calculaMedia();


