let campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function () {
    let nameInput = this.value;

    let pacientes = document.querySelectorAll(".paciente")
    if (nameInput.length > 0) {
        pacientes.forEach(paciente => {
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            var expressao = new RegExp(nameInput, "i");
            if (!expressao.test(nome)) {
                paciente.classList.add("invisible");
            }
            else {
                paciente.classList.remove("invisible");
            }
        });
    }
    else {
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisible");
        });
    }
});