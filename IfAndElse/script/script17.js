let valor1 = parseInt(prompt("Digite o primeiro valor: "));
let valor2 = parseInt(prompt("Digite o segundo valor: "));
let valor3 = parseInt(prompt("Digite o terceiro valor: "));

if (valor1 > valor2 && valor2 > valor3) {
    let resultado = valor1 + valor2;
    alert("A soma dos maiores valores é: " + valor1 + " + " + valor2 + " = " + resultado);


} else if (valor1 > valor3 && valor3 > valor2) {
    resultado = valor1 + valor3;
    alert("A soma dos maiores valores é: " + valor1 + " + " + valor3 + " = " + resultado);



} else if (valor2 > valor1 && valor1 > valor3) {
    resultado = valor2 + valor1;
    alert("A soma dos maiores valores é: " + valor2 + " + " + valor1 + " = " + resultado);



} else if (valor2 > valor1 && valor3 > valor1) {
    resultado = valor2 + valor3;
    alert("A soma dos maiores valores é: " + valor2 + " + " + valor3 + " = " + resultado);



} else if (valor3 > valor2 && valor2 > valor1) {
    resultado = valor3 + valor2;
    alert("A soma dos maiores valores é: " + valor3 + " + " + valor2 + " = " + resultado);


} else {
    (valor3 > valor2 && valor1 > valor2)
    resultado = valor3 + valor1;
    alert("A soma dos maiores valores é: " + valor3 + " + " + valor1 + " = " + resultado);
};