let valor1 = parseInt(prompt("Digite o primeiro valor: "));
let valor2 = parseInt(prompt("Digite o segundo valor: "));
let valor3 = parseInt(prompt("Digite o terceiro valor: "));

let resultado;

if (valor1 > valor2 && valor2 > valor3) {
    resultado = valor1 + valor2;
    alert("A ordem crescente dos valores inseridos é: "+valor3+", "+valor2+", "+valor1);


} else if (valor1 > valor3 && valor3 > valor2) {
    resultado = valor1 + valor3;
    alert("A ordem crescente dos valores inseridos é: "+valor2+", "+valor3+", "+valor1);



} else if (valor2 > valor1 && valor1 > valor3) {
    resultado = valor2 + valor1;
    alert("A ordem crescente dos valores inseridos é: "+valor3+", "+valor1+", "+valor2);



} else if (valor2 > valor1 && valor3 > valor1) {
    resultado = valor2 + valor3;
    alert("A ordem crescente dos valores inseridos é: "+valor1+", "+valor3+", "+valor2);



} else if (valor3 > valor2 && valor2 > valor1) {
    resultado = valor3 + valor2;
    alert("A ordem crescente dos valores inseridos é: "+valor1+", "+valor2+", "+valor3);


} else {
    (valor3 > valor2 && valor1 > valor2)
    resultado = valor3 + valor1;
    alert("A ordem crescente dos valores inseridos é: "+valor2+", "+valor1+", "+valor3);
};