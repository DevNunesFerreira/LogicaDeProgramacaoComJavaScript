// 2) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e 
// escrever o percentual que cada um representa em relação ao total de eleitores.

let eleitores = parseFloat(prompt("Digite o número de eleitores: "));
let validos = parseFloat(prompt("Digite o número de votos válidos: "));
let brancos = parseFloat(prompt("Digite o número de votos brancos: "));
let nulos = parseFloat(prompt("Digite o número de votos nulos: "));

validos=validos*100/eleitores;
brancos=brancos*100/eleitores;
nulos=nulos*100/eleitores;

alert("O percentual de números válidos é de: "+validos+"%");
alert("O percentual de brancos válidos é de: "+brancos+"%");
alert("O percentual de nulos válidos é de: "+nulos+"%");