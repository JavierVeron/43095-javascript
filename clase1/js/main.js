// Un comentario
/* Otro comentario
Tercer comentario */
/* alert("Hola a Todos! #2"); */

// Definiendo variables
/* let nombre = 'Lionel'; // Variable del tipo string o cadena de texto
let apellido = "Messi";
var edad = 35 // Variable del tipo number o númerica (entera)
const anioNacimiento = 1987; // Constante que posse un dato del tipo number. Solamente se puede definir 1 sola vez! */

//nombre = "Cristiano";
//apellido = "Ronaldo";
//anioNacimiento = "1985";

/* console.log(nombre);
console.log(apellido);
console.log(anioNacimiento); */

// Valores de variables
/* let valor1 = 100; //Number entero (integer)
let valor2 = 200.75 //Number decimal (float)
let valor3 = "Lionel Messi";
console.log(valor1);
console.log(typeof valor1);
console.log(valor2);
console.log(typeof valor2);
console.log(valor3);
console.log(typeof valor3); */


// Operaciones básicas (números)
/* let numeroA = 10;
let numeroB = 20;
const numeroC = 30;
let valor = "Hola!"; */

/* //Suma
let resultado = numeroA + numeroB;
console.log(resultado);

//Resta
let resultado2 = numeroA - numeroB;
console.log(resultado2);

//Multiplicación
let resultado3 = numeroA * numeroB;
console.log(resultado3);

//División
let resultado4 = numeroB / numeroA;
console.log(resultado4);

//Resto
let resultado5 = numeroB % numeroA;
console.log(resultado5); */


// Operaciones básicas con (strings)
/* let texto1 = "Coder";
let texto2 = "House";
let espacio = " ";
let numero = 100;

// Concatenación #1
let resultado = texto1 + texto2;
console.log(resultado);

// Concatenación #2
let resultado2 = texto1 + espacio + texto2;
console.log(resultado2);

// Concatenación #3
let resultado3 = texto1 + " " + texto2;
console.log(resultado3);

// Concatenación #4
let resultado4 = texto1 + " " + texto2 + " " + numero;
console.log(resultado4);

// Concatenación #5
let resultado5 = texto1 + " " + texto2 + "\n" + numero; // El \n es un salto de línea
console.log(resultado5); */


// Ejemplo
/* let nombre = "Lionel";
let apellido = "Messi";
let edad = 35;

let titulo = "Datos del Jugador:\n\n";
// let texto = titulo + "Nombre: " + nombre + "\n" + "Apellido: " + apellido + "\n" + "Edad: " + edad;
alert(texto); 
let salidaNombre = "Nombre: " + nombre + "\n";
let salidaApellido = "Apellido: " + apellido + "\n";
let salidaEdad = "Edad: " + edad;
let texto = titulo + salidaNombre + salidaApellido + salidaEdad;
alert(texto);

alert("Datos del Jugador: " + apellido); */


// Prompts
// Ejemplo #1
/* let nombreIngresado = prompt("Ingrese su Nombre:");
let apellido = prompt("Ingrese su Apellido:");
alert("Nombre: " + nombreIngresado + " " + apellido); */

/* let importe = prompt("Ingrese el valor de la Coca Cola:"); // Siempre guarda los valores en formato String
const IVA = 1.21;
let importeIva = importe * IVA; // string * number => Nan => [Not a Number]
alert("El valor de la Coca Cola es: $" + importeIva); */

// ParseInt() => Parsea a enteros
// ParseFloat() => Parsea a decimales
// .toFixed(n) => En "n" definimos la cantidad de decimales

// Ejemplo de Calculadora de IMC
let peso = parseFloat(prompt("Ingrese su Peso:"));
console.log("Peso: " + peso + " Kg.");
let altura = parseFloat(prompt("Ingrese su Altura:"));
console.log("Altura: " + altura + " cm.");
let imc = peso / (altura * altura);

alert("Tu IMC es: " + imc.toFixed(2) + "%");