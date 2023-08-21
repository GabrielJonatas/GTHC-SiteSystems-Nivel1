let lista = geraLista();
let listaNaoRepetida = [];

function geraLista () {
    let lista = [];

    for (let i = 0; i <100; i++) {
        let numero = Math.round(Math.random()*Math.random()*Math.random()*Math.random()*10000);
    
        lista.push(numero);
    }

    return lista;
}

for (let k in lista) {
    listaNaoRepetida.push(lista[k]);
    for (let i = k+1; i<lista.length; i++) {
        if (lista[i] == lista[k]) {
            listaNaoRepetida.splice((listaNaoRepetida.length - 1), 1);
            break;
        }
    }
}

console.log(listaNaoRepetida);