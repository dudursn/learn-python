/**
	Funções
*/

function calculaImc(peso, altura){
	var imc =peso/(altura*altura);
	return imc.toFixed(2);
}

function validaDados(paciente, tdImc, peso, altura){
	if(peso<0 || peso >= 1000){
		console.log("Peso Inválido");
		tdImc.textContent ="Peso Inválido";
		//Adiciona o css a tag, esse css modifica o background-color da linha na tabela
		paciente.classList.add("paciente-invalido");
		return false;
	}
	if(altura<0 || altura>=3.00){
		console.log("Altura Inválida");
		tdImc.textContent = "Altura Inválida";
		//Adiciona o css a tag, esse css modifica o background-color da linha na tabela
		paciente.classList.add("paciente-invalido");
		return false;
	}
	return true;
}