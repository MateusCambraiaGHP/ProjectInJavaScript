const botaoEnviar = document.querySelector("#adicionar-paciente");

botaoEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    

    let form = document.querySelector("#formform");
    let paciente = obtemDadosPaciente(form);


    let erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    let tabela = montaTr(paciente);

    let tabelaPacientes = document.querySelector("#tabela-pacientes");
    tabelaPacientes.appendChild(tabela);
});


function obtemDadosPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}
function validaPaciente(paciente) {
    let erros = [];

    let alturaValida = validaAltura(paciente.altura);
    let pesoValido = validaPeso(paciente.peso);
    let nomePaciente = paciente.nome;

   
    if (nomePaciente.length == 0) {
        erros.push("INSIRA UM NOME.");
    }
    if (alturaValida == false) {
        erros.push("INSIRA UMA ALTURA VALIDA.");
    }
    if (pesoValido == false) {
        erros.push("INSIRA UM PESO VALIDO.");
    }
    return erros;
}
function montaTr(paciente) {

    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    let nomeTd = montaTd(paciente.nome, "info-nome");
    let pesoTd = montaTd(paciente.peso, "info-peso");
    let alturaTd = montaTd(paciente.altura, "info-altura");
    let gorduraTd = montaTd(paciente.gordura, "info-gordura");
    let imcTd = montaTd(paciente.imc, "info-imc");


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
function exibeMensagensDeErro(erros) {
    let ulErro = document.querySelector("#mensagens-erro");
    ulErro.innerHTML = "";

    erros.forEach(erro => {
        var Li = document.createElement("li");
        Li.textContent = erro;
        Li.classList.add("mensagem-de-erro");
        ulErro.appendChild(Li);
    });
}