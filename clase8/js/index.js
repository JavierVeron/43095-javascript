// Objeto Math
/* console.log(Math.PI);

let radio = parseInt(prompt("Ingrese el valor del Radio:"));
let diametro = Math.PI * (radio * radio);
console.log("El diámetro del círculo es: " + diametro); */

// Método Max y Min
/* console.log("Máximo: " + Math.max(55, 13, 0, -1, 93, -25)); //Obtengo el Máximo
console.log("Mínimo: " + Math.min(55, 13, 0, -1, 93, -25)); //Obtengo el Mínimo */

// Ceil, Floor y Round
/* let numero = 7.4;
console.log("Ceil: " + Math.ceil(numero)); //Redondeo para arriba
console.log("Floor: " + Math.floor(numero)); //Redondeo para abajo
console.log("Round: " + Math.round(numero)); //Redondeo

let altura = 1.76;
let peso = 85.6;
let imc = Math.round(peso / (altura * altura));
console.log("Mi IMC es: " + imc); */

// Sqrt Raíz cuadrada
/* console.log("Raíz Cuadrada de 9: " + Math.sqrt(9));
console.log("Raíz Cuadrada de 16: " + Math.sqrt(16));
console.log("Raíz Cuadrada de 4: " + Math.sqrt(4));
console.log("Raíz Cuadrada de 1: " + Math.sqrt(1));
console.log("Raíz Cuadrada de 0: " + Math.sqrt(0));
console.log("Raíz Cuadrada de -1: " + Math.sqrt(-1));

let valor = parseInt(prompt("Ingrese un valor"));
let raizCuadrada = Math.sqrt(valor);
console.log(raizCuadrada);

if (isNaN(raizCuadrada)) {
    alert("Error! No es un valor válido!");
} else {
    alert("La Raíz Cuadrada de " + valor + " es " + raizCuadrada);
} */

// Random
/* console.log("Número aleatorio: " + Math.random());
console.log("Número aleatorio de 0 a 10: " + Math.random() * 10);

const frases = [
    "Pintamos toda la casa",
    "quien tiene magia no necesita truco",
    "Mama, cortaste toda la loz",
    "gasta hoy paga maniana",
    "light weight baby",
    "Anda pa allá, bobo",
    "se tiene que arrepentir de lo que dijo"
]; //7
console.log(frases);
let pos = Math.floor(Math.random() * frases.length);
console.log("Pos: " + pos);
alert(frases[pos]); */

// Obtengo un valor aleatorio entre 20 y 50
/* console.log(Math.random() * 20 + 30); */


// Objeto Date => Permite obtener una fecha y hora actual
/* let fecha = new Date();
console.log(fecha); */

/* let revolucionDeMayo = new Date(2023, 4, 25);
console.log(revolucionDeMayo);

let revolucionDeMayo2 = new Date(2023, 0, 25, 08, 15);
console.log(revolucionDeMayo2);

let revolucionDeMayo3 = new Date("May 25, 1891, 16:15");
console.log(revolucionDeMayo3); */

let fechaActual = new Date();
/* console.log("Año: " + fechaActual.getFullYear());
console.log("Mes: " + (fechaActual.getMonth() + 1));
console.log("Día: " + fechaActual.getDate());
console.log("Hora: " + fechaActual.getHours() + ":" + fechaActual.getMinutes()); */

/* console.log(fechaActual.toDateString());
console.log(fechaActual.toLocaleString());
console.log(fechaActual.toLocaleDateString());
console.log(fechaActual.toTimeString());

let fechaPersonalizada = fechaActual.getDate() + "-" + (fechaActual.getMonth() + 1) + "-" + fechaActual.getFullYear();
console.log(fechaPersonalizada); */


// Cálculo de Fechas
/* let fechaCumple = new Date(2023, 05, 29);
let diferencia = fechaCumple - fechaActual;
console.log(diferencia);
let milisegundosPorDia = 24 * 60 * 60 * 1000;
console.log(milisegundosPorDia);
let dias = Math.round(diferencia / milisegundosPorDia);
//alert("En " + dias + " días, te estarás comiendo un ASADO!");


let contenido = document.getElementById("contenido");
console.log(contenido);
//contenido.innerHTML = "<h1>En " + dias + " días, te estarás comiendo un ASADO!</h1>"; */

/* document.getElementById("titulo").innerHTML = "En " + dias + " días, te estarás comiendo un ASADO!"; */

// Calculos de Fecha
let inicio = new Date();

for (let i=0; i<10000; i++) {
    console.log("Haciendo tiempo...");
}

let final = new Date();
let tiempo = (final - inicio) / 1000;
console.log(tiempo);
document.getElementById("titulo").innerHTML = "El proceso tardó: " + tiempo + " segundos!";