/*
3)

1.Crie um programa que pergunta ao usuário seu nome. 

2.Depois que o usuário digitar o nome, o programa deverá responder 
"Olá [nome]".
Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode dizer "Tchau".
O programa vai dizer "Tchau [nome]" e finalizar o programa.
- Aqui você pode usar while ou do/while para resolver */ 

let r = require ('readline-sync')

let nome = (r.question("Digite seu nome"));

console.log ("Ola "+ nome);

let texto =""; 

do { 
    texto = r.question("Digite qualquer coisa ou tchau para sair "); 
    console.log ("Você digitou: " + texto);

    } while (texto != "tchau")
console.log ("tchau " + nome)


