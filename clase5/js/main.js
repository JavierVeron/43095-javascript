// Creando un objeto
/* let nombrePersona = prompt("Ingrese su Nombre:");
let edadPersona = 40;
const persona1 = {nombre:nombrePersona, apellido:prompt("Ingrese su Apellido:"), edad:edadPersona, fechaNacimiento:"01-05-1998"};
//persona1 = "hola";
console.log(persona1); */

// Accediendo a los datos de un Objeto
const persona = {
    nombre: "Denise Gargiulo",
    edad: 19,
    direccion: "Av. Siempreviva 742",
    dni: 1122334455,
    ig: "@denisegargiulo"
};

/* function mostrarDatos() {
    console.log("Nombre: " + persona.nombre);
    console.log("Edad: " + persona.edad);
    console.log("IG: " + persona.ig);
}

if (persona.edad >= 18) {
    mostrarDatos();
} else {
    console.log("No! Es menor de edad!");
} */

//console.log("Instagram: " + persona.ig);

// Otra forma de acceder a las propiedades del Objeto
/* console.log("Nombre: " + persona["nombre"]);
console.log("Edad: " + persona["edad"]); */

// Establecer nuevos valores
/* persona.edad = 28;
persona["dni"] = 333444555;
persona.email = "denise.gargiulo@gmail.com";
persona["email2"] = "denise.gargiulo2023@gmail.com";
console.log(persona); */


// Constructores
/* function Persona(nombrePersona, edadPersona, direccionPersona, estadoCivil) {
    this.nombre = nombrePersona;
    this.edad = edadPersona;
    this.direccion = direccionPersona;
    this.estadoCivil = estadoCivil;
    this.saludar = function () {
        console.log("Hola, soy " + this.nombre);
    }
    this.obtenerEdad = () => {
        console.log("Mi edad es " + this.edad);
    }
} */

/* const persona1 = new Persona("Nicolas Reschke", 25, "Av. San Martín 1500");
const persona2 = new Persona("Gabriel Epstein", 23, {nombreCalle:"Córdoba", altura:2456, ciudad:"Ciudad de Buenos Aires"});
console.log(persona1);
console.log(persona2);
persona2.estadoCivil = "Casado";
console.log(persona2); */

/* let salida = "Nombre: " + persona2.nombre + "\n";
salida += "Edad: " + persona2.edad + "\n";
salida += "Domicilio: " + persona2.direccion.nombreCalle + " " + persona2.direccion.altura;
alert(salida); */

/* let nuevoNombre = prompt("Ingrese su Nombre:")
let nuevaEdad = prompt("Ingrese su Edad:")
let nuevaDireccion = prompt("Ingrese su Dirección:")
let estadoCivil = prompt("Ingrese su Estado Civil:")
const persona3 = new Persona(nuevoNombre, nuevaEdad, nuevaDireccion, estadoCivil);
console.log(persona3);

function Persona2(objeto) {
    this.nombre = objeto.nombre1;
    this.edad = objeto.edad1;
    this.direccion = objeto.direccion1;
}

let pepe = {nombre1:"Jose Ignacio", edad1:25, direccion1:"Av. Rivadavia 1234"};
const nuevaPersona = new Persona2(pepe);
console.log(nuevaPersona); */


// Métodos en Objetos
/* let cadena = "Hola Mundo!!!";
console.log("Longitud: " + cadena.length);
console.log("Texto en Minúsculas: " + cadena.toLowerCase());
console.log("Texto en Mayúsculas: " + cadena.toUpperCase()); */

/* const persona1 = new Persona("Juan Perez", 29, "Av. San Martín 1500", "Soltero");
console.log(persona1);
persona1.saludar();
persona1.obtenerEdad();

function Producto(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.IVA = 21;
    this.obtenerDescuento = () => {
        this.precio = this.precio * 0.9;
    }
    this.esCaro = () => {
        if (this.precio > 1000) {
            return "Sí, es caro!";
        } else {
            return "No, no es caro!";
        }
    }
}

const nuevoProducto = new Producto(1, "Coca Cola", "750");
nuevoProducto.obtenerDescuento();
console.log(nuevoProducto);
console.log("Es Caro? " + nuevoProducto.esCaro()); */

// Operador IN y For in
/* const persona1 = new Persona("Juan Perez", 29, "Av. San Martín 1500", "Soltero");
console.log("nombre"  in persona1);
console.log("dni"  in persona1); */

// Vamos a recorrer cada una las propiedades de mi Objeto
/* for (const propiedad in persona1) {
    console.log(propiedad + " - " + persona1[propiedad]);
} */


// Clases
class Persona {
    constructor(nombrePersona, edadPersona, direccionPersona) {
        this.nombre = nombrePersona;
        this.edad = edadPersona;
        this.direccion = direccionPersona;
    }
    saludar() {
        alert("Hola, soy " + this.nombre);
    }
    sosMayor(edad) {
        if (this.edad >= edad) {
            alert("Sí, soy mayor!")
        } else {
            alert("No, no soy mayor!");
        }
    }
}

const persona1 = new Persona("Elizabeth Maffei", 30, "Av. San Martín 1500");
console.log(persona1);
persona1.saludar();
persona1.sosMayor(25);

// Ejemplo aplicado
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }

    aplicarIVA() {
        this.precio = this.precio * 1.21;
    }

    fueVendido() {
        this.vendido = true;
    }
}

const producto1 = new Producto("Coca Cola", 750);
const producto2 = new Producto("Pepsi", 650);
producto1.aplicarIVA();
console.log(producto1);
producto1.fueVendido();
console.log(producto1);