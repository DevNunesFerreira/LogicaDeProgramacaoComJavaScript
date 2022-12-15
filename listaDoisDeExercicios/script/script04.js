//) O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
//  Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever
//  o custo final ao consumidor. 

let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do veículo: "));

let imposto = custoFabrica * 0.45;
let distribuidor = custoFabrica * 0.45;
let consumidor = custoFabrica + imposto + distribuidor;
alert("O gasto final com o veículo é de: R$" + consumidor);