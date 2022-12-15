// 7) Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: Volume = π*Raio2*Altura 

let raio = parseFloat(prompt("Digite o valor do raio da lata de óleo: "));
let altura = parseFloat(prompt("Digite o valor da altura da lata de óleo: "));

let volume = 3.14 * raio * raio * altura;

alert("O volume da lata de óleo é de: " + volume);