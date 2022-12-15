let contadora = 2;
let valor = 0;
let media = 0;
let soma = 0;

do {
    valor = parseInt(prompt("Digite um valor:"));

    soma = soma + valor;
    media = soma / (contadora - 1);
    contadora++;
} while (valor > 0);

document.write("O somatório dos valores lidos até agora é de: " + soma + "</br>");
document.write("A média dos valores lidos até agora é de: " + media.toFixed(2) + "</br>");
document.write("O total de valores lidos até agora é de: " + (contadora-2)  + "</br>");