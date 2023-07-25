const n = 62;
let m = n;

for(let i = 1; i <=n; i++) {
    let padrao = `${m}`;
    if(n >= 10 && m <10) {
        for(let j = 1; j<i; j++) {
            padrao += "  " + `${m}`;
        } 
    } else {
        for(let j = 1; j<i; j++) {
            padrao += " " + `${m}`;
        }
    }
    padrao += "\n";
    console.log(padrao);
    m--;
}