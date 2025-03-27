/* Criando Funçoes: */
function hello (name) {
    return "Hi, " + name;
} console.log(hello("Carl"));
/* Explicaçao:
Definiçao Da Funçao: 
-> A funçao "HELLO" e declarada usando "FUNCTION";
-> Ela recebe um parametro camado "NAME";
Corpo Da Funçao:
-> A funçao retorna uma string que concatena "HI," com o valor de "NAME";
Chamando A Funçao:
-> "HELLO("CARL");, e chamado dentro de "CONSOLE.LOG()";
-> Isso significa que "CARL" sera passado como argumento para o parametro "NAME";
-> A funçao retorna "HI, CARL", que e exibido no console.
Saida Console:
Hi, Carl;
*/

/*Objetos: */
/* Um objeto e um estrutura de daods que armazena informaçoes em pares chaves-valor. Ele pode conter propriedades (dados) e metodos (funcoes). */
let person = {
    name: "Myke";
    age: 30;
    speak: function() {
        console.log("Hi, my nmaes is" + this.name);
    };
}; person.speak();
/* this -> Puxa variavel do object (obejto). */
/* Explicação:
-> Criado um objeto chamado "PERSON";
-> O objeto tem tres coisas dentro:
    *name: "Myke"; Um dado sobre a pessoa;
    *age: 30; Outro dado;]
    *speak(); Um funçao que faz a pessoa falar.
Quando chamamos "PERSON.SPEAK()"; o que acontece?:
-> Ele entra na funçao "SPEAK";
-> "THIS.NAME" significa "pegue o nome dentro do proprio objeto"
-> Ele imprime no console.
Saida Console:
Hi, my name is Myke;
*/