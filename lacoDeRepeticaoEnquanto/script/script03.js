let contadora = 1;
let acumuladora = 0;
while (contadora < 501) {
    if (contadora % 2 === 0) {
        acumuladora = acumuladora + contadora;
    }
    contadora++;
}
document.write(acumuladora + "</br>");