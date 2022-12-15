let celsius = 10;
let fahrenheit;

for (contadora = 1; contadora <= 10; contadora++) {
    fahrenheit = (celsius * 9 + 160) / 5;
    document.write("A conversão de " + celsius + "ºC para fahrenheit é: " + fahrenheit + "ºF" + "</br>");
    celsius = celsius + 10;
}