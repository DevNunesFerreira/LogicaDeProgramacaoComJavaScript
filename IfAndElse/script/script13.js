let numeroConta = parseFloat(prompt("Digite o número da sua conta: "));
let saldo = parseFloat(prompt("Digite o saldo da sua conta: "));
let debito = parseFloat(prompt("Digite o débito da sua conta: "));
let credito = parseFloat(prompt("Digite o crédito da sua conta: "));

let saldoAtual = saldo - debito + credito;

if (saldoAtual >= 0) {
    alert("Seu saldo atual é de: R$" + saldoAtual.toFixed(2));
} else {
    alert("Seu saldo atual é negativo com uma dívida de: R$" + saldoAtual.toFixed(2));
};