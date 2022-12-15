let B = parseInt(prompt("Digite o valor da base: "));
let E = parseInt(prompt("Digite o valor do expoente: "));
let contadora = 1;
let potencia = B;
while (contadora < E) {
    B = B * potencia;
    contadora++;
};
document.write(B);