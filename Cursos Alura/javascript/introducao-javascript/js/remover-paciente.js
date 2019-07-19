// //Início - Meu codigo
// var pacientes = document.querySelectorAll(".paciente");
// console.log(pacientes);
// removePacientes(pacientes);

//  //A cada elemento adicionado, a lista de pacientes é atualizada
// var botaoAdicionar = document.querySelector("#adicionar-paciente");
// botaoAdicionar.addEventListener("click", function(){
//     var pacientes = document.querySelectorAll(".paciente");
//     removePacientes(pacientes);
// });

// function removePacientes(pacientes){
//     pacientes.forEach(function(paciente){
//         //dblclick => nome do evento duplo-clique
//         paciente.addEventListener("dblclick", function(){

//             /*Todo objeto document(DOM) do html tem a função remove para remoção.
//             this é uma referência para o elemento do DOM que esta recebendo o evento
//             */
//             this.remove();

//         });
//     });
// }

//Inicio - codigo do instrutor
var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

//dblclick => nome do evento duplo-clique
tabela.addEventListener("dblclick", function(event){

    //Mostra quem foi o elemento clicado na tabela
    console.log(event.target);
    console.log(this);
    var alvoEvento = event.target;
    var paiDoAlvo = event.target.parentNode; //TR = paciente = remover - paciente

    /*Remoção - Todo objeto document(DOM) do html tem a função remove para remoção.
    paiDoAlvo.remove();
    */
    
    /*Remoção com animação - Todo objeto document(DOM) do html tem a função remove para remoção.
    */
    paiDoAlvo.classList.add("fade-out");
    //Altera transição
    setTimeout(function(){
        paiDoAlvo.remove();
    }, 500);


});
