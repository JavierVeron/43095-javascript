//Operador Spread
/* const nombres = ["Matias", "Carla", "Juan", "Fede"];
console.log(nombres);
console.log(...nombres); */

const numeros = [1, 20, 50, 0, -20, 98];
/* console.log("Máximo: " + Math.max(...numeros));
console.log("Mínimo: " + Math.min(...numeros)); */

const nombres1 = ["Matías", "Carla"];
const nombres2 = ["Ariel", "Denise"];
/* const nombres = nombres1.concat(nombres2); //Método de Array
console.log(nombres); */
// Creo un array con spread
/* const nombres = [...nombres1, ...nombres2];
console.log(nombres);
// Creo un objeto con spread
const nombresObj = {
    ...nombres,
    total: nombres.length
}
console.log(nombresObj); */


// Crear un objeto a partir de otro Objeto
/* const usuario1 = {
    id:1,
    nombre:"Juan Perez",
    curso:"JavaScript"
}

const usuario2 = {
    ...usuario1
}
console.log(usuario2);

const usuario3 = {
    ...usuario1,
    curso:"React JS",
    email:"juan.perez@gmail.com"
}
console.log(usuario3); */


// Rest parameters
/* function sumar(...numeros) {
    console.log(numeros);
}

sumar(10, 30);
sumar(10, 20, 50, 60, 30); */

/* function sumar(...numeros) { //[10, 20] //[20, 40, 50, 60]
    return numeros.reduce((acumulador, item) => acumulador += item, 0);
}

console.log(sumar(20, 50));
console.log(sumar(20, 40, 50, 60)); */

