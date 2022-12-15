let kgMorangos = parseFloat(prompt("Digite os kilos de morango comprados: "));
let kgMacas = parseFloat(prompt("Digite os kilos de maçãs comprados: "));

let kgTotal = kgMacas + kgMorangos;

if (kgMorangos <= 5) {
    descontoMorangos = kgMorangos * 2.50;
} else {
    descontoMorangos = kgMorangos * 2.20;
};

if (kgMacas <= 5) {
    descontoMacas = kgMacas * 1.80;
} else {
    descontoMacas = kgMacas * 1.50;
};

let total = descontoMacas + descontoMorangos;

if (total > 25 || kgTotal > 8) {
    descontoTotal = total - (total * (10 / 100));
} else {
    descontoTotal = total;
};

alert("O valor a ser pago será de: " + descontoTotal);