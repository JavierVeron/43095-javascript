// Arrays
let lista = ["Luis", "Gonzalez", "luis.gonzalez@gmail.com", 23];
console.log(lista);

// Acceder a los datos
/* let edad = lista[3] + 1;
console.log("Mi email es: " + lista[2]);
console.log("Mi edad va a ser: " + edad); */

// Recorrer un array
/* for (let i=0; i<lista.length; i++) {
    alert(lista[i]);
} */

// Propiedad Length
/* let granHermano = ["Marcos", "Nacho", "Julieta"];
let cantidad = granHermano.length;

if (cantidad > 0) {
    alert("Hay integrantes en la Casa de GH! (" + cantidad + ")");
} else {
    alert("No quedó nadie en la casa de GH!");
} */

// Método Push (agrega al final del array)
/* let nuevoNombre = prompt("Decime tu Nombre:");
lista.push(nuevoNombre);
lista.push("Pepe");
lista.push(20);
lista.push({id:1, nombre:"Coca Cola", precio:700});
console.log(lista); */

// Método Unshift (agrega al comienzo del array)
/* let nuevoNombre2 = prompt("Decime tu Nombre:");
lista.unshift(nuevoNombre2);
console.log(lista); */

// Método Pop (quita el último elemento y lo devuelve)
/* let valor = lista.pop();
console.log(lista);
console.log(valor); */

// Método Shift (quita el primer elemento y lo devuelve)
/* let valor = lista.shift(); //Luis
console.log(lista);
console.log(valor);

const nuevosTutores = [];
nuevosTutores.push("valor"); //Agrego Luis a la lista nuevos tutores
console.log(nuevosTutores); */


// Método Splice (borra un la cantidad de elementos a partir de una posición)
/* lista.splice(1, 2);
console.log(lista); */

// Método Join (A partir de un string definido, reemplaza el caracter de separación de elementos)
/* let texto = lista.join("*");
console.log(texto);

let menuNavegacion = ["Inicio", "La Empresa", "Servicios", "Contacto"];
console.log(menuNavegacion.join(" / ")); */


// Método Concat (Concatena 2 arrays)
/* const perros = ["Mora"];
const gatos = ["Amy", "Benita"];
const pajaritos = ["Coco"];
const mascotas =  perros.concat(gatos);
const mascotas2 = gatos.concat(perros);
const mascotas3 = mascotas.concat(pajaritos);
console.log(mascotas);
console.log(mascotas2);
console.log(mascotas3); */


// Método Slice (devuleve un nuevo array a partir de una posicion y cantidad de elementos definida)
/* let nuevaLista = lista.slice(2, 4);
console.log(nuevaLista); */


// Método IndexOf (devuleve el número de posición del elemeto buscado)
/* let emailBuscado = prompt("Ingrese el email a buscar:");
let pos = lista.indexOf(emailBuscado);
console.log(pos);

if (pos > -1) {
    alert("El email: " + emailBuscado + " se encuentra en la posición: " + pos);
} else {
    alert("No se encuentra el email!");
} */


// Método Includes (devuleve true/false del elemeto buscado)
/* let emailBuscado = prompt("Ingrese el email a buscar:");
let encontrado = lista.includes(emailBuscado);

if (encontrado) {
    alert("El email: " + emailBuscado + " se encuentra en la lista!");
} else {
    alert("No se encuentra el email!");
} */


// Método Reverse (invierte el orden de los elementos, modifica la lista original)
/* lista.reverse();
lista.push("Dante");
console.log(lista); */


// Ejemplo aplicado
/* const listaNombres = [];
let cantidad = 5;

while (listaNombres.length != cantidad) {
    let nombre = prompt("Ingrese el Nombre:");
    listaNombres.push(nombre);
}

const nuevaListaNombres = listaNombres.concat(["Denise", "Luis", "Ariel"]);
alert(nuevaListaNombres.join("\n")); */


// Ejemplo aplicado
/* const arrayNombres = ["Luis", "Juan", "Ariel", "Daniela", "Denise", "Ariel", "Laura"];
const eliminarNombre = (nombreX) => {
    let pos = arrayNombres.indexOf(nombreX);
    console.log(pos);

    if (pos > -1) {
        arrayNombres.splice(pos, 1);
    }
}

console.log(arrayNombres);
eliminarNombre("Ariel");
console.log(arrayNombres); */


// Array de Objetos
/* const objeto1 = {id:1, nombre:"Coca Cola"};
const bebidas = [objeto1, {id:2, nombre:"Pepsi", precio:600}];
bebidas.push({id:3, nombre:"Manaos", descripcion:"Bebida cola de bajo presupuesto"});
//bebidas.pop();
console.log(bebidas); */


// Recorriendo Arrays
/* const listaNombres = ["Carla", "Luis", "Denise", "Daniela", "Dante"];
const productos = [
    {id:1, nombre:"Coca Cola", precio:700},
    {id:2, nombre:"Pepsi", precio:650},
    {id:3, nombre:"Manaos", precio:350}
];

for (const nombre of listaNombres) {
    console.log("Nombre: " + nombre);
}

for (const pepe of productos) {
    console.log("Nombre: " + pepe.nombre.toUpperCase() + " - Precio: $" + (pepe.precio * 2));
} */


// Método aplicado
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase(),
        this.precio = precio;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto("Coca Cola", 700));
productos.push(new Producto("Pepsi", 650));
productos.push(new Producto("Manaos", 350));
console.log(productos);

let salida = "";

for (const producto of productos) {
    producto.sumaIva();
    salida += producto.nombre + " $" + producto.precio + "\n";
}

alert(salida);
console.log(productos);