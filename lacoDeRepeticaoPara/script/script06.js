document.write("Os números divisíveis por 4 de 0 a 200 são: </br>")

for (let contadora = 0; contadora <= 200; contadora++) {
    if (contadora % 4 == 0) {
        document.write(contadora + "</br>");
    }
}