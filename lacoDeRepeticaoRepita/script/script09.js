let maior = 0;
let valor;

do {

    valor = parseInt(prompt("Informe um valor: "));

    if (maior < valor) {
        maior = valor;
    } else {
        menor = valor;
    }

} while (valor >= 0);
document.write("O maior valor informado é: " + maior+"</br>");
document.write("O menor valor informado é: " + menor);