let contadora = 1;
let acumuladora = 0;
let valor = 0;

do {
    valor = parseInt(prompt("Digite o " + contadora + "° valor"));
    acumuladora = acumuladora + valor;
    contadora++;
} while (contadora < 16);

document.write(acumuladora);