// Fetch (Consumir una API)
/* fetch("https://jsonplaceholder.typicode.com/posts/")
.then(respuesta => respuesta.json())
.then(datos => {
    //console.log(datos);
    let salida = "";

    datos.forEach(item => {
        salida += `<div class="col-md-3 mb-3">
            <div class="card">
                <div class="card-header">${item.title}</div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>${item.body}</p>
                    </blockquote>
                </div>
            </div>
        </div>`;
    });

    document.getElementById("contenido").innerHTML = salida;
}); */


// Fetch para hacer un POST (Subir o crear algo)
/* fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Despedida de Maxi Rodríguez',
    body: 'El mediocampista Maxi Rodriguez realizó su retiro en la Cancha de Newells Old Boys con la participación de Lionel Messi. ',
    club: "Newells Old Boys",
    ciudad: "Rosario",
    provincia: "Santa Fé"
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((respuesta) => respuesta.json())
.then((datos) => console.log(datos)); */


// Fetch para rutas relativas (archivo JSON local)
/* fetch("js/productoss.json")
.then(respuesta => respuesta.json())
.then(datos => {
    let salida = "";

    datos.forEach(item => {
        salida += `<div class="col-md-3 mb-3">
            <div class="card" style="width: 18rem;">
                <img src="${item.imagen}" class="img-fluid" alt="${item.nombre}">
                <div class="card-body text-center">
                    <p class="card-text">${item.nombre}<br>$${item.precio}</p>
                </div>
            </div>
        </div>`;
    });

    document.getElementById("contenido").innerHTML = salida;
}) */


// Async y Await de Fetchs
/* async function obtenerProductos() {
    try {
        const respuesta = await fetch("js/productos.json");
        const datos = await respuesta.json();

        let salida = "";

        datos.forEach(item => {
            salida += `<div class="col-md-3 mb-3">
                <div class="card" style="width: 18rem;">
                    <img src="${item.imagen}" class="img-fluid" alt="${item.nombre}">
                    <div class="card-body text-center">
                        <p class="card-text">${item.nombre}<br>$${item.precio}</p>
                    </div>
                </div>
            </div>`;
        });

        document.getElementById("contenido").innerHTML = salida;
    } catch (error) {
        document.getElementById("contenido").innerHTML = `<div class="alert alert-danger" role="alert">Error! No se encontró el archivo <b>productos.json</b>!</div>`;
    }
} */

const obtenerProductos = async () => {
    try {
        const respuesta = await fetch("js/productos.json");
        const datos = await respuesta.json();

        let salida = "";

        datos.forEach(item => {
            salida += `<div class="col-md-3 mb-3">
                <div class="card" style="width: 18rem;">
                    <img src="${item.imagen}" class="img-fluid" alt="${item.nombre}">
                    <div class="card-body text-center">
                        <p class="card-text">${item.nombre}<br>$${item.precio}</p>
                    </div>
                </div>
            </div>`;
        });

        document.getElementById("contenido").innerHTML = salida;
    } catch (error) {
        document.getElementById("contenido").innerHTML = `<div class="alert alert-danger" role="alert">Error! No se encontró el archivo <b>productos.json</b>!</div>`;
    }
}

obtenerProductos();
