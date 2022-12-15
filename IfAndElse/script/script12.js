let valorFixo = parseFloat(prompt("Digite o seu salário fixo: "));
let valorVendas = parseFloat(prompt("Digite o valor das vendas efetuadas pelo vendedor: "));

if (valorVendas>1500){
    let salarioFinal = valorVendas * (5/100) + valorFixo;
}else{
    salarioFinal = valorVendas
}