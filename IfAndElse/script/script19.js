let A = parseInt(prompt("Digite o valor de A: "));
let B = parseInt(prompt("Digite o valor de B: "));
let C = parseInt(prompt("Digite o valor de C: "));

if ((A < B + C) && (B < A + C) && (C < A + B)) {
    alert("É possível formar um triângulo");
} else {
    alert("Não é possível formar um triângulo");
};