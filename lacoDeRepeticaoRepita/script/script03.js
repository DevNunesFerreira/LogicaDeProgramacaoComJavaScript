let contadora = 0;
let acumuladora = 0;

do {
    if (acumuladora%4 === 0) {
        acumuladora=acumuladora+4;
        document.write(acumuladora+"</br>");
        contadora++;
    }
} while (acumuladora <= 199);