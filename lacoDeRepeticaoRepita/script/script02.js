let contadora = 1;
let acumuladora = 0;

do {
    if (contadora % 2 === 0) {
        acumuladora = acumuladora + contadora;
    };
    contadora++;
} while (contadora <= 499);

document.write((acumuladora - contadora) + " + " + contadora + " = " + acumuladora);