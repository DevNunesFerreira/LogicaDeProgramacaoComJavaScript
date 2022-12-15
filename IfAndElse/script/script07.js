let anoNascimento = parseInt(prompt("Digite o ano que você nasceu: "));
let anoAtual = parseInt(prompt("Digite o ano atual: "));

idade = anoAtual - anoNascimento;

if (idade < 18) {
    alert("Você não poderá votar esse ano!");
} else {
    alert("Você poderá votar esse ano!");
};