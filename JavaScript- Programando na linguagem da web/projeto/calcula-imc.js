var tdPeso1 = document.getElementById("peso-1"); // Resultado: <td class="info-peso" id="peso-2">100</td>
var tdAltura1 = document.getElementById("altura-1");

// Criação de um Objeto
var paciente1 = {
    "peso": tdPeso1.textContent,
    "altura": tdAltura1.textContent
};

var tdPeso2 = document.getElementById("peso-2"); // Resultado: <td class="info-peso" id="peso-2">100</td>
var tdAltura2 = document.getElementById("altura-2");

// Criação de um Objeto
var paciente2 = {
    "peso": tdPeso2.textContent,
    "altura": tdAltura2.textContent
};

//Coleção, array ou vetor são sinônimos.
var pacientes = [paciente1, paciente2];

var posicaoAtual = 0;

while (posicaoAtual <= pacientes.length - 1) {

    var paciente = pacientes[posicaoAtual];

    if (paciente.altura != 0) {
        var imc = paciente.peso / (paciente.altura * paciente.altura);

        // var tdImc = document.getElementById("imc-2");
        // tdImc.textContent = imc;

        console.log(imc);

    } else {
        console.log("Não posso executar uma divisão por 0!");
    }
    posicaoAtual++;
}



