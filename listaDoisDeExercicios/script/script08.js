//  8) Efetuar o cálculo da quantidade de litros de combustível gasta em uma 
// viagem, utilizando um automóvel que faz 12 Km por litro.

let tempoGasto = parseFloat(prompt("Digite o tempo gasto durante a viagem: "));
let velocidade = parseFloat(prompt("Insira a velocidade média durante a viagem: "));

let distancia = tempoGasto * velocidade;
let litrosGastos = distancia / 12;


alert("A velocidade média durante a viagem foi de: " + velocidade + "Km/h");
alert("O tempo gasto durante a viagem foi de: " + tempoGasto + " horas");
alert("A distância percorrida durante a viagem foi de: " + distancia + "km");
alert("Os litros de combústivel gasto durante a viagem é: " + litrosGastos.toFixed(2) + " litros");