let maior;
let menor;
let valor = 0;

while (valor >= 0) {
    valor = parseInt(prompt("Digite um valor:"));
    
    if (valor > 0) {
        maior = valor;
    } else {
        menor = valor;
    };
};
document.write("O maior e o menor valor são respectivamente: " + maior + " e " + menor);