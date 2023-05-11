// Declaración de una Función
/* function saludoGeneral() {
    let nombre = prompt("Ingrese su Nombre:");
    let sexo = prompt("Ingrese su Sexo: (M/F)").toUpperCase();
    let saludo;

    if (sexo == "M") {
        saludo = "Bienvenido, ";
    } else if (sexo == "F") {
        saludo = "Bienvenida, ";
    } else {
        saludo = "Bienvenide, ";
    }

    alert(saludo + nombre);
    console.log("Hola, " + nombre + "!!!");
}

saludoGeneral(); */

/* function calcularIMC() {
    let peso = parseFloat(prompt("Ingrese su Peso:"));
    let altura = parseFloat(prompt("Ingrese su Altura:"));

    if (altura >= 100) { // En el caso de que me carguen la altura en cm.
        console.log("estoy aca");
        altura = altura/100;
    }

    let imc = peso / (altura * altura);

    alert("Tu IMC es: " + imc.toFixed(2) + "%");
}

calcularIMC(); */


// Declarar Funciones con Parámetro
// Función con 1 parámetro
/* function tePortasteMal(decime) {
    let mensaje; //variable global

    if (decime == "mal") {
        mensaje = "Serás castigada!";
    } else {
        mensaje = "TODO PIOLA!";
    }

    alert(mensaje);
}

let respuesta = prompt("Cómo te portaste?"); // no se
//tePortasteMal(respuesta);
let respuesta2 = "mal";
tePortasteMal(respuesta2); */


// Función con 2 parámetros
/* function calcularIMC(peso, altura) {
    if (altura >= 100) { // En el caso de que me carguen la altura en cm.
        console.log("estoy aca");
        altura = altura/100;
    }

    let imc = peso / (altura * altura);

    alert("Tu IMC es: " + imc.toFixed(2) + "%");
}

//let peso = parseFloat(prompt("Ingrese su Peso:"));
//let altura = parseFloat(prompt("Ingrese su Altura:"));
//calcularIMC(peso, altura);
let pesoPersona = 150;
let alturaPersona = 200; 
calcularIMC(pesoPersona, alturaPersona); */


/* function calcularPromedio(nota1, nota2, nota3) {
    if (!nota1) {
        alert("Ingrese la Nota 1!");
        return false; //Detiene la ejecución del script
    }

    if (!nota2) {
        alert("Ingrese la Nota 2!");
        return false;
    }

    if (!nota3) {
        alert("Ingrese la Nota 3!");
        return false;
    }

    let promedio = (nota1 + nota2 + nota3) / 3; //333/3 => 111
    console.log(promedio);
    alert("Tu promedio es: " + promedio.toFixed(2));
}

let valor1 = (prompt("Ingrese Nota 1:")); //string => lo que necesito es un number
let valor2 = (prompt("Ingrese Nota 2:"));
let valor3 = (prompt("Ingrese Nota 3:"));
//let valor4 = parseInt(prompt("Ingrese Nota 4:"));
calcularPromedio(valor1, valor2, valor3); */

// Función con Return
/* function calcularIMC(peso, altura) {
    if (altura >= 100) { // En el caso de que me carguen la altura en cm.
        console.log("Convierto la alura en cm a metros!");
        altura = altura / 100;
    }

    let imc = peso / (altura * altura);

    return imc; //acá termino devolviendo el resultado
}

function estadoDeSalud(valor) {
    if (valor < 18.5) {
        return "Peso inferior al normal";
    } else if (valor >= 18.5 && valor <= 24.9) {
        return "Normal";
    } else if (valor >= 25 && valor <= 29.9) {
        return "Peso superior al normal";
    } else {
        return "Obesidad";
    }
}

let resultado = calcularIMC(85, 176); //27.22
let estado = estadoDeSalud(resultado);
alert("Tu IMC es: " + resultado.toFixed(2) + "%");
alert("Tu Estado de Salud es: " + estado);
console.log("El calculo de Tu IMC es: " + resultado); */


// Variables globales vs Variables Locales
/* let resultado = 0; //variable global

function calcular(num1, num2) {
    resultado = num1 + num2;

    return resultado;
}

calcular(10, 20);
console.log("Resultado: " + resultado); */

// Otro ejemplo
/* let resultado = 100; //variable global

function calcular(num1, num2) {
    let resultado = num1 + num2; //variable local

    return resultado;
}

let resultado2 = calcular(10, 20);
console.log("Resultado: " + resultado2); //30
console.log("Resultado: " + resultado); //? */


// Función Anónimas
/* const suma = function(a, b) {
    return a + b;
}

let resultado = suma(20, 50);
alert("El resultado es: " + resultado); */

/* const saludar = function (nombre) {
    return "Hola, " + nombre;
}

alert(saludar("Agustin"));
console.log(saludar("Agustin")); */


// Función Flecha
/* const suma = (a, b) => {
    return a + b;
}

let resultado = suma(50, 80);
alert("El resultado es: " + resultado);

const saludar = (nombre) => {
    return "Hola, " + nombre;
}

let saludo = saludar("Facundo");
alert(saludo); */



// Ejemplo aplicado
const suma = (a, b) => {return a + b};
const resta = (a, b) => {return a - b};
const iva = (valor) => {return valor * 0.21};
//Valores por defecto
let precioProducto = 1000;
const descuento = (valor) => {return valor * 0.10};

console.log("El valor del Producto es: $" + precioProducto);
let ivaProducto = iva(precioProducto);
console.log("El IVA del Producto es: $" + ivaProducto);
let sumaCalculo = suma(precioProducto, ivaProducto);
console.log("La suma del Producto más IVA es: $" + sumaCalculo);
let descuentoProducto = descuento(precioProducto);
console.log("El Descuento es: $" + descuentoProducto);
let restaCalculo = resta(sumaCalculo, descuentoProducto);
let calculo = restaCalculo;
console.log("El valor es: $" + calculo);


