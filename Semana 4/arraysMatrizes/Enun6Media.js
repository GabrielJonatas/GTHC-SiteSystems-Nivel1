function geraListaDeNumeros (n,m) {
    let lista = [];

    for (let i = 0; i <n; i++) {
        let numero = Math.round(Math.random()*m);
    
        lista.push(numero);
    }

    return lista;
}

let n = 10;
let maiorValor = 50;
const lista = geraListaDeNumeros (n,maiorValor);
const soma = lista.reduce((acumulador, valorAtual)=> acumulador + valorAtual, 0);
let media = soma/n;

console.log(media.toFixed(2));