let carrosVendidos = parseFloat(prompt("Digite o número de carros vendidos: "));
let valorVendas = parseFloat(prompt("Digite o valor total das suas vendas: "));
let salarioFixo = parseFloat(prompt("Digite o seu salário fixo: "));
let valorPorCarro = parseFloat(prompt("Digite o valor da comissão cada por carro vendido"));

let comissao = carrosVendidos * valorPorCarro;

comissao = comissao + (valorVendas * 5 / 100);

let salarioFinal = comissao + salarioFixo;

window.alert("O salário final será de: R$" + salarioFinal);