// 2) Elaborar um programa que calcule e apresente o volume de uma caixa retangular, 
// por meio da fórmula VOLUME=COMPRIMENTO * LARGURA * ALTURA.  

let altura = parseFloat(prompt("Digite a altura da caixa em metros: "));
let largura = parseFloat(prompt("Digite a largura da caixa em metros: "));
let comprimento = parseFloat(prompt("Digite o comprimento da caixa em metros: "));

let volume = altura * largura * comprimento;

alert("O volume da caxa é de: " + volume);