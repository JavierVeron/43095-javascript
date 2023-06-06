const productos = [
    {id:1, nombre:"Gaseosa 7 Up light lima limón 2.25 l.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/277308-1200-auto?v=638128491408170000&width=1200&height=auto&aspect=true", precio:496.16},
    {id:2, nombre:"Gaseosa Pepsi black 2.25 l.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/191214-1200-auto?v=637511787851930000&width=1200&height=auto&aspect=true", precio:467.10},
    {id:3, nombre:"Gaseosa Coca Cola sabor original 2.25 l.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/332148-1200-auto?v=638211437412370000&width=1200&height=auto&aspect=true", precio:648.00},
    {id:4, nombre:"Gaseosa Schweppes sin azúcar pomelo 2.25 l.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/275529-1200-auto?v=638126761443830000&width=1200&height=auto&aspect=true", precio:661.00}
];

function guardarProductosLS() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}

guardarProductosLS();

function renderProductos() {
    let productos = cargarProductosLS();
    let contenido = "";

    productos.forEach(producto => {
        contenido += `<div class="col-md-3">
        <div class="card text-center border border-0">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
            <p class="card-text text-danger"><b>$${producto.precio}</b></p>
            <p>${producto.nombre}</p>
            <p><button class="btn btn-primary" onClick="verProducto(${producto.id});">Ver Producto</button></p>
        </div>
      </div>
      </div>`;
    });

    document.getElementById("contenido").innerHTML = contenido;
};

function verProducto(id) { //2
    let productos = cargarProductosLS();
    let producto = productos.find(item => item.id == id);
    localStorage.setItem("producto", JSON.stringify(producto));
    location.href = "ver-producto.html"; //Redireccionar a la página pasada por parámetro
}

renderProductos();