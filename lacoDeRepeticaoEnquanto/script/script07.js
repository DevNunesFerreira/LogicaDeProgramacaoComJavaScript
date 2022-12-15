let contadora=1;
let sucessor=1;
let antecessor=1;
let soma;

while (contadora <= 15) {
    soma=antecessor+sucessor;
    antecessor=sucessor;
    sucessor=soma;
    document.write(sucessor+"</br>");
    contadora++;
}