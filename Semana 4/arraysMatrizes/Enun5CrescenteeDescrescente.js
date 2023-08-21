function geraListaDeNumeros (n,m) {
    let lista = [];

    for (let i = 0; i <n; i++) {
        let numero = Math.round(Math.random()*m);
    
        lista.push(numero);
    }

    return lista;
}

function ordenaCrescente (lista, n , range) {
    let listaIntermediaria = [];
    let copialista = [...lista];

    for (let i = 0; i<n; i++) { 
        let min = range + 1;
        let indice = 0;
        for (let j = 0; j < n; j++) {
            if (min > copialista[j]) {
                min = copialista[j];
                indice = j;
            }
        }

        listaIntermediaria.push(min);
        copialista.splice(indice,1);
    }
    
    return listaIntermediaria;
}

let n = 50;
let maiorValor = 100000;
const lista = geraListaDeNumeros(n,maiorValor);
let listaOrdenadaCrescente = ordenaCrescente(lista, n, maiorValor);
let listaOrdenadaDecrescente = [...listaOrdenadaCrescente].reverse();

console.log(listaOrdenadaCrescente);
console.log(listaOrdenadaDecrescente);