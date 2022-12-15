// 3) Ler dois inteiros (variáveis A e B) e imprimir o resultado do 
// quadrado da diferença do primeiro valor pelo segundo.

let valor1 = parseFloat(prompt("Insira o primeiro valor: "));
let valor2 = parseFloat(prompt("Insira o segundo valor: "));

let resultado = (valor1 - valor2)**2;

alert("O resultado do cálculo é: " + resultado);