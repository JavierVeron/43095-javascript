class Carrito {
    constructor() {
        this.productos = []
    }

    agregarProducto(nombreProducto, precioProducto) {
        this.productos.push({id:this.generarId(), nombre:nombreProducto.toLocaleUpperCase(), precio:precioProducto});
        console.log("Agregaste un Producto!");
    }

    eliminarProducto(id) {
        this.productos = this.productos.filter(item => item.id != id);
        console.log("Eliminaste un Producto!");
    }

    totalProductos() {
        return this.productos.length;
    }

    sumaTotal() {
        /* let total = 0;
        
        this.productos.forEach(item => {
            total += item.precio; 
        });

        return total; */
        return this.productos.reduce((total, item) => total += item.precio, 0);
    }

    generarId() {
        let max = 0;

        this.productos.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        });

        return max + 1;
    }

    listarProductos() {
        let contenido = "Productos agregados:\n\n";

        this.productos.forEach(item => {
            contenido += `${item.id} - ${item.nombre} $${item.precio}\n` 
        });

        return contenido;
    }
}

let nombre = "";
let precio = 0;
const carrito = new Carrito();

// Agregamos Productos
while (nombre.toLocaleUpperCase() != "ESC") {
    nombre = prompt("Ingrese el Nombre del Producto:\n(ESCRIBA ESC PARA SALIR)");
    
    if (nombre.toLocaleUpperCase() == "ESC") {
        break;
    }
    
    precio = parseFloat(prompt("Ingrese el Precio del Producto:"));
    carrito.agregarProducto(nombre, precio);
}

// Validar si mi Carrito tiene Productos
if (carrito.totalProductos() > 0) {
    let id;

    // Eliminar Productos
    while (id != 0) {
        id = parseInt(prompt(carrito.listarProductos() + "\nIngrese el ID del Producto a Eliminar:\n(ESCRIBAR 0 PARA SALIR)"));
        
        if (id > 0) {
            carrito.eliminarProducto(id);
        }
    
        if (carrito.totalProductos() == 0) {
            break;
        }
    }

    // Informo el Total de Productos agregados
    alert(`${carrito.listarProductos()}\nTotal a Pagar: $${carrito.sumaTotal()}`);
} else {
    alert("No se encontraron Productos agregados en el Carrito!");
}