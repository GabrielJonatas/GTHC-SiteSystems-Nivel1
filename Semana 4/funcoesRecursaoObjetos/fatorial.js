function factorial (entrada, acum = 1) {
    let acumulador = acum;
    if (entrada == 1) {
        console.log(acumulador);
        return;
    }
    else {
        acumulador  *= entrada;
        factorial (entrada-1, acumulador);
    }
}

factorial (3);