let valor1 = parseInt(prompt("Digite o primeiro valor: "));
let valor2 = parseInt(prompt("Digite o segundo valor: "));

if (valor1 < valor2) {
    document.write("O primeiro valor é: " + valor1 + "</br>");
    document.write("O segundo valor é: " + valor2);
} else {
    document.write("O primeiro valor é: " + valor2 + "</br>");
    document.write("O segundo valor é: " + valor1);
};