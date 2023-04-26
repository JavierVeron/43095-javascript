alert("Bienvenidos al Curso de JavaScript!"); //Mostrar un cartel en el Navegador con el Texto que nosotros definimos
console.log("Hola mundo!"); //Mostrar un mensaje en la consola del Navegador

//Modificando el Texto del Encabezado
document.getElementById("encabezado").innerHTML = "Cursos en Coderhouse!";


//Ingreso un valor y le aplico el IVA
let valor = parseFloat(prompt("Ingrese un Valor:"));

if (valor > 10000) {
    valor = valor - ((valor * 10)/100);
}

let valorIva = valor * 1.21;
alert("El valor ($" + valor + ") con IVA es: $" + valorIva);
