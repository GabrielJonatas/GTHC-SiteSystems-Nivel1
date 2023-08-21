let lista = geraLista();

function geraLista () {
    let lista = [];

    for (let i = 0; i <300; i++) {
        let numero = Math.round(Math.random()*10000);
    
        lista.push(numero);
    }

    return lista;
}

let listaPares = [];
let listaImpares = [];

for (let k in lista) {
    if (lista[k]%2 != 0) {
        listaImpares.push(lista[k]);
    } else {
        listaPares.push(lista[k]);
    }
}

console.log(listaImpares);
console.log(listaPares);