let estoqueAtual = parseFloat(prompt("Digite a quantidade atual em estoque: "));
let qtdMax = parseFloat(prompt("Digite a quantidade máxima em estoque: "));
let qtdMin = parseFloat(prompt("Digite a quantidade mínima do estoque: "));

let qtdMed = (qtdMax + qtdMin) / 2;

document.write("A quantidade média do produto é: " + qtdMed + "</br>");

if (estoqueAtual >= qtdMed) {
    document.write("Não efetuar compra!");
} else {
    document.write("Efetuar compra!");
};