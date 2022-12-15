// 8) Escreva um algoritmo para ler as dimensões de um triângulo (base e altura), calcular e escrever a área do triângulo. Dica a=b.h/2 

var base = parseFloat(prompt("Digite o valor da base do triângulo: "));
var altura = parseFloat(prompt("Digite o valor da altura do triângulo: "));
var area = (altura * base) / 2;
alert("O resultado da área do triângulo é: " + area);