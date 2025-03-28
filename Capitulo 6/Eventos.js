/* Eventos: */
/* Eventos permitem executar açoes quando algo acontece na pagina */
element.addEventListener("event", function); /* Escuta eventos como click, mouseover, Keyup, etc... */
/* Exemplo: */
document.getElementById("button").addEventListener("click", function(){
    alert("Clicked Button");
});

/* Manipulaçao De Elementos: */
document.createElement("tag"); /* Cria um novo elemento */
element.appendChild(new element); /* Adiciona um elemento filho dentro de uma classe */
element.removeChild("soon"); /* Remove um elemento filho da classe */
element.replaceChild("newElement, oldElement"); /*Substitui um elemento */