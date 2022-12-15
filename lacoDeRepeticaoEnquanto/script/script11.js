let comodo;
let opcao;
let largura;
let comprimento;
let acumuladora;
let area;
let total = 0 ;

opcao = prompt("Deseja calcular o seu cômodo? (S/N)");

while ((opcao === "S") || (opcao === "s")) {
    if ((opcao === "S") || (opcao === "s")) {
        comodo = prompt("Digite o cômodo");
        largura = parseFloat(prompt("Digite a largura do cômodo: "))
        comprimento = parseFloat(prompt("Digite o comprimento do cômodo:"))

        area = comprimento * largura;
        total = total + area;
        alert("A área do cômodo é de: " + area);

        opcao = prompt("Deseja calcular outros cômodos? (S/N)");
    } else {}
};
document.write("O valor total da área da residência é de: " + total);