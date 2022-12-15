// 9) Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e 
// também o valor do percentual de reajuste (variável PR) a ser atribuído. 
// Apresentar o valor do novo salário (variável NS).

let SM = parseFloat(prompt("Digite o salário mensal: "));
let PR = parseFloat(prompt("Digite o percentual de reajuste: "));

let NS = SM+(SM*PR/100);

document.write("O novo salário vai ser: R$"+NS);