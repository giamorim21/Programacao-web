
function submeter() {

    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;

    console.log(validaCpf(cpf));

}

function validaCpf(cpf) {

    if(cpf == "") {

        alert("Campo CPF não pode ser vazio.");
        return false;

    }

    return true;

}