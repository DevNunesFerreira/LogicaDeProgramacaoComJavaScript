let contadora = 0;
let acumuladora = 1;

do {
    document.write("Até esse momento temos " + acumuladora + " grãos"+"</br>");
    acumuladora = acumuladora + acumuladora + 1;
    contadora++;
} while (contadora < 65);

document.write("No final teremos a somatória de " + acumuladora + " grãos");