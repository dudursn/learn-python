 //Olha o DOM - document object model vindo ai lek
//Modificar o título
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

/*Cálculo do imc do Paulo */
//Procura a tag que tem esse id, retorna apenas um elemento
//var paciente = document.querySelector("#primeiro-paciente");

//Retorna todos os elementos que pertencem a classe abaixo em um array
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i< pacientes.length; i++){
	var paciente = pacientes[i];

	//Dentro da tag anterior, procura as tags que possuem as classes e pegam os conteudos que esta nessas outras tags(textContent)
	var tdPeso = paciente.querySelector(".info-peso").textContent;
	var tdAltura = paciente.querySelector(".info-altura").textContent;

	//Procura a tag alvo onde serão jogados as informações
	var tdImc = paciente.querySelector(".info-imc");

	var valido = validaDados(paciente, tdImc, tdPeso, tdAltura);
	
	if(valido){
		//Calcula o imc
		var imc = calculaImc(tdPeso, tdAltura);
		//Faz o calculo do IMC e joga no conteudo da tag alvo
		tdImc.textContent = imc;
	}

}

//Escutar eventos - Função anônima:função sem nome
titulo.addEventListener("click", function(){
	console.log("Clicado, função anônima")
});

//Escutar eventos - Função normal
titulo.addEventListener("click", mostraMensagem);
function mostraMensagem(){
	console.log("Clicado, função normal");
}


