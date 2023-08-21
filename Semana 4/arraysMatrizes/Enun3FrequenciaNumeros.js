let lista = geraLista();
let listaFrequencia = [];

function geraLista () {
    let lista = [];

    for (let i = 0; i <200; i++) {
        let numero = Math.round(Math.random()*Math.random()*Math.random()*Math.random()*Math.random()*10000);
    
        lista.push(numero);
    }

    return lista;
}

for (let k in lista) {
    let contador = 1;
    for (let i = Number(k)+1; i<lista.length; i++) {
        if (lista[i] == lista[k]) {
            lista.splice(i, 1);
            contador++;
        }
    }
    listaFrequencia.push(contador);
}

console.log(listaFrequencia);