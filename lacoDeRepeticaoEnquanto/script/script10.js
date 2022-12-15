let contadora = 50;
let acumuladora = 0;
let media;

while(contadora<70){
    if (contadora%2 === 0 ){
        acumuladora = acumuladora+contadora;
        document.write((acumuladora-contadora)," +",contadora," =", acumuladora, "</br>");
    };
    contadora++;
}
document.write("E a média aritmética da soma é de: ",(acumuladora/10));