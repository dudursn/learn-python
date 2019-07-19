function main() {
    var entrada = document.querySelector(".entrada").value;
    var botaoCalcMaior = document.querySelector("#calcMaior");
    botaoCalcMaior.addEventListener("click", function () {
        var valores = entrada.split(" ");
        console.log(valores);
        if (testeEntrada(valores)) {
            var maior = Math.max(...valores);
            console.log(maior);
            var resultado = document.querySelector(".resultado");
            resultado.text = maior;
        }else{
            alert("Insira 5 valores numéricos com espaço em branco entre eles!");
        }
    })

}
function testeEntrada(valores){
    maior = 0
    if(valores.length==5){
        for (var i=0; i< valores.length; i++){
            valores[i] = parseInt(valores[i]);
            if (!Number.isInteger(valores[i])){
                return false;
            }
        }
        return true;
    }
    return false;
}

main();