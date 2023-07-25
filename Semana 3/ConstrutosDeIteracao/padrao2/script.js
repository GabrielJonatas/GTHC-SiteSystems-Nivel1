const n = 10;
let m = n - 1;
let middle = 0;
let padrao;

for (let i = 0; i <= n ; i++) {
    padrao = "";

    if (middle >= 10) {
        for(let p = 0; p <= m; p++) {
            padrao += "   ";
        }
    } else {
        for(let u = 0; u <= n - 2; u++) {
            padrao += " ";
        }
        for(let j = 0; j <= m; j++) {
            padrao += "  ";
        }
    }

    if (middle >= 1) {
        padrao += "1";
        for(let k = 1; k < middle; k++) {
            padrao += " " + `${middle}`;
        }
        padrao += " " + "1";
    } else {
        padrao += "1";
    }

    m--;
    middle++;

    console.log(padrao);
}