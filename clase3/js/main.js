// Ciclo por Conteo => FOR Del 0..9
/* console.log("Inicio");

let i;

for (i=0; i<10; i++) { //0...9
    alert("Hola a Todos! #" + i);
}

console.log("Final"); */


// Ciclo por Conteo => FOR Del 1..10
/* console.log("Inicio");

let i;

for (i=1; i<=10; i++) { //1...10
    alert("Hola a Todos! #" + i);
}

console.log("Final"); */

// Ejemplo decrementando
/* let i;

for (i=10; i>0; i--) { //10...1
    alert("Hola a Todos! #" + i);
} */


// Ejemplo contando de 5 en 5
/* for (let i=0; i<=25; i+=5) { //1...10
    alert("Hola a Todos! #" + i);
} */

// Diferentes formas de sumar un valor
//let valor = 10;
//valor = valor + 10; //Opción #1
//valor += 10 //Opción #2
//valor++ // Incrementar en 1


// Ejemplo aplicado => Tabla del 1 al 10
/* let valorIngresado = parseInt(prompt("Ingrese un número:"));

for (let i=1; i<=10; i++) {
    let resultado = valorIngresado * i;
    alert(valorIngresado + " X " + i + " = " + resultado);
} */


// Ejemplo aplicado con un solo Alert
/* let valorIngresado = parseInt(prompt("Ingrese un número:"));
let salida = "Tabla del " + valorIngresado + "\n\n";

for (let i=1; i<=10; i++) {
    let resultado = valorIngresado * i;
    //salida = salida + valorIngresado + " X " + i + " = " + resultado;
    salida += valorIngresado + " X " + i + " = " + resultado + "\n";
}

alert(salida); */

// Ejemplo aplicado
/* let cantidadNombres = parseInt(prompt("Ingrese la cantidad de nombres:"));

for (let i=1; i<=cantidadNombres; i++) {
    let nombre = prompt("Ingrese el Nombre #" + i);
    alert("El Nombre #" + i + " es: " + nombre);
} */


// Sentencia Break
/* for (let i=0; i<10; i++) {
    alert("Hola #" + i + " [BREAK]");

    if (i == 5) {
        break;
    }

    alert("Chau #" + i + " [BREAK]");
} */

// Sentencia Contine
/* for (let i=0; i<10; i++) {
    
    if (i == 5) {
        continue;
    }
    
    alert("Hola #" + i + " [CONTINUE]");
    alert("Chau #" + i + " [CONTINUE]");
} */


// Ciclos por condición => WHILE
/* let nombre = prompt("Ingrese un Nombre:"); //esc ESC eSC

while (nombre.toUpperCase() != "ESC") { // ESC != ESC
    alert("Ingresaste: " + nombre);
    nombre = prompt("Ingrese otro Nombre:");
} */


// Do .. While => Es lo mismo que el While, pero ejecuta al menos 1 vez
/* let nombre;

do {
    nombre = prompt("Ingrese otro Nombre:");
    alert("Ingresaste: " + nombre);
} while (nombre.toUpperCase() != "ESC"); */


// Ejemplo aplicado de Do..While
/* let numero = 0;

do {
    numero = prompt("Ingrese un número:");
    alert("Ingresaste: " + numero);
} while (parseInt(numero)); */


// Switch
/* let nombre = prompt("Ingrese un Nombre:").toUpperCase(); // Convierta cualquier valor a mayúscula y lo asigne a la variable nombre
console.log("Fuera del While: " + nombre);

while (nombre != "ESC") {
    switch(nombre) {
        case "ANA":
            alert("Hola, Anita!");
            break;
        case "JUAN":
            alert("Hola, Juancito!");
            break;
        default:
            alert("Quién diablos sos???");
            break;
    }

    nombre = prompt("Ingrese otro Nombre:").toUpperCase();
    console.log("Dentro del While: " + nombre);
} */


// Ejemplo Calendario
let mesIngresado = parseInt(prompt("Ingrese el Mes del Calendario:")); // 2 => Febrero => 28 dias
let salida = "";
let mes = "";
let dias = 0;

switch(mesIngresado) {
    case 1:
        mes = "Enero";
        dias = 31;
        break;
    case 2:
        mes = "Febrero";
        dias = 28;
        break;
    case 3:
        mes = "Marzo";
        dias = 31;
        break;
    case 4:
        mes = "Abril";
        dias = 30;
        break;
    case 5:
        mes = "Mayo";
        dias = 31;
        break;
    case 6:
        mes = "Junio";
        dias = 30;
        break;
    case 7:
        mes = "Julio";
        dias = 31;
        break;
    case 8:
        mes = "Agosto";
        dias = 31;
        break;
    case 9:
        mes = "Septiembre";
        dias = 30;
        break;
    case 10:
        mes = "Octubre";
        dias = 31;
        break;
    case 11:
        mes = "Noviembre";
        dias = 30;
        break;
    case 12:
        mes = "Diciembre";
        dias = 31;
        break;
    default:
        break;
}

console.log("Mes: " + mes); //febrero
console.log("Dias: " + dias); //28

salida = "Mes Seleccionado: " + mes + "\n\n"; // Mes Seleccionado: Febrero
salida += "L    M    M    J    V    S    D\n";

for (let i=1; i<=dias; i++) {
    if (i < 10) {
        salida += "  " + i + "  ";
    } else {
        salida += i + "  ";
    }

    if (i%7 == 0) {
        salida += "\n";
    }
}

alert(salida);











