//10) Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a 
//troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a 
//possuir o valor da variável A. Apresentar os valores trocados. 

let A = parseInt(prompt("Digite o valor de A: "));
let B = parseInt(prompt("Digite o valor de B: "));

let C = A;
A = B;
B = C;

alert("Os valores antigos são: A = " + B + " e B = " + A);
alert("Os valores trocados são: A = " + A + " e B = " + B);