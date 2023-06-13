function guardarProductosLS() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}

function guardarCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function buscarProducto(id) {
    const productos = cargarProductosLS();
    
    return productos.find(item => item.id === id);
}

function agregarProducto(id) {
    const carrito = cargarCarritoLS();
    const producto = buscarProducto(id);
    carrito.push(producto);
    guardarCarritoLS(carrito);
    renderBotonCarrito();
}

function eliminarProducto(id) {
    const carrito = cargarCarritoLS();
    const nuevoCarrito = carrito.filter(item => item.id != id)
    guardarCarritoLS(nuevoCarrito);
    renderBotonCarrito();
    renderProductos();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderBotonCarrito();
    renderProductos();
}

function cantidadTotalProductos() {
    const carrito = cargarCarritoLS();

    //return carrito.reduce((acumulador, item) => acumulador += item, 0);
    return carrito.length;
}

function sumaTotalProductos() {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acumulador, item) => acumulador += item.precio, 0);
}

function renderBotonCarrito() {
    let botonCarrito = document.getElementById("botonCarrito");
    let contenido = `<button type="button" class="btn bg-light position-relative">
    <img src="images/cart2.svg" alt="Carrito" width="32">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${cantidadTotalProductos()}
    </span>
    </button>`;
    botonCarrito.innerHTML = contenido;    
}