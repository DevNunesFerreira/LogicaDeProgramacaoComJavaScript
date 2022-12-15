// 11) Escreva um algoritmo para ler as dimensões de um trapézio (base maior, base menor e altura), calcular e escrever a área do trapézio. a=(B+b).h/2

var B = parseFloat(prompt("Digite o valor da base maior do trapézio: "));
var b = parseFloat(prompt("Digite o valor da base menor do trapézio: "));
var h = parseFloat(prompt("Digite o valor da altura do trapézio: "));
var area = (B + b) * h / 2;
alert("O valor da área do trapézio é de: " + area);