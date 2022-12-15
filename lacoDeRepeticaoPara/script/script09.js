let sucessor = 1;
let antecessor = 0;
let soma;

document.write("o 1º termo da sequência é: 0" + "</br>")
document.write("o 2º termo da sequência é: 1" + "</br>")
for (let contadora = 3; contadora <= 15; contadora++) {
    soma = antecessor + sucessor;
    antecessor = sucessor;
    sucessor = soma;
    document.write("o " + contadora + "º termo da sequência é: " + soma + "</br>");
}