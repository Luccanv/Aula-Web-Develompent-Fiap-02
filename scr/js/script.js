/* Declarações */

let nome ="Fiap";
const idade = 30;
let altura = 1.75
let estudante = true;

console.log(typeof idade);
console.log(typeof nome);
console.log(typeof estudante);
console.log(typeof altura);

/* Metodos de exibição */

alert("Bem-vindo ao Sistema");
/* prompt pede o usuario para escrever */
let nomeUsuario = prompt("Qual é o seu nome?")
/* `` tipo o f'' do python. precisa colocar ${} para falar a variavel */
console.log(`Olá,${nomeUsuario}`);
/* Confirm é ok ou cancelar */
let desejaContinuar = confirm('Deseja continuar?')
console.log(`Resposta ${desejaContinuar}`);
