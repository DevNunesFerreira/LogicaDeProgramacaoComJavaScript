let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));
let anosTrabalho = parseInt(prompt("Quantos anos você já trabalhou na empresa"));

if (idade >= 60 && anosTrabalho >= 25) {
    document.write("O funcionario " + nome + " pode se aposentar" + "</br>")
} else {
    document.write("O funcionario " + nome + " não pode se aposentar")
}