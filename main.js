// Selecciona el elemento con el id "root" del documento HTML
let root = document.querySelector("#root");

//Crea un nuevo elemento 'div_formularios' en el documento.
let div_formularios = document.createElement("div");

// Asigna una clase CSS llamada "div_formularios" al nuevo elemento 'div_formularios' para aplicar estilos.
div_formularios.className = "div-formularios";

//Se crea una lista de datos
let formularios = [
    {nombre : "login", link: "componentes/Login/login.html"},
    {nombre : "login", link: "https"},
    {nombre : "login", link: "https"},
    {nombre : "login", link: "https"}
];

//forEach por cada elemento de la lista va a dar una alerta.
formularios.forEach(itemLista => {

    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;

    div_formularios.appendChild(div_item);

});

//Añade el nodo root, el elemento div_formulario
root.appendChild(div_formularios);
