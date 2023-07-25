const n = 99;
let padrao;

for (let i = 0; i <= n ; i++) {
    if(i%2 == 0) {
        for(let j = 0; j <= i; j++) {
            if ( j == 0) {
                padrao = "1";
            } else if(j%2 == 0) {
                padrao += " " + "1";
            } else {
                padrao += " " + "0"; 
            }
        }
        console.log(padrao + "\n");
    } else {
        for(let j = 0; j <= i; j++) {
            if ( j == 0) {
                padrao = "0";
            } else if(j%2 == 0) {
                padrao += " " + "0";
            } else {
                padrao += " " + "1"; 
            }
        }
        console.log(padrao + "\n");
    }
}