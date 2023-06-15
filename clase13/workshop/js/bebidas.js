function renderProductos() {
    let productos = cargarProductosLS();
    let contenido = "";

    productos.forEach(producto => {
        contenido += `<div class="col-md-3 mb-5">
        <a href="ver-producto.html" onclick="verProducto(${producto.id})" class="text-decoration-none">
            <div class="card text-center border border-0">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <p class="card-text text-primary"><b>$${producto.precio}</b></p>
                    <p class="text-secondary">${producto.nombre}</p>
                </div>
            </div>
        </a>
      </div>`;
    });

    document.getElementById("contenido").innerHTML = contenido;
};

renderProductos();
renderBotonCarrito();