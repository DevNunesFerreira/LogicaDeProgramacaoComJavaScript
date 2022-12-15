//5) Elaborar um programa que efetue a apresentação do valor da conversão
// em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do
// dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana

let cotacao = parseFloat(prompt("Insira o valor da cotação atual do dólar: "));
let reais = parseFloat(prompt("Insira o valor dos reais disponíveis: "));

let dolar = reais/cotacao;

alert("O resultado da conversão de real para dólar é de: U$"+dolar.toFixed(2));