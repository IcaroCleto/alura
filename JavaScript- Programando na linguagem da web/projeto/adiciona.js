var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function (event) {

    event.preventDefault(); // Impede comportamento padrão

    var campoNome = document.querySelector("#campo-nome");
    var campoPeso = document.querySelector("#campo-peso");
    var campoAltura = document.querySelector("#campo-altura");

    var pacienteNovo = "<tr class='paciente'>" +
        "<td class='info-nome'>" +campoNome.value+ "</td>" +
        "<td class='info-peso'>" +campoPeso.value+ "</td>" +
        "<td class='info-altura'>" +campoAltura.value+ "</td>" +
        "<td class='info-imc'></td>" +
        "</tr>"

    // document.getElementsByTagName("table")[0];
    // document.querySelectorAll("table"); // Faz a mesma coisa que a de cima. Retorna um array.
    var tabela = document.querySelector("table"); // Faz a mesma coisa que a de cima. Mas só retorna o primeiro elemento
    tabela.innerHTML = tabela.innerHTML + pacienteNovo;

    campoNome.value = "";
    campoPeso.value = "";
    campoAltura.value = "";

});