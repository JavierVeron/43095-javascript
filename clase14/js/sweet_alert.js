const monstrarMensaje = () => {
    Swal.fire({
        position: 'top',
        //imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/640px-Coca-Cola_logo.svg.png',
        imageWidth: '180',
        title: 'Desea guardar el texto en una LocalStorage?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No Guardar`,
        timer: 3000,
        background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/640px-Coca-Cola_logo.svg.png)',
        backdrop: '#FFCC00'
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            let texto = document.getElementById("texto").value;
            localStorage.setItem("texto", texto);
            Swal.fire('Texto Guardado!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('El texto no fue guardado!', '', 'info')
        }
    })
}

document.getElementById("boton").onclick = monstrarMensaje;