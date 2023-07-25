const a = Number(prompt("Digite um angulo"));
const b = Number(prompt("Digite um angulo"));
const c = Number(prompt("Digite um angulo"));

condicao1 = (a > 0 && b > 0) && c > 0;

if (condicao1 && (a+b+c == 180)) {
    alert("Formam um triangulo!");
} else {
    alert("Não formam triangulo!");
}