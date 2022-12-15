let valor = parseInt(prompt("Digite um valor para construir a tabuada: "));
let tabuada;
let contadora = 1;

while (contadora < 11) {
    tabuada = valor * contadora;
    document.write(valor + " x " + contadora + " = " + tabuada + "</br>");
    contadora++;
};