// LocalStorage
// Creando un localstorage
/* localStorage.setItem("nombre", "Jose Borrajo");
localStorage.setItem("nombre2", "Dante Carrizo");
localStorage.setItem("nombre", "Carla Sablic");
localStorage.setItem("edad", 30); */

// Recuperando localStorage
/* let nombre = localStorage.getItem("nombre");
console.log("Mi nombre es: " + nombre);
console.log("Mi nombre es: " + localStorage.getItem("nombre2")); */


// SessionStorage
// Creando un SessionStorage
/* sessionStorage.setItem("nombre", "Jose Borrajo");
sessionStorage.setItem("nombre2", "Dante Carrizo");
sessionStorage.setItem("nombre", "Carla Sablic");
sessionStorage.setItem("edad", 30);

// Recuperando SessionStorage
let nombre2 = localStorage.getItem("nombre");
console.log("Mi nombre es: " + nombre2);
console.log("Mi nombre es: " + sessionStorage.getItem("nombre2"));
console.log("hola"); */


// Viendo los tipos de datos
/* localStorage.setItem("nombre", "Nahuel Moreno");
localStorage.setItem("edad", 25);
localStorage.setItem("cine", true);
localStorage.setItem("bebidas", [{id:1, nombre:"Fernet"}, {id:2, nombre:"Gin Tonic"}]);
localStorage.setItem("datosPersonales", {dni:2233445566, nombre:"Nahuel Moreno", email:"nahuelmoreno@gmail.com"});

let valor = localStorage.getItem("pepe");
console.log(valor);
console.log(typeof valor); */


// Recorrer las localStorage
/* for (let i=0; i<localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave + " - Valor: " + localStorage.getItem(clave));
} */


// Eliminando localStorage
/* localStorage.removeItem("nombre2");
localStorage.removeItem("datosPersonales");
localStorage.removeItem("bebidas");
localStorage.clear(); */


// Accediendo a una localStorage como si fuera un objeto
/* localStorage.setItem("nombre", "Denise Gargiulo");
localStorage.setItem("edad", 25);

localStorage.nombre = "Ariel Montes";
localStorage.edad = 28;
localStorage["nombre"] = "Luis Gonzalez"; */

// Guardando un Objeto en una localStorage
/* const bebida = {id:1, nombre:"Coca Cola", precio:700};
const productos = [
    {id:1, nombre:"Coca Cola", precio:700},
    {id:2, nombre:"Pepsi", precio:650},
    {id:3, nombre:"Manaos", precio:350}
]

localStorage.setItem("bebida", JSON.stringify(bebida));
localStorage.setItem("edad", JSON.stringify(30));
localStorage.setItem("productos", JSON.stringify(productos)); */


// Recuperar un JSON a objeto
/* let miBebida = JSON.parse(localStorage.getItem("bebida"));
let edad = JSON.parse(localStorage.getItem("edad"));
console.log(miBebida);
console.log(edad);
console.log(JSON.parse(localStorage.getItem("productos"))); */


// Validando una localStorage
/* let usuario;
let usuarioEnLS = JSON.parse(localStorage.getItem("producto")); //null

if (usuarioEnLS) { //null
    usuario = usuarioEnLS;
    console.log(usuario);
} else {
    usuario = prompt("Ingrese el Nombre de Usuario:");
} */