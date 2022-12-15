// 7) Elaborar um programa que efetue a leitura de três valores (A, B e C) e 
// apresente como resultado final o quadrado da soma dos três valores lidos.

let A = parseInt(prompt("Insira o valor de A: "));
let B = parseInt(prompt("Insira o valor de B: "));
let C = parseInt(prompt("Insira o valor de C: "));

let quadrado = (A+B+C)**2;

document.write("O valor do quadrado da soma dos três valores é: "+quadrado);