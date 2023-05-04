// Ejemplo
/* console.log("Inicio");
let comoTePortaste = "mal";

if (comoTePortaste == "mal") {
    alert("Serás castigada!");
}

console.log("Final"); */

/* let temperatura = 10;

if (temperatura > 25) {
    alert("Hace calor!");
} else {
    alert("Esta lindo el clima!");
} */

// Equivalencia ==
/* let nombre = prompt("Ingrese su Nombre:"); // Candela

if (nombre == "Juan") {
    alert("Bienvenido Juancito!!!!");
} else {
    alert("Bienvenido/a: " + nombre);
} */

/* let edad = parseInt(prompt("Cual es tu edad:"));
console.log(edad);
console.log(typeof edad);

if (edad >= 18) {
    alert("Podes tomar Alcohol!");
} else {
    alert("PROHIBIDO!\nSos menor de edad!\nNo podes tomar alcohol, porque tenes " + edad + " años!");
} */

/* let nombre = "Carla";
let feliz = true;

alert(nombre + " está feliz? " + feliz); */


// Ejemplo True o False
/* let numero = 5;
let esMayor5 = (numero > 5); //true

if (esMayor5) {
    alert("El número " + numero + " es mayor que 5!");
} else {
    alert("El número " + numero + " NO ES mayor que 5!");
} */


// Operadores lógicos
let valorA = 30;
let valorB = "20";
//let valorC = prompt("Ingrese un valor"); //string
//let valorD = parseInt(prompt("Ingrese un valor")); //string => integer

// Operador == (comparan valores)
/* if (valorC == valorD) {
    alert("Valor A y B son iguales!");
} */

// Operador === (estrictamente igual, compara valor y tipo de datos)
/* if (valorC === valorD) {
    alert("Valor A y B son estrictamente iguales!");
} */

// Operador != (distinto que)
/* if (valorA != valorB) {
    alert("Valor A y B son distintos!");
} */

// Operador !== (estrictamente distinto que)
/* if (valorA !== valorB) {
    alert("Valor A y B son estrictamente distintos!");
} */

// Operador > (mayor) >= (mayor o igual que)
/* if (valorA > 100) {
    alert("ValorA es mayor que 100!");
} */

// TAUTOLOGIA O LOGICA PROPOSICIONAL
// Operador "Y"
// V y V => V
// V y F => F
// F y V => F
// F y F => F

/* if ((valorA > 5) && (valorB > 8)) {
    alert("A y B son mayores!");
} */

/* if ((valorA > 12) && (valorB > 8)) {
    alert("A y B son mayores!");
} */

// Operador "O"
// V o V => V
// V o F => V
// F o V => V
// F y F => F

/* if ((valorA > 5) || (valorB > 8)) {
    alert("A o B son mayores!");
}

if ((valorA > 12) || (valorB > 8)) {
    alert("A o B son mayores!");
} */

// Operador "NOT"
// !V => F
// !F => V

/* if (!(valorA == 10)) {
    alert("ValorA no es 10!");
}

let sosFeliz = true;

if (!sosFeliz) {
    alert("Vos estas feliz!");
} */


// Ejemplo aplicado - Operador AND
/* let nombre = prompt("Ingrese Nombre:");
let apellido = prompt("Ingrese Apellido:");

if ((nombre != null) && (apellido != null)) {
    alert("Nombre: " + nombre + "\nApellido: " + apellido);
} else {
    alert("Error! Ingrese Nombre y Apellido!");
} */

// Ejemplo aplicado - Operador OR
/* let nombre = prompt("Ingrese Nombre:"); //ANa

if ((nombre == "ana") || (nombre == "ANA") || (nombre == "Ana")) {
    alert("El nombre ingresado es Ana!");
} else {
    alert("El nombre ingresado NO ES ANA!");
} */

// Ejemplo mejorado Ana => ana
//let nombre = prompt("Ingrese Nombre:").toLowerCase(); // Convertir el texto a minúscula
/* let nombre = prompt("Ingrese Nombre:").toUpperCase() // Convertir el texto a MAYÚSCULAS
console.log(nombre);
if (nombre == "ANA") {
    alert("El nombre ingresado es Ana!");
} else {
    alert("El nombre ingresado NO ES ANA!");
} */

// Ejemplo aplicado - Utilizando distintos operadores lógicos
//let nombre = prompt("Ingrese Nombre:");
//let edad = parseInt(prompt("Ingrese edad:"));

/* if ((edad >= 18) && ((nombre == "ema") || (nombre == "EMA"))) {
    alert("El nombre ingresado es EMA!");
} else {
    alert("El nombre ingresado NO ES EMA!");
} */

/* if (((edad >= 18) && (nombre == "ema")) || (nombre == "EMA")) {
    alert("El nombre ingresado es EMA!");
} else {
    alert("El nombre ingresado NO ES EMA!");
} */


// Operador IF ELSE IF
let temperatura = parseInt(prompt("Qué temperatura hace ahora?"));

if (temperatura < 10) {
    alert("Hace frío!")
} else if ((temperatura >= 11) && (temperatura <= 20)) {
    alert("Esta fresquito!");
} else if ((temperatura >= 21) && (temperatura <= 30)) {
    alert("Esta lindo el clima!");
} else {
    alert("Hace calor");
}
