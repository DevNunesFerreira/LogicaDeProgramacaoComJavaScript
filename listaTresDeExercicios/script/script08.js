// 8) Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e D). 
// Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado da
// soma (variável S) do segundo com o quarto valor. 

let A = parseInt(prompt("Insira o valor de A: "));
let B = parseInt(prompt("Insira o valor de B: "));
let C = parseInt(prompt("Insira o valor de C: "));
let D = parseInt(prompt("Insira o valor de D: "));

let P = A * C;
let S = B + D;

document.write("O resultado do produto entre " + A + " e " + C + " é: "+P+"</br>");
document.write("O resultado da soma entre " + B + " e " + D + " é: "+S+"</br>");
