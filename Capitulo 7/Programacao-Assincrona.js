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
/* Aqui usamos ".then()" para esperar a Promise resolver. */
/* O resultado e o mesmo, mas o codigo fica mais organizado. */

/* 3- Async/Await (o jeito mais moderno e facil): O async/await deixa o codigo ainda mais legivel, parecendo codigo sincrono, mas funcionando de forma assincrona. */
async function pedirLanche() {
    console.log("Fazendo o pedido...");
    let lanche = await prepararLanche();
    console.log("Lanche pronto:", lanche);
}
function prepararLanche() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hamburguer"), 2000);
    });
};
fazerPedido();
console.log("Enquanto isso, mexendo no celular...");
/* O que acontece aqui? */
/* 1- O codigo começa e imprime "Fazendo o pedido" */
/* 2- A funçao "fazerPedido()" nao trava o codigo esperando o lanche. O programa continua rodando */
/* 3- Ele imprime "Enquanto isso, mexendo no celular" */
/* 4- Depois de 2 segundos, ele imprime "Lanche pronto: Hamburguer" */

/* Resumo: */
/* Sincrono: O codigo espera cada tarefa terminar antes de continuar */
/* Assincrono: O codigo continua rodando enquanto espera */
/* Callbacks: Eram usados antes, mas podem ficar confusos */
/* Promises: Melhoram isso com ".then()" */
/* Async/Await: E o jeito mais moderno e facil de entender */
