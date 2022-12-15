let comeco = parseInt(prompt("Insira o horário de ínicio do jogo: "));
let fim = parseInt(prompt("Insira o horário de término do jogo: "));

let duracao = comeco - fim;

if (duracao >= 0) {
    duracao = duracao + 24;
    alert("A duração da partida foi de: " + duracao + " horas");
} else {
    alert("A duração da partida foi de: " + duracao + " horas");
};