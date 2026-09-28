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

//alert("Bem-vindo ao Sistema");
/* prompt pede o usuario para escrever */
//let nomeUsuario = prompt("Qual é o seu nome?")
/* `` tipo o f'' do python. precisa colocar ${} para falar a variavel */
//console.log(`Olá,${nomeUsuario}`);
/* Confirm é ok ou cancelar */
//let desejaContinuar = confirm('Deseja continuar?')
//console.log(`Resposta ${desejaContinuar}`);

/* Operadores Aritméticos, comparação e lógicos */

/* Aritmético */
let soma = 10+5;
console.log(soma);
let multiplicacao = 10*5;
console.log(multiplicacao);
let subtracao = 10-5;
console.log(subtracao);
let resto = 10 % 3;
console.log(resto);
let divisao = 10 / 3;
console.log(divisao);

/* Comparação */
 /* = é atribuir */
let a = 10;
let b = "5";
let c = 5;
console.log(a == b);
/* == compara só o valor */
console.log(c == b);
/* === compara valor e tipo da variavel */
console.log(c === b);
console.log (a > b);
console.log(b <= c);
console.log(a - b);
/* tem != e !== que funciona corespondente aos exemplos de cima */
console.log (b != c);
console.log(b !== c);
console.log(a < 10);
/* && = and */
console.log(b < a && a > b);
/* || = or */
console.log(a >20 || b < a);

/* Lógica */
let habilitacao = true;
let dirigir = (idade >=18) && habilitacao;
console.log(`O usuario pode dirigir?`, dirigir);