/* Estruturas De Controle: */
/* Condicionais: */
if;
else;
switch;
/* Laços De Repetiçoes:*/
for;
while;
do while;
/* Exemplo: */
/* IF e ELSE: */
let age = 20;
if (age >= 18) {
    console.log("Maior De Idade")
} else {
    console.log("Menor De Idade")
};
/* Explicaçao: 
-> o IF verifica se a variavel "age" e maior ou igual a 18;
-> Se for "TRUE" (verdadeiro), imprime "Maior De Idade";
-> Caso for "FALSE" (falso), entra no bloco "ELSE" e imprime "Menor De Idade".
*/
/* SWITCH (Estrutura Condicional): */
let day = 3;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2: 
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6: 
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
};
/* Explicação: 
-> O "SWITCH" verifica o valor da variavel "day";
-> Cada "CASE" corresponde a um valor possivel. Se "day=3", ele executa "Tuesday";
-> O "BREAK" impede que o codigo continue executando os proximos "CASE";
-> O "DEFAULT" e a opçao que sera executado caso nenhum "CASE" corresponda ao valor da variavel.
*/
/* Laços De Repetiçao: */
/* FOR (Laço Repetiçao): */
for(let i=0; i<5;i++) {
    console.log("Numero:"+i)
};
/* Explicação: 
-> o "FOR" e usado para repetir um bloco de codigo, um n umero determinado de vezes.
-> "let i=0;" Declara uma variavel "i" e inicializa com o valor 0 (zero);
-> "i<5;" Define a condiçao de execuçao (executa enquanto "i" for menor que 5);
->"i++;" Incrementa "i" a cada alteraçao;
-> O "console.log("Numero:" + i;) imprime o valor de "i" a cada loop.
*/ 
/* Saida No Console (FOR): 
Numero: 0
Numero: 1
Numero: 2
Numero: 3
Numero: 4
*/
/* WHILE (Laço De Repetiçao Com Condiçao): */
let cont = 0;
while (cont <5) {
    console.log("Cont: " + cont);
    cont++;
}
/* Explicaçao:
-> O "WHILE" executa o bloco de codigo enquanto a condiçao for verdadeira;
-> "cont = 0;" Define o valor inicial;
-> "while (cont < 5);" Continua enquanto "cont" for menor que 5;
-> "cont++;" Incrementa "cont" a cada iteraçao.
*/
