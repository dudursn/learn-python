/*
    Orientação à objetos javaScript
*/

var form = document.querySelector("#form-adiciona");

//Criando um objeto paciente em javascript
var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
}