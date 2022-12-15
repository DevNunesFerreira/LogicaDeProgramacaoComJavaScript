//3) Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.  

let salario = parseFloat(prompt("Digite o seu salário fíxo: "));
let reajuste = parseFloat(prompt("Digite o percentual de reajuste: "));

let novoSalario = salario + (salario*reajuste/100);
alert("O seu novo salário é de: R$"+novoSalario);