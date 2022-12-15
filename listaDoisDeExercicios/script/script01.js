// 1) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.  

let dias;

let anosVida = parseInt(prompt("Digite seus anos de vida: "));
let mesesVida = parseInt(prompt("Digite seus meses de vida: "));
let diasVida = parseInt(prompt("E seus dias de vida: "));

anosVida = anosVida * 365;
mesesVida = mesesVida * 30;

dias = anosVida + mesesVida + diasVida;
alert("O seus dias totais de vida são: " + dias);