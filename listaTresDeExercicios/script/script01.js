// 1) Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na 
// utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, 
// devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será 
// necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída

let A = parseInt(prompt("Escreva o valor de A: "));
let B = parseInt(prompt("Escreva o valor de B: "));
let C = parseInt(prompt("Escreva o valor de C: "));
let D = parseInt(prompt("Escreva o valor de D: "));

let somaAB = A + B;
let somaAC = A + C;
let somaAD = A + D;
let multipAB = A * B;
let multipAC = A * C;
let multipAD = A * D;

let somaBC = B + C;
let somaBD = B + D;
let multipBC = B * C;
let multipBD = B * D;

let somaCD = C + D;
let multipCD = C + D;

window.alert("A soma entre A e B é: " + somaAB);
window.alert("A soma entre A e C é: " + somaAC);
window.alert("A soma entre A e D é: " + somaAD);
window.alert("A multiplicação entre A e B é: " + multipAB);
window.alert("A multiplicação entre A e C é: " + multipAC);
window.alert("A multiplicação entre A e D é: " + multipAD);

window.alert("A soma entre B e C é: " + somaBC);
window.alert("A soma entre B e D é: " + somaBD);
window.alert("A multiplicação ente B e C é: " + multipBC);
window.alert("A multiplicação entre B e D é: " + multipBD);

window.alert("A soma entre C e D é: " + somaCD);
window.alert("A multiplicação entre C e D é: " + multipCD);