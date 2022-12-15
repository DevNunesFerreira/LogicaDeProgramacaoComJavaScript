let produto = String(prompt("Digite o nome do produto: ")),
    quantidade = parseInt(prompt("Digite a quantidade adquirida do produto: ")),
    preco = parseFloat(prompt("Digite o preço unitário do produto: "));

let total = quantidade * preco;

if (quantidade <= 5) {
    desconto = total - (total * (2 / 100));
} else if (quantidade > 5 && quantidade <= 10) {
    desconto = total - (total * (3 / 100));
} else {
    desconto = total - (total * (5 / 100));
};

let valorTotal = total - desconto;

alert("O valor da compra é: R$" + total);
alert("O desconto recebida para a compra é de: R$" + desconto);
alert("O valor total a pagar é de: R$" + valorTotal);