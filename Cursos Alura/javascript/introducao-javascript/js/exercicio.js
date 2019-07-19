
//Para o exercício de cópia
var inputFrase = document.querySelector('.frase');
var botaoCopia = document.querySelector('.botao-copia');
var copia = document.querySelector('.copia');

function botaoHandler() {
	copia.textContent = inputFrase.value;
	inputFrase.value = '';
}

botaoCopia.addEventListener('click', botaoHandler);

//Para o exercício de escutar dinamicamente
var ul = document.querySelector('ul');

ul.addEventListener('click', function(event) {
	
	alert(event.target.textContent);
});

var botao = document.querySelector('#botao');
var input = document.querySelector('#campo');
var lista = document.querySelector('.lista');

botao.addEventListener('click',function() {

	var li = document.createElement('li');
	li.textContent = input.value;
	input.value = "";
	lista.appendChild(li);
});
