const n = 60;
const alfabeto = ["a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z"];
let m = 0;

for(let i = n; i > 0; i--) {
    if ( m >= 26) {
        m = m - 26;
    }
    let padrao = alfabeto[m];
    for(let j = 1; j < i; j++) {
        padrao = alfabeto[m].toUpperCase() + " " + padrao;
    }
    padrao += "\n";
    m++; 
    console.log(padrao);
}
