let horasMes = parseFloat(prompt("Digite as horas trabalhadas nesse mês: "));
let salarioHora = parseFloat(prompt("Digite o seu salário recebido por hora trabalhada: "));

if (horasMes > 160) {

    let horaExtra = (horasMes - 160) * salarioHora + (salarioHora * 50 / 100);
    let salarioFinal = horaExtra + salarioHora * 160;

    document.write("As horas trabalhadas nesse mês foram de: " + horasMes + " Horas" + "</br>");
    document.write("</br>");
    document.write("O salário por hora trabalhada foi de: R$" + salarioHora + "</br>");
    document.write("</br>");
    document.write("O salário ganho por hora extra foi de: R$" + horaExtra + "</br>");
    document.write("</br>");
    document.write("O salário final do funcionário foi de: R$" + salarioFinal + "</br>");
} else {

    salarioFinal = 160 * salarioHora;

    document.write("As horas trabalhadas nesse ês foram de: " + horasMes + " Horas" + "</br>");
    document.write("</br>");
    document.write("O salário ganho por hora trabalhada foi de: R$", salarioHora + "</br>");
    document.write("</br>");
    document.write("O salário final do funcionário foi de: R$", salarioFinal + "</br>");
};