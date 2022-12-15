// 6) Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius.
// A fórmula de conversão é C=(F-32) *(5/9), sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. 

let fahrenheit = parseFloat(prompt("Digite o valor da temperatura em Celsius: "));

celsius = (fahrenheit - 32) * (5/9);

alert("O valor de Celsius em Fahrenheit é: "+celsius+"°C");