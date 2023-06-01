let boton = document.getElementById("boton1");
// Eventos Opción #1 (addEventListener) asocio el nombre de una Función
//boton.addEventListener("click", saludar);

// Asocio y defino directamente una función
/* boton.addEventListener("click", () => {
    console.log("Hola Coders!");
}) */


// Eventos Opción #2 (onClick) asocio el nombre de una Función a la propiedad onclick
//boton.onclick = saludar;

// Asocio y defino directamente una función a la propiedad onclick
/* boton.onclick = () => {
    console.log("Hola Coders!");
}; */
/* boton.title = "Holis"; */


// Eventos del Mouse
/* boton.addEventListener("mouseover", () => {
    console.log("Entro el Mouse!");
});

boton.addEventListener("mousemove", () => {
    console.log("Moviendo el Mouse!");
});

boton.addEventListener("mouseout", () => {
    console.log("Salío el Mouse!");
});

boton.addEventListener("mousedown", () => {
    console.log("Presionaste el botón izquierdo del Mouse!");
});

boton.addEventListener("mouseup", () => {
    console.log("Levantaste el botón izquierdo del Mouse!");
}); */


// Eventos del Teclado
//let campo1 = document.getElementById("campo1");

/* campo1.addEventListener("keydown", (evento) => {
    //console.log("Se presionó una tecla!");
    console.log(evento.key);

    if (evento.key == "@") {
        evento.preventDefault(); //cancelar la ejecución de mi evento
    }
}); */

/* campo1.addEventListener("keyup", () => {
    console.log("Se soltó una tecla!");
}); */


// Evento Change
/* let campo1 = document.getElementById("campo1");
campo1.onchange = () => {
    console.log("Detectamos ingreso de datos...");
}

let paises = document.getElementById("paises");
paises.onchange = () => {
    document.getElementById("resultado").className = "miEstilo";
    document.getElementById("resultado").innerHTML = paises.value;
} */


// Evento Input
/* const limite = 140;
let texto = document.getElementById("texto");
let caracteres = document.getElementById("caracteres");
texto.addEventListener("input", (event) => {
    let longitudTexto = texto.value.length;

    if (longitudTexto <= limite) {
        let resto = limite-longitudTexto;
        
        if (resto <= 15) {
            caracteres.className = "text-danger";
        } else {
            caracteres.className = "text-dark";
        }

        caracteres.innerHTML = "Caracteres: " + resto;
    }

    texto.value = texto.value.substring(0, limite);
}); */


// Validando Formularios
// Validación de Formulario con botón del tipo "button"
/* function validarFormulario() {
    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let clave = document.getElementById("clave");
    let claveError = document.getElementById("claveError");

    if (email.value == "") {
        emailError.innerHTML = "Error! Debe completar el campo Email!";
        return false; //Detener la ejecución de mi programa justo acá
    } else {
        emailError.innerHTML = "";
    }

    if (clave.value == "") {
        claveError.innerHTML = "Error! Debe completar el campo Password!";
        return false;
    } else {
        claveError.innerHTML = "";
    }
    
    document.getElementById("form1").submit(); //Enviar el Formulario
} */

//document.getElementById("botonForm").addEventListener("click", validarFormulario);


// Validación de Formulario con botón del tipo "submit"
function validarFormulario(e) {
    e.preventDefault();
    console.log("Detuvimos el Formulario!");

    let formulario = e.target;
    let campoTexto = formulario.children[0].value;
    console.log("El valor del campo de Texto es: " + campoTexto);
    let campoNumber = formulario.children[1].value;
    console.log("El valor del campo de Number es: " + campoNumber);
}

//document.getElementById("formulario").addEventListener("submit", validarFormulario);
document.getElementById("formulario").onsubmit = validarFormulario;