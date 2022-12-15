let contadora = 1;
let acumuladora = 0;
let valor;
let media;

while (contadora <= 10) {
    valor = parseInt(prompt("Digite o " + contadora + "° valor: "));
    contadora++;
    acumuladora = acumuladora + valor;
    media = acumuladora / 10;
}
document.write("O total dos valores somados é: " + acumuladora + "</br>");
document.write("A média dos valores somados é: " + media);