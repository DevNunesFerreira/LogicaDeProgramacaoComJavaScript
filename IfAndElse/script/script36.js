let homem1 = parseInt(prompt("Digite a idade do primeiro homem: "));
let homem2 = parseInt(prompt("Digite a idade do segundo homem: "));
let mulher1 = parseInt(prompt("Digite a idade do primeira mulher: "));
let mulher2 = parseInt(prompt("Digite a idade do segunda mulher: "));

if (homem1 > homem2 && mulher1 < mulher2) {
    soma = homem1 + mulher1;
    produto = homem2 * mulher2;

} else if (homem1 > homem2 && mulher2 < mulher1) {
    soma = homem1 + mulher2;
    produto = homem2 * mulher1;

} else if (homem2 > homem1 && mulher1 < mulher2) {
    soma = homem2 + mulher1;
    produto = homem1 * mulher2;

} else {
    soma = homem2 + mulher2;
    produto = homem1 * mulher1;
};

alert("A soma das idades do homem mais velho com a mulher mais nova é: " + soma);
alert("O produto das idades do homem novo com a mulher mais velha é: " + produto);