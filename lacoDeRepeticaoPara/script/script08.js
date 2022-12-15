let base = parseInt(prompt("Digite o valor da base:"));
let expoente = parseInt(prompt("Digite o valor do expoente"));
let potencia = 1;
document.write(base + " ^ 0 = 1" + "</br>")
for (let contadora = 1; contadora <= expoente; contadora++) {
    potencia = potencia * base;
    document.write(base + " ^ " + contadora + " = " + potencia + "</br>");
}