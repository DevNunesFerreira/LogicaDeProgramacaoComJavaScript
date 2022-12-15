let time1 = String(prompt("Digite o nome do primeiro time: "));
let gols1 = parseInt(prompt("Quandos gols o " + time1 + " fez?"));
let time2 = String(prompt("Digite o nome do segundo time: "));
let gols2 = parseInt(prompt("Quandos gols o " + time2 + " fez?"));

if (gols1 > gols2) {
    alert("O " + time1 + " ganhou o jogo com " + gols1 + " gols");
} else if (gols2 > gols1) {
    alert("O " + time2 + " ganhou o jogo com " + gols2 + " gols");
} else {
    alert("Houve um empate entre os times");
}