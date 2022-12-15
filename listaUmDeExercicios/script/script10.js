// 10) Escreva um algoritmo para ler as dimensões de um losango (diagonal maior, diagonal menor), calcular e escrever a área do losango. Dica a=D.d/2 

var D = parseInt(prompt("Digite o valor da diagonal maior do losango: "));
var d = parseInt(prompt("Digite o valor da diagonal menor do losango: "));
var area = (d * D) / 2;
alert("O valor da área do losango é de: " + area);