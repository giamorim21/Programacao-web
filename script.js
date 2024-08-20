
function submeter() {

    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;

    //console.log(cpf);
    console.log(validaCpf(cpf));

}

function validaCpf(cpf) {

    if(cpf == "") {
        alert("Campo CPF não pode ser vazio.");
        return false;
    }

    cpf = cpf.trim(); /*Retira os espaços*/

    //Verificar se é composto SOMENTE de números, "." ou "-"
    if(/[a-zA-Z]/.test(cpf)) {  /*Para procurar letras maiusculas e miniusculas no CPF*/
        alert("CPF não pode conter letras.");
        return false;
    }

    if(!/^[\d.-]+$/.test(cpf)) {  /*Serve para validar número, '.' e  o '-' atravês do [\d.-] e para não validar os outros caracteres atraves do ^ +$*/
        alert("O CPF só pode ter números, '.' ou '-'");
        return false;
    }
    
    if(cpf.length != 11 && cpf.length != 14) {
        alert("Formato inválido!");
        return false;
    }

    //console.log(typeof(cpf));

    // Interar 9 primeiros digitos, respeitando a seguinte regra:
    // digito1 * 10 + digito2 * 9 + digito3 * 8 + ... + digito9 * 2 = resultado
    // Dividir resultado por 11
    // Recuperar o RESTO da divisão por 11
    // Calcular (11 - RESTO)
    // O resultado de (11 - RESTO) deve ser primeiro digito verificador do CPF (10º digito)
    // Caso o RESTO seja 0 ou 1, o digito verificador deve ser ZERO

    return true;

}