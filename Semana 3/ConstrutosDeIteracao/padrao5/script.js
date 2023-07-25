const n = 30;
let u = n;
const alfabeto = ["a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z"];
let m = 0;

for(let i = 0; i < n; i++) {
    let padrao = "";
    
    for(let p = 2; p <= u; p++) {
        padrao += "  ";
    }
    if (i%2 == 0) {
        padrao += alfabeto[m].toUpperCase();
        m++;

        for(let j = 1; j <= i; j++) {
            if ( m >= 26) {
                m = m - 26;
            }
            if (j%2 == 0) {
                padrao += " " + alfabeto[m].toUpperCase();
                m++;
            } else {
                padrao += " " + alfabeto[m] ;
                m++;
            }
        }
        padrao += "\n";
        console.log(padrao);
    } else {
        padrao += alfabeto[m];
        m++;

        for(let j = 1; j <= i; j++) {
            if ( m >= 26) {
                m = m - 26;
            }
            if (j%2 == 0) {
                padrao += " " + alfabeto[m];
                m++;
            } else {
                padrao += " " + alfabeto[m].toUpperCase();
                m++;
            }
        }
        padrao += "\n";
        console.log(padrao);
    }

    if ( m >= 26) {
        m = m - 26;
    }

    u--;
}