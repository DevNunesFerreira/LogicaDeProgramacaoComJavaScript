// 4) Elaborar um programa que efetue a apresentação do valor da conversão em real de um
// valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade
// de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira. 

let cotacao = parseFloat(prompt("Insira o valor da cotação atual do dólar: "));
let dolar = parseFloat(prompt("Insira o valor dos dólares disponíveis: "));

let reais = cotacao*dolar;

alert("O resultado da conversão de dólar para real é de: R$"+reais.toFixed(2));