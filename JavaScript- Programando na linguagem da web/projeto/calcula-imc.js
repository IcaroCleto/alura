// var tdPeso1 = document.getElementById("peso-1"); // Resultado: <td class="info-peso" id="peso-2">100</td>
// var tdAltura1 = document.getElementById("altura-1");

// // Criação de um Objeto
// var paciente1 = {
//     "peso": tdPeso1.textContent,
//     "altura": tdAltura1.textContent
// };

// var tdPeso2 = document.getElementById("peso-2"); // Resultado: <td class="info-peso" id="peso-2">100</td>
// var tdAltura2 = document.getElementById("altura-2");

// // Criação de um Objeto
// var paciente2 = {
//     "peso": tdPeso2.textContent,
//     "altura": tdAltura2.textContent
// };

// //Coleção, array ou vetor são sinônimos.
// var pacientes = [paciente1, paciente2];

var botao = document.getElementById("calcula-imcs");

botao.addEventListener("click", function(){
    var trsPacientes = document.getElementsByClassName("paciente");

    percorreArray(trsPacientes, imprimeEModificaTdDeImc);

    function imprimeEModificaTdDeImc(pacienteTr) {

        var pacienteAtual = montaPaciente(pacienteTr);
        var imc = pacienteAtual.pegaImc();

        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
        tdImc.textContent = imc;

        console.log(imc);
    }
});