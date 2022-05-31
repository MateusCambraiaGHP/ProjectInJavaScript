const titulo = document.querySelector(".titulo");
titulo.textContent = "MathDrinks";
titulo.style.color = "#F9F9F9";


var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(paciente => {
    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");
    let imc = calculaIMC(peso, altura);
    if (imc >= 60 || imc <= 8) {
        paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }
    tdImc.textContent = imc;
});


function validaPeso(peso) {
    if (peso >= 200 || peso <= 10) {
        return false;
    }
    return true
}

function validaAltura(altura) {
    if (altura <= 0 || altura >= 3.0) {
        return false;
    }
    return true;
}
function calculaIMC(peso, altura) {
    let imc = (peso / (altura * altura));
    return imc.toFixed(2);
}