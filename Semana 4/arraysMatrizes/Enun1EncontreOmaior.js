let maior = 0;
let lista = geraLista();

function geraLista () {
    let lista = [];

    for (let i = 0; i <100; i++) {
        let numero = Math.random()*Math.random()*Math.random()*10000;
        
        let acaso = Math.random();
    
        if (acaso <= (1/3)) numero = +(((-1)*numero).toFixed(2));
        else if ((1/3) < acaso && acaso < (2/3)) numero = Math.round(numero); 
        else numero = +(numero.toFixed(2));
    
        lista.push(numero);
    }

    return lista;
} 

for (let k of lista) {
    if (k>maior) maior = k;
}

console.log(maior);