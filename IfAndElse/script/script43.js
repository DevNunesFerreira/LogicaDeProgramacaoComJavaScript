let valor1 = parseInt(prompt("Digite o primeiro valor:"));
let valor2 = parseInt(prompt("Digite o segundo valor:"));
let valor3 = parseInt(prompt("Digite o terceiro valor:"));

if (valor1 < valor2 + valor3 && valor2 < valor1 + valor3 && valor3 < valor1 + valor2) {
    if (valor1 == valor2 && valor2 == valor3) {
        document.write("Os valores digitados podem formar um triângulo equilatero");
    } else if (valor1 == valor2 || valor2 == valor3 || valor1 == valor3) {
        document.write("Os valores digitados podem formar um triângulo isóceles");
    } else {
        document.write("Os valores digitados podem formar um triângulo escaleno");
    }
} else {
    document.write("Os valores digitados não podem formar um triângulo");
};