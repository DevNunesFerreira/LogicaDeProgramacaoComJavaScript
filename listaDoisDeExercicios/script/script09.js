//9) Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTACAO=VALOR+(VALOR*TAXA/100) *TEMPO). 

let prestacao = parseFloat(prompt("Digite a quantia da prestação: "));
let tempo = parseFloat(prompt("Digite quantos meses ficou sem pagar: "));
let juros = parseFloat(prompt("Insira o percentual de juros colocado por mês"));

let valorFinal = prestacao + (prestacao * juros / 100) * tempo;

alert("O valor da prestação em atraso é de: R$" + valorFinal.toFixed(2));