/* Programaçao Assincrona: */
/* Em JavaScript, o codigo normalmente roda linha por linha, de cima pra biaxo. Mas as vezes algumas tarefas demoram para serem concluidas, como: 
-> Buscar dados na internt (API)
-> Ler arquivos
-> Esperar um tempo antes de executar algo
Se o JavaScript rodasse essas tarefas de forma sincrona (esperando cada uma terminar antes de ir para a proxima), o o programa ficaria travado.
A programacaoassincrona resolve isso permitindo que o codigo continue rodando enquanto espera a resposta dessas tarefas demoradas. 
*/

/* Exemplo Do Mundo Real: */
/* Imagine que voce vai numa lanchonete e oede um hamburguer:
1- O atendente anota seu pedido
2- Voce nao fica parado esperando, vai mexer no celular
3- Quando o lanche fica pronto, o atendente te chama
*/

/* Isso e assincrono, porque voce nao ficou parado esperando, voce continua fazendo outra coisa */
/* Se fosse sincrono, voce ficaria parado no balcao sem fazer nada ate o hamburguer ficar pronto */

/* Como Isso Funciona No Codigo: */
/* 1- Callbacks (o jeito antigo): Antes usavmos funcoes de callbacks para lidar com tarefas assincronas */
function pedirLanche(callback) {
    console.log("Fazendo o pedido...");
    setTimeout(() => {
        callback("Hamburguer pronto!");
    }, 2000 /* Simula a demora de 2 segundos */);
}

pedirLanche((mensagem) => {
    console.log(mensagem);
});

console.log("Enquanto isso, mexendo no celular...");

/* O Que Acontece Aqui? */
/* 1- E feito o pedido
2- O codigo continua rodando e imprime "Enquando isso, mexendo no celular"
3- Depois de 2 segundos, aparece "Hamburguer Pronto"
*/

/* Mas usar callbacks demos deixa o codigo confuso. */
/* Isso e chamando de callback hell (inferno dos callbacks) */

/* 2- Promises (um jeito melhor): Promises ajudam a organizar melhor o codigo assincrono */
function pedirLanche() {
    return new Promise((resolve) => {
        console.log("Fazendo o pedido");
        setTimeout(() => {
            resolve("Hamburguer pronto!");
        }, 2000);
    });
};
pedirLanche().then((mensagem) => {
    console.log(mensagem);
});
console.log("Enquanto isso, mexendo no celular...");