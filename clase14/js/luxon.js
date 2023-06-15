const mostrarFecha = () => {
    const DateTime = luxon.DateTime;
    // Construyo una fecha a partir de parámetros
    //const dt = DateTime.local(2023, 5, 25, 20, 23);

    // Construyo una fecha a partir de un objeto
    /* const dt = DateTime.fromObject({
        year:2023,
        month:6,
        day:20
    }); */

    // Contruyo una fecha a partir de un formato ISO
    /* let fecha = document.getElementById("fecha").value;
    const dt = DateTime.fromISO(fecha);
    console.log(dt.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)); */

    /* const dt = DateTime.now();
    console.log(dt.toString()); */

    // Transformaciones
    /* const dt = DateTime.now();
    // Suma
    const suma = dt.plus({hours:2, minutes:15});
    console.log("Suma: " + suma.toLocaleString(DateTime.DATETIME_SHORT));
    // Resta
    const resta = dt.minus({hours:1, minutes:20});
    console.log("Resta: " + resta.toLocaleString(DateTime.DATETIME_SHORT)); */

    // Duraciones
    /* const Duration = luxon.Duration;
    const dt = DateTime.now();
    const duracion = Duration.fromObject({hours:2, minutes:15});
    console.log("Horas: " + duracion.hours);
    console.log("Minutos: " + duracion.minutes); */

    // Interval
    const Interval = luxon.Interval;
    const fecha = document.getElementById("fecha").value;
    const fechaActual = DateTime.now();
    const fechaCumple = DateTime.fromISO(fecha);
    const intervalo = Interval.fromDateTimes(fechaActual, fechaCumple);

    console.log("Faltan: " + Math.ceil(intervalo.length("days")) + " días para tu Cumple!");


}

document.getElementById("boton").onclick = mostrarFecha;