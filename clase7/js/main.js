/* let texto = " Hola! ";
//let texto2 = texto.replace("Mundo", "a Todos");
console.log(texto.length);
console.log((texto.trim()).length);
//console.log(texto2); */

// Función original
/* let contador = 0;

for (let i=1; i<=10; i++) {
    contador += i;
}

console.log("El valor del contador es: " + contador); */


// Vamos a hacer una abstracción
/* const sumador = (valorInicial, valorFinal) => {
    let contador = 0;

    for (let i=valorInicial; i<=valorFinal; i++) {
        contador += i;
    }

    return contador;
}

let sumadorNumeros = sumador(2, 11);
console.log("El valor del contador es: " + sumadorNumeros); */


// Primer ejemplo
/* function mayorQue(n) {
    return m => m > n;
}

let mayorQue10 = mayorQue(5); // m => m > 10
//console.log(mayorQue10);
console.log(mayorQue10(15)); // (15) => 15 > 10; // true
console.log(mayorQue10(8)); // (8) => 8 > 10; // false */


// Segundo Ejemplo
/* function devolverOperacion(op) {
    if (op == "suma") {
        return (a, b) => a + b;
    } else if (op == "resta") {
        return (a, b) => a - b;
    } else {
        return 0;
    }
}

const suma = devolverOperacion("suma"); // (a, b) => a + b;
let resultado = suma(10, 20); // (10, 20) => 10 + 20 => 30;
const resta = devolverOperacion("resta"); // (a, b) => a - b;
let resultado2 = resta(30, 20); // (10, 20) => 10 + 20 => 30;
console.log("El resultado es: " + resultado);
console.log("El resultado2 es: " + resultado2); */


// Tercer ejemplo
/* const numeros = [1, 2, 3, 4];
const nombres = ["Carolina", "Daniela", "Juan", "Pedro"];

const porCadaUno = (lista, funcion) => {
    for (const elemento of lista) {
        funcion(elemento);
    }
}

porCadaUno(numeros, console.log);
porCadaUno(numeros, (valor) => {
    alert(valor * 2);
});

let contador = 0;

function acumular(valor) {
    contador += valor;
}

porCadaUno(numeros, acumular);
console.log("El total del contador es: " + contador); */


// Métodos de Búsqueda y Transformación
const numeros = [1, 2, 3, 4];
const productos = [
    {id:1, nombre:"Coca Cola", precio:700, categoria:"premium", stock:2}, //1400
    {id:2, nombre:"Pepsi", precio:650, categoria:"premium", stock:3}, //1950
    {id:3, nombre:"Manaos", precio:350, categoria:"oferta", stock:4}, //1400
    {id:4, nombre:"Cunnington Cola", precio:450, categoria:"oferta", stock:5} //2250
];

// Método Foreach => Recorre cada uno de los elementos de un Array
/* numeros.forEach(valor => {
    console.log("El valor es: " + valor);
})

productos.forEach(item => {
    alert("Nombre: " + item.nombre + " - Precio: $" + item.precio);
}) */

// Método Find => Devuelve el primer elemento encontrado
/* let producto = productos.find(elemento => elemento.nombre === "Pepsi");
console.log(producto);
let producto2 = productos.find(elemento => elemento.precio == 450);
console.log(producto2);
let producto3 = productos.find(elemento => elemento.id == 3);
console.log(producto3); */

// Método Filter => Devuelve un nuevo array resultante de la condición que definamos
/* let productosPremium = productos.filter(item => item.categoria == "premium");
console.log(productosPremium);
let nuevosProductos = productos.filter(item => item.id !== 3);
console.log(nuevosProductos); */

// Método Some => Devuelve true o false en caso de encontrar un producto
/* let estaLaManaos = productos.some(item => item.nombre === "Manaos"); //true
console.log(estaLaManaos);

let bebida = prompt("Ingrese el Nombre de la Bebida a buscar:");
let estaProducto = productos.some(item => item.nombre.toUpperCase() === bebida.toUpperCase());

if (estaProducto) {
    alert("Se encuentra la " + bebida + " ingresada!");
} else {
    alert("Error! No se encuentra!");
} */

// Método Map => Devuelve un nuevo Array resultante, con las propiedades que definamos
/* let nombresBebidas = productos.map(item => item.nombre);
let nombresBebidas2 = productos.map(item => ({nombreProducto:item.nombre.toUpperCase(), precioProducto:item.precio*1.2}));
console.log(nombresBebidas);
console.log(nombresBebidas2); */

// Método Reduce => Suma los valores de cada elemento u objeto del Array
/* let total = productos.reduce((acumulador, item) => acumulador += item.precio, 0);
console.log("La suma total de Producto es: $" + total); //2150 + 0
let total2 = productos.reduce((acumulador, item) => acumulador += (item.precio * item.stock), 0);
console.log("La suma total de Producto es: $" + total2);
let total3 = productos.reduce((acc, produ) => acc += (produ.precio * 1.1), 0);
console.log("La suma total de Producto es: $" + total3); */

// Método Sort => Ordena los elementos de un Array
/* const numeros2 = [40, 1, 5, 200];
numeros2.sort((a, b) => a - b); // Ordenar en forma ascendente
console.log(numeros2);
numeros2.sort((a, b) => b - a); // Ordenar en forma descendente
console.log(numeros2); */

/* productos.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1; // Ordeno en forma ascendente
    }
}); */
/* productos.sort((a, b) => {
    if (a.nombre < b.nombre) {
        return 1; // Ordeno en forma descendente
    }
});
console.log(productos); */


// Ejemplo aplicado
let nombreProducto = prompt("Ingrese el nombre del producto a eliminar");
let nuevoArray = productos.filter(item => item.nombre != nombreProducto);
let nuevoArray2 = nuevoArray.map(item => ({id:item.id, nombre:item.nombre, precio:item.precio*1.1}));
console.log(nuevoArray2);