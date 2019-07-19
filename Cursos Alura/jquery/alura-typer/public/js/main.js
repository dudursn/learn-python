console.log("Olá mundo!")
var espaco = /[\s]+/g;

/*Bem-vindo ao jquery*/
var frase = $(".frase").text();  //'$' querySelector do jquery, poderia ser tbm jQuery(".frase");
var palavras = frase.split(espaco);
var contagem = $("#contagem");
contagem.text(palavras.length)

/*Em javascript
var frase = document.querySelector(".frase").textContent;
var palavras = frase.split(espaco);
console.log(palavras)
var contagem = document.querySelector("#contagem");
contagem.textContent = palavras.length;
*/
