let contadora = 1;
let antecessor = 10;
let acumuladora = 10;

document.write("O fatorial dos ímpares abaixo do número 10 são" + "<br>");
document.write("<br>")

do {
    if (contadora % 2 == 1) {
        acumuladora = acumuladora * antecessor;
        document.write("O fatorial de " + antecessor + " é " + acumuladora + "<br>");
    }
} while (contadora < 10);