/* //console.dir(document.head);
console.dir(document.body); */

// getElementById => Busca elementos html por ID
/* let contenedor = document.getElementById("app");
console.log(contenedor);
contenedor.title = "Curso de JavaScript!";
let texto = "<h1>Coderhouse</h1><p>Hola a Todos!</p>"
//contenedor.innerHTML = texto;
contenedor.className = "bg-success";

document.getElementById("parrafo1").innerHTML = "Estamos en el Curso de JS de Coderhouse!"; */

// Modificando el Título de una Página
/* let titulo = prompt("Ingrese el numero título de la página");
document.head.children[3].innerHTML = titulo; */

// getElementsByClassName => Devuelve un HTML Collection (array de elementos html) por medio de una clase especificada
/* let paises = document.getElementsByClassName("paises");
console.log(paises);
paises[1].innerHTML = "Francia";
paises[2].title = "Qué mirás bobo?"; */

// getElementsByTagName => Devuelve un HTML Collection (array de elementos html) por medio de una etiqueta especificada
/* let contenedores = document.getElementsByTagName("div");
console.log(contenedores);
contenedores[2].className = "text-light bg-dark p-3 m-1";
contenedores[2].innerHTML = "Leonardo Troncoso";

let parrafos = document.getElementsByTagName("p");

for (const parrafo of parrafos) {
    parrafo.className += "text-light bg-warning p-3";
    parrafo.classList.add("m-5")
}; */

// Inner Text e Inner HTML
/* let parrafo = document.getElementById("curso");
console.log(parrafo.innerHTML);
console.log(parrafo.innerText);
parrafo.innerHTML = "Curso de <b>JavaScript</b>"; */


// Agregando o Quitando Nodos
/* let parrafo = document.createElement("p");
parrafo.innerHTML = "Curso de JavaScript";
parrafo.className = "text-ligth bg-success-subtle p-3";
let parrafo2 = document.createElement("p");
parrafo2.id = "parrafo2";
parrafo2.innerHTML = "Curso de JavaScript #2";
parrafo2.className = "text-ligth bg-success-subtle p-3";
document.body.append(parrafo); //Agrega al final
//document.body.prepend(parrafo2); //Agrega al principio

document.getElementById("contenedores").append(parrafo2); */

// Quitar un nodo
/* let parrafo2a = document.getElementById("parrafo2"); 
parrafo2a.remove(); //Quitando un elemento por ID

let contenedores_light = document.getElementsByClassName("bg-light");
console.log(contenedores_light);
contenedores_light[1].remove(); //Quitando un elemento por posición */


// Accediendo a los datos de un Form
/* let email = document.getElementById("email");
let emailError = document.getElementById("emailError");

if (email.value == "") {
    emailError.className = "text-light bg-danger p-1";
    emailError.innerHTML = "Error! Complete el campo Email!";
} else {
    emailError.innerHTML = "";
} */


// Plantillas literales
/* let objeto = {id:1, nombre:"Coca Cola", precio:700};
let concatenado = "ID: " + objeto.id + " - Nombre: " + objeto.nombre + " - Precio: $" + objeto.precio;
let plantilla = `ID: ${objeto.id} - Nombre: ${objeto.nombre.toUpperCase()} - Precio: $${objeto.precio * 2}`;
console.log(concatenado);
console.log(plantilla);

let contenedor = `<h4>${objeto.nombre}</h4>
<p>$${objeto.precio}</p>`;
document.getElementById("contenido").innerHTML = contenedor; */

// Ejemplo de Render de Productos
/* const productos = [
    {id:1, nombre:"Coca Cola", precio:700, imagen:"https://tyna.com.ar/assets/archivos/recortadas/coca-cola-lata-x310-cc_732c7e68fe.jpg"},
    {id:2, nombre:"Pepsi", precio:650, imagen:"https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/fotos/b/0000000020/2183_1.jpg"},
    {id:3, nombre:"Manaos", precio:350, imagen:"https://st2.depositphotos.com/1051355/7628/i/600/depositphotos_76284209-stock-photo-hand-with-crumpled-aluminum-cans.jpg"}
]

for (const producto of productos) {
    let div = document.createElement("div");
    div.className = "col-md-4 text-center";
    div.innerHTML = `<img src=${producto.imagen} class="img-fluid">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>`;
    document.getElementById("productos").appendChild(div);
} */


// Query Selector
/* let parrafos = document.getElementsByClassName("parrafos");
console.log(parrafos); */

let parrafos = document.querySelector("div .parrafos");
let titulos = document.querySelector("div #titulo");
console.log(parrafos);
console.log(titulos);
titulos.innerHTML = "Modifico el Título!";

let parrafos2 = document.querySelectorAll(".parrafos");
console.log(parrafos2);

let i = 1;
for (const item of parrafos2) {
    item.innerHTML = "Nodo " + i;
    i++;
}
