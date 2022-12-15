// 12) Escreva um algoritmo para ler as dimensões de um círculo (raio), calcular e escrever a área do círculo. a=pi*r² 

var raio = parseFloat(prompt("Digite o valor do raio do círculo: "));
var area = Math.PI * raio ** 2;
alert("O resultado da área do círculo é de: " + area);