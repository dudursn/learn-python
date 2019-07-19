function main() {
    var entrada = document.querySelector(".entrada").value;
    var botaoCalc = document.querySelector("#calcula");
    botaoCalc.addEventListener("click", function () {
        var valores = entrada.split(" ");
        console.log(valores);
        var idades = calculaMaiores(valores);
        console.log(idades);
        
        document.querySelector(".resultadoMaiores").textContent = idades[0];
        document.querySelector(".resultadoMenores").textContent = idades[1];
        
    })

}
function calculaMaiores(valores) {
    var maior = 0, menor = 0;
    for (var i = 0; i < valores.length; i++) {
        valores[i] = parseInt(valores[i]);
        if (Number.isInteger(valores[i])) {
            
            if (valores[i] >= 18) {
                maior += 1;
            } else{
                menor +=1
            }
        }
    }
  
    return [maior, menor];
}

main();