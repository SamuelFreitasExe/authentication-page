
//retorna valores boleanos...

function verificaEmail() {
    const emailValido = "user@gmail.com";
    const emailDigitado = document.getElementById("meuInput").value;


    return emailDigitado === emailValido;

}

function verificaPass() {
    const passValido = "12345";
    const passDigitado = document.getElementById("passInput").value;


    return passDigitado === passValido;
}

//retornando uma resposta para o usuario...
function verifica() {

    const resultado = document.getElementById("resultado")
    const emailValido = verificaEmail(); // Call verificaEmail function
    const passValido = verificaPass(); // Call verificaPass function

    if (emailValido  || passValido) {
        resultado.textContent = "Logado";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Usário ou senha invalida!";
        resultado.style.color = "red";
    }
}




