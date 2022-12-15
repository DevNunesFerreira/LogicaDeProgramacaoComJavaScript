let avaliação1 = parseInt(prompt("Digite a nota da primeira avaliação: "));
let avaliação2 = parseInt(prompt("Digite a nota da segunda avaliação: "));

media = (avaliação1 + avaliação2) / 2;

if (media >= 6) {
    alert("O aluno foi aprovado com " + media + " de média");
} else {
    alert("O aluno foi reprovado com " + media + " de média");
};