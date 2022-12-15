let litros = parseFloat(prompt("Digite os litros comprados de combustível: "));
let opcao = (prompt("Escolha o combústível A-Álccol ou G-Gasolina: "));

let descontoA;
let descontoG;

if (opcao.toLowerCase() === "a") {
    if (litros <= 20) {
        descontoA = litros * (2.90 - (3 / 100));
        alert("O total a pagar pelos litros de Álcool será de: R$" + descontoA.toFixed(2));
    } else {
        descontoA = litros * (2.90 - (5 / 100));
        alert("O total a pagar pelos litros de Álcool será de: R$" + descontoA.toFixed(2));
    }
} else {
    if (litros <= 20) {
        descontoG = litros * (3.30 - (4 / 100));
        alert("O total a pagar pelos litros de Gasoliina será de: R$" + descontoG.toFixed(2));
    } else {
        descontoG = litros * (3.30 - (6 / 100));
        alert("O total a pagar pelos litros de Gasolina será de: R$" + descontoG.toFixed(2));
    };
};