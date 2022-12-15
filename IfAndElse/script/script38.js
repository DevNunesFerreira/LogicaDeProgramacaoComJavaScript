let senhaUsu = 9999;
let codUsu = 1234;

let usuario = parseInt(prompt("Digite o código de usuário: "));

if (usuario != codUsu) {
    alert("Usuário inválido!");
} else {
    let senha = parseInt(prompt("Digite a senha: "));
    if (senha != senhaUsu) {
        alert("Senha inválida!");
    } else {
        alert("Acesso permitido.");
    };
};