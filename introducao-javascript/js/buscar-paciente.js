let button = document.querySelector("#buscar-paciente");
const erroAjax = document.querySelector("#ajax-erro");

button.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    let pacientesTragos = [];

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();

    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {
            erroAjax.classList.add("invisible");

            let respostaEmJson = this.responseText;

            arrayDePacientes = JSON.parse(respostaEmJson);
            arrayDePacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        }
        else{
            erroAjax.classList.remove("invisible");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    })
})


