

const r = require("readline-sync");

let passos = 0;
const meta = 500; 

while (passos < meta) { 
passos += parseInt (r.question("digite a quantidade de passos"));

}

console.log ("Parabéns! Você atingiu a meta:  "+ passos); 