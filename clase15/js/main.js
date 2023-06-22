//setTimeout
/* console.log("Inicio del Proceso");

setTimeout(() => {
    console.log("Hola Coders!");
}, 3000);

console.log("Fin del Proceso"); */

/* let boton = document.getElementById("btnEnviar");
let resultado = document.getElementById("resultado");

const mostrarMensaje = () => {
    resultado.className = "text-center text-white bg-danger p-3 my-3";
    resultado.innerHTML = "Cargando...";

    setTimeout(() => {
        resultado.className = "text-center text-white bg-success p-3 my-3";
        resultado.innerHTML = "Resultado OK!";
    }, 3000);
}

boton.onclick = mostrarMensaje; */


/* for (const letra of "Hola") {
    console.log(letra);
}

for (const letra of "Coders") {
    setTimeout(() => {
        console.log(letra);
    }, 1000);
} */


/* console.log("Inicio del Proceso"); // Se ejecutó en forma síncrona

setTimeout(() => { // Se ejecutó en forma asíncrona
    console.log("Hola Coders!");
}, 0); 

console.log("Fin del Proceso"); // Se ejecutó en forma síncrona */


// Ejemplo callstack
/* const multiply = (x, y) => {
    return x * y;
}

const printSquare = (x) => {
    let resultado = multiply(x, x);
    console.log(resultado);
}

printSquare(5); */


// ClearInterval y setInterval
let contador = 0;

/* const intervalo = setInterval(() => {
    contador++;
    console.log("Contador: " + contador);

    if (contador == 5) {
        clearInterval(intervalo);
        console.log("Se detuvo el Interval");
    }
}, 1000);

document.getElementById("btnDetener").onclick = () => {
    clearInterval(intervalo);
    console.log("Se detuvo el Interval (desde el botón)");
} */


// ClearTimeOut
/* const timeout = setTimeout(() => {
    console.log("Acá estoy desde el Timeout!");
}, 5000);

document.getElementById("btnDetener").onclick = () => {
    clearTimeout(timeout);
    console.log("Se detuvo el Timeout (desde el botón)");
} */


// Promesas
/* const eventoFuturo = (edad) => {
    return new Promise((resolve, reject) => {
        //No tiene nada
        if (edad >= 18) {
            resolve("Podes tomar alcohol!")
        } else {
            reject("Error! No podés tomar alcolhol, porque sos MENOR DE EDAD! POLICIA!!!")
        }
    })
}

console.log(eventoFuturo(14)); */


// Promesa con setTimeOut¡
/* const eventoFuturo = (edad) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            edad >= 18 ? resolve("Podes tomar alcohol!") : reject("Error! No podés tomar alcolhol, porque sos MENOR DE EDAD! POLICIA!!!");
        }, 3000);
    })
}

let promesa = eventoFuturo(15); */

// Método Then y Catch
/* promesa.then(resultado => {
    console.log(resultado);
});

promesa.catch(resultado => {
    console.log(resultado);
}); */


// Anidar métodos Then y Catch
/* promesa.then(resultado => {
    console.log(resultado);
})
.catch(resultado => {
    console.log(resultado);
}); */


// Método Finally (se ejecuta al final SIEMPRE)
/* promesa.then(resultado => {
    console.log(resultado);
})
.catch(resultado => {
    console.log(resultado);
})
.finally(() => {
    console.log("Fin del Proceso!");
}) */


// Ejemplo aplicado
const productos = [
    {id:1, nombre:"Coca Cola", precio:700, imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/188/828/products/000000000000000038912447-001_800x8001-3915ef215e02c2585216541765000678-640-0.jpg"},
    {id:2, nombre:"Pepsi", precio:650, imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/188/828/products/000000000000000038912447-001_800x8001-3915ef215e02c2585216541765000678-640-0.jpg"},
    {id:3, nombre:"Manaos", precio:350, imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/188/828/products/000000000000000038912447-001_800x8001-3915ef215e02c2585216541765000678-640-0.jpg"}
];

const pedirProductos = () => {
    document.getElementById("resultado").innerHTML = `<div class="spinner-border text-danger text-center" role="status">
    <span class="visually-hidden">Loading...</span></div>`;

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    })
}

const renderProductos = (arrayDeProductos) => {
    let resultado = document.getElementById("resultado");
    let contenido = "";

    arrayDeProductos.forEach(elemento => {
        contenido += `<div class="col-md-4">
            <div class="card">
                <img src="${elemento.imagen}" class="img-fluid" alt="${elemento.nombre}">
                <div class="card-body text-center">
                    <p class="card-text"><b>${elemento.nombre}</b></p>
                    <p class="card-text">$${elemento.precio}</p>
                </div>
            </div>
        </div>`;
    });

    resultado.innerHTML = contenido;
}

pedirProductos().then(resultado => {
    renderProductos(resultado);
});
