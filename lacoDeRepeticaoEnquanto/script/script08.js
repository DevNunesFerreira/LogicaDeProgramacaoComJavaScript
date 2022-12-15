let C=10;
let F=0;
let contadora=10;

while (contadora <= 100) {
    F = ((9 * C) + 160) / 5;
    document.write("Os graus Celsius em Fahrenheit são: " + C + "°C = " + F + "°F"+"</br>");
    C = C + 10;
    contadora = contadora + 10;
};