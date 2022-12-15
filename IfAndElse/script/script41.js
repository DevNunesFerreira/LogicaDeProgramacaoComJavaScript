let N1 = parseFloat(prompt("Digite a primeira nota do aluno: "));
let N2 = parseFloat(prompt("Digite a segunda nota do aluno: "));
let N3 = parseFloat(prompt("Digite a terceira nota do aluno: "));
let mediaExerc = parseFloat(prompt("Digite a média dos exercícios do aluno: "));


media = (N1 + N2 * 2 + N3 * 3 + mediaExerc) / 7;

let conceito;
if (media >= 9.0) {
    conceito = "A";
} else if (media >= 7.5 && media < 9.0) {
    conceito = "B";
} else if (media >= 6.0 && media < 7.5) {
    conceito = "C";
} else {
    conceito = "D";
};

alert("O conceito final do aluno foi: " + conceito);