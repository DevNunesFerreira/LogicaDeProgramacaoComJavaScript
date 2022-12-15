let validosA = parseFloat(prompt("Insira o número total de votos válidos para o canditado A: "));
let validosB = parseFloat(prompt("Insira o número total de votos válidos para o canditado A: "));
let validosC = parseFloat(prompt("Insira o número total de votos válidos para o canditado A: "));

let brancos = parseFloat(prompt("Insira o número total de votos brancos: "));
let nulos = parseFloat(prompt("Insira o número total de votos nulos: "));

let eleitores = validosA + validosB + validosC + brancos + nulos;
let validos = validosA + validosB + validosC;
validos = validos * 100 / eleitores

let candidatoA = validosA * 100 / eleitores;
let candidatoB = validosB * 100 / eleitores;
let candidatoC = validosC * 100 / eleitores;

brancos = brancos * 100 / eleitores;
nulos = nulos * 100 / eleitores;

document.write("O número total de eleitores foram: " + eleitores + "%" + "</br>");

document.write("O percentual de números válidos é de: " + validos.toFixed(2) + "%" + "</br>");
document.write("O percentual de números brancos é de: " + brancos.toFixed(2) + "%" + "</br>");
document.write("O percentual de números nulos é de: " + nulos.toFixed(2) + "%" + "</br>");

document.write("O percentual de votos válidos para o candidato A é de: " + candidatoA.toFixed(2) + "%" + "</br>");
document.write("O percentual de votos válidos para o candidato B é de: " + candidatoB.toFixed(2) + "%" + "</br>");
document.write("O percentual de votos válidos para o candidato C é de: " + candidatoC.toFixed(2) + "%" + "</br>");
