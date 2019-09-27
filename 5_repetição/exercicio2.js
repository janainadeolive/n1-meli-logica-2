/* Crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma 
pirâmide de estrelas no seguinte formato:
// Ex.: Usuário informa 5 e o programa retorna
// *
// * *
// * * *
// * * * * 
// * * * * * 
- Você pode concatenar uma string usando: + ou += 
 
pode ser feito assim: 
const r = require("readline-sync");

let num = parseInt(r.question("Digite um valor "));
let e;
let e1 =" "; 

for (let e = 0; e < num; e++){
    e1 += "*";
    console.log (e1)
}



*/

const r = require("readline-sync");

let num = parseInt(r.question("Digite um valor "));
let e;
let e1 =" "; 

for (let e = 0; e < num; e++){
    e1=e1 + "*";
    console.log (e1)
}
