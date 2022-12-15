let X = parseInt(prompt("Digite o valor de X: "));
let Y = parseInt(prompt("Digite o valor de Y: "));

let Z = (X * Y) + 5;
let resposta;

if (Z <= 0) {
    resposta = "A";
} else if (Z <= 100) {
    resposta = "B";
} else {
    resposta = "C";
};

alert(Z + " " + resposta);