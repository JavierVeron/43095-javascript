const validarFormulario = () => {
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");

    if (nombre.value == "") {
        mostrarMensaje("Complete el campo Nombre!", "error");
        nombre.focus();
        return false;
    }

    if (email.value == "") {
        mostrarMensaje("Complete el campo email!", "error");
        email.focus();
        return false;
    } 
    
    mostrarMensaje("Los datos se guardaron correctamente!", "ok");
    guardarDatos(nombre.value, email.value);
}

const mostrarMensaje = (texto, tipo) => {
    let colorFondo = (tipo == "error") ? "#FF0000" : "#00FF00";

    Toastify({
        text: texto,
        duration: 2000,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        style: {
            color: 'white',
            background: colorFondo,
        },
    }).showToast();
}

const guardarDatos = (nombre, email) => {
    const datosUsuario = {nombre:nombre, email:email}
    localStorage.setItem("texto", JSON.stringify(datosUsuario));
}

document.getElementById("boton").onclick = validarFormulario;