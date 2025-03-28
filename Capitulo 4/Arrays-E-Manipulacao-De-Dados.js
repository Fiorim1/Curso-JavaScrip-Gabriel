/* Arrays: */
/* Um array e uma lista que pode armazenar varios valores em uma unica variavel. Cada valor tem um indice começando do 0 (zero). */
let fruits = [
    "Banana",
    "Apple",
    "Orange"
];
console.log(fruits[2]);
/* Saida No Console: 
Orange
*/
/* Metodos De Arrays: */
/* Sao funçoes prontas para manipular listas: */
.push(value); /* -> Adiciona um item no final da lista */
.pop(); /* -> Remove o item do final da lista */
.shift(); /* Remove o primeiro item da lista */
.unshift(value); /* Adiciona um item no inicio */
.lenght; /* -> Retorna o tamanho da lista (array) */
.forEach(fn); /* -> Executa uma funçao para cada item da lista */
.map(fn); /* Cria um novo array transformado */
.filter(fn); /* Retorna apenas os itens que passam no teste/filtro */
/* Exemplo: */
let numbers = [1, 2, 3, 4, 5];
let double = numbers.map(n => n * 2);
console.log(double)
/* Explicacao:
Criaçao Do Array:
numbers = [1, 2, 3, 4, 5];
Transformaçao com ".MAP()":
-> Cada numero e multiplicado por 2, gerando "DOUBLE = [2, 4, 6, 8, 10]";
Exibiçao Do Resultado: 
console.log(double); Imprime [2, 4, 6, 8, 10] 
*/
