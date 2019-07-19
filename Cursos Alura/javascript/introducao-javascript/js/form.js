
function validaCriacaoDaTD(nome, peso, altura, gordura){
	if (isEmpty(nome) || isEmpty(peso) || isEmpty(altura) || isEmpty(gordura)){
		return false;
	}else if(peso<0 || peso>1000){
		alert("Peso Inválido!");
	}else if(altura<0 || altura>3.0){
		alert("Altura Inválida!");
	}
	return true;
}

function isEmpty(str) {
    return (!str || 0 === str.length || str.trim()=="");
}
function criaPacientesTD(form){
	var pacienteTds = [];
	var listaDeClassesCSS = ["info-nome","info-peso","info-altura","info-gordura","info-imc"]

	//Percorre todos os elementos do formulario com exceção do button
	for(var i=0;i<form.elements.length;i++){

		//Cria um elemento de tag <td></td>
		pacienteTds[i] = document.createElement("td");

		//Adiciona a class css correspondente a tag
		pacienteTds[i].classList.add(listaDeClassesCSS[i]);

		if(i!=form.elements.length -1){
			//Adiciona os valores do formulario no conteudo da tag td. Ex.:<td>Donald</td>
			pacienteTds[i].textContent = form.elements[i].value;
		}else{
			//Calcula o imc
			pacienteTds[i].textContent = calculaImc(form.peso.value,  form.altura.value); 
		}		
	}
	return pacienteTds;
}

function criaPacientesTR(pacienteTds){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	//For each javascript
	pacienteTds.forEach(function(pacienteTd){
		pacienteTr.appendChild(pacienteTd);
	});
	
	return pacienteTr;	
}

/*Inicio*/

//Escutando botão na página
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
	console.log("Botão clicado!!");
	
	var form = document.querySelector("#form-adiciona");

	nome = form.nome.value;
	peso = form.peso.value;
	altura = form.altura.value;
	gordura = form.gordura.value;
	
	var podeCriar = validaCriacaoDaTD(nome, peso, altura, gordura);

	if(podeCriar){
		//Cria elementos de tag <td> </td> com seu conteudo dentro da tag
		var pacienteTds = criaPacientesTD(form);

		//Cria um elemento de tag <tr></tr>
		var pacienteTr = criaPacientesTR(pacienteTds);

		var posicaoImc = pacienteTds.length - 1;

		//Testa restrições 
		validaDados(pacienteTr, pacienteTds[posicaoImc], peso, altura);

		//Coloca o elemento tr criado na tabela da página
		var tabela = document.querySelector("#tabela-pacientes");
		tabela.appendChild(pacienteTr);
		form.reset();
	}else{
		alert("Existe(m) campo(s) vazio(s)!");
	}
});
