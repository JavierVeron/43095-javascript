function renderProductos() {
    let productos = cargarCarritoLS();
    let contenido = "";

    if (cantidadTotalProductos() > 0) {
        contenido += `<table class="table">`;
        contenido += `<tr>
        <td colspan="4">&nbsp;</td>  
        <td class="text-end"><button class="btn bg-light btn-sm" onclick="vaciarCarrito();" title="Vaciar Carrito">Vaciar Carrito X</button></td>
        </tr>`;

        productos.forEach(producto => {
            contenido += `<tr>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="48"></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle text-end"><b>${producto.cantidad} X $${producto.precio.toFixed(2)}</b></td>
            <td class="align-middle text-end"><b>$${(producto.cantidad * producto.precio).toFixed(2)}</b></td>
            <td class="align-middle text-end"><img src="images/trash3.svg" alt="Eliminar Producto" title="Eliminar Producto" width="24" onclick="eliminarProducto(${producto.id});"></td>
            </tr>`;
        });

        contenido += `<tr>
        <td>&nbsp;</td>
        <td colspan="2">Saldo Total</td>
        <td class="text-end"><b>$${sumaTotalProductos().toFixed(2)}</b></td>    
        <td>&nbsp;</td>
        </tr>
        </table>`;
    } else {
        contenido += `<div class="alert alert-danger text-center" role="alert">No se encontraron productos en el carrito!</div>`;
    }
    
    document.getElementById("contenido").innerHTML = contenido;
};

renderProductos();
renderBotonCarrito();