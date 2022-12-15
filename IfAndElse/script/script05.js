let quantidade = parseFloat(prompt("Digite a quantidade de maçãs escolhidas"));

if (quantidade >= 12) {
    alert("O valro da compra será de: R$" + (quantidade * 1).toFixed(2));
} else {
    alert("O valor da compra será de: R$" + (quantidade * 1.30).toFixed(2));
};