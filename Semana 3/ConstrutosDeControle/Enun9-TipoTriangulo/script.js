const a = 52;
const b = 51;
const c = 50;

if (a == b && a == c && b ==c) {
    console.log("É um triângulo equilátero.");
} else if (a == b || a == c || b ==c) {
    console.log("É um triângulo isósceles.");
} else {
    console.log("É um triângulo escaleno.");
}