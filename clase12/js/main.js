// Sugar Syntax
// Operador ++
/* let valor = 10;
valor = valor + 1; // Opción #1
valor += 1; // Opción #2
valor++; // Opción #3
console.log(valor); */


// Operador Ternario
// condicion ? valorVerdadero : valorFalso

let temperatura = 27;

/* if (temperatura < 15) {
    alert("Hace frío")
} else if (temperatura < 20) {
    alert("Esta lindo o fresco!");
} else {
    alert("Esta lindo o caluroso!");
} */

//temperatura > 25 ? alert("Hace calor!") : alert("Esta lindo o fresco!");
//alert(temperatura > 25 ? "Hace calor!" : "Esta lindo o fresco!");
//alert(temperatura < 15 ? "Hace frío" : temperatura < 20 ? "Esta lindo o fresco" : "Esta lindo o caluroso");

// Operador Ternario con return implícito
/* let edad = 15;
let pagoExtra = false;
//let permiso = edad >= 18 ? "Tenés permiso!" : "NO! No tenés permisos, anda a estudiar carajo!!!";
let permiso = (edad >= 18 || pagoExtra) ? "Tenés permiso!" : "NO! No tenés permisos, anda a estudiar carajo!!!";
alert(permiso); */


// Operador AND &&
const carrito = [];

/* if (carrito.length == 0) {
    console.log("El carrito está vacío!");
} */

/* carrito.length == 0 && console.log("El carrito está"); */


// Operador OR ||
/* console.log(0 || "Falsy"); //falsy
console.log(50 || "Falsy"); //50
console.log(null || "Falsy"); //falsy
console.log(undefined || "Falsy"); //falsy
console.log("Hola Mundo" || "Falsy"); //hola mundo
console.log("" || "Falsy"); //falsy
console.log(NaN || "Falsy"); //falsy
console.log(true || "Falsy"); //true
console.log(false || "Falsy"); //falsy
console.log("true" || "Falsy"); //true
console.log("0" || "Falsy"); //0 */

/* const usuario1 = {
    nombre: "Edgar Villalba",
    edad: 27,
    pais:""
}

const usuario2 = null;

console.log(usuario1.pais || "El usuario no existe!");
console.log(typeof usuario1.pais);
console.log(usuario2 || "El usuario no existe!"); */


// Operador Nullish ?? (Sería como el OR pero un poco más permisivo)
/* console.log(0 ?? "Nullish"); //0
console.log(50 ?? "Nullish"); //50
console.log(-50 ?? "Nullish"); //-50
console.log(null ?? "Nullish"); //Nullish
console.log(undefined ?? "Nullish"); //Nullish
console.log("Hola Mundo" ?? "Nullish"); //hola mundo
console.log("" ?? "Nullish"); //empty string
console.log(NaN ?? "Nullish"); //NaN
console.log(true ?? "Nullish"); //true
console.log(false ?? "Nullish"); //false
console.log("true" ?? "Nullish"); //true
console.log("0" ?? "Nullish"); //0 */


// Acceso condicional a una propiedad de un objeto
/* const usuario = null;

//console.log(usuario.nombre || "El usuario no existe!");
console.log(usuario?.nombre || "El usuario no existe!"); */


// Desestructuración
/* const usuario = {
    nombre: "Juan Perez",
    edad: 25,
    pais: "Uruguay"
} */

/* let nombre = usuario.nombre;
let edad = usuario.edad; */
/* let {nombre, edad, pais} = usuario;
console.log(`Mi nombre es ${nombre} y mi edad es ${edad} (${pais})`); */

/* const usuario = {
    nombre: "Juan Perez",
    edad: 25,
    telefono: {
        cel:"1122334455",
        casa:null,
        trabajo:"2233445566"
    }
}

let {nombre, telefono:{cel}} = usuario;
console.log(`Mi nombre es ${nombre} y mi celular es ${cel}`); */


// Alias
/* const item = {
    item_id:40,
    product_name:"Item 1",
    product_price: 1000
}

const {item_id:idProducto, product_name:nombreProducto, product_price:precioProducto} = item;
console.log(`El Producto ${nombreProducto} (${idProducto}) $${precioProducto}`); */


// Desestructuración en Parámetros
const objeto = {id:1, nombre:"Coca Cola", precio:650};
// Desestructuración dentro de una función
/* const desestructurar = (objeto) => {
    const {nombre, precio} = objeto;
    console.log("Producto: " + nombre + " $" + precio);
} */

// Desestructuración como parámetro
/* const desestructurar = ({nombre, precio}) => {
    console.log("Producto: " + nombre + " $" + precio);
}

desestructurar(objeto) */

// Desestructuración de Arrays
const nombres = ["Dante", "Carla", "Daniela", "Juan"];
console.log(nombres);
/* const [a, b] = nombres;
console.log(a);
console.log(b); */
/* const [a, b,,c] = nombres;
console.log(a);
console.log(b);
console.log(c); */
const [,,c] = nombres;
console.log(c);

const bebidas = [
    {id:1, nombre:"Coca Cola", precio:650},
    {id:2, nombre:"Pepsi", precio:550},
    {id:3, nombre:"Manaos", precio:350}
]

const [b1,,b2] = bebidas;
console.log(b1.nombre + " $" + b1.precio);
console.log(b2.nombre + " $" + b2.precio);
