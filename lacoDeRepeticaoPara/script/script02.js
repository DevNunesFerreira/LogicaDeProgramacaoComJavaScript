let multiplicador = parseInt(prompt("Digite "));
let resultado;


for (let contadora = 1; contadora <= 10; contadora++) {
    resultado = multiplicador * contadora;
    document.write(multiplicador + " x " + contadora + " = " + resultado + "</br>")
}