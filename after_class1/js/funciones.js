const solicitarMonto = () => {
    let monto = 0;

    while ((monto <= 0) || (monto > 2000000)) {
        monto = parseInt(prompt("Ingrese el Monto: (Hasta $2.000.000 pesos)"));
    }

    return monto;
}

const solicitarPlazo = () => {
    let plazo = 0;

    while ((plazo != 12) && (plazo != 24) && (plazo != 36) && (plazo != 48) && (plazo != 60)) {
        plazo = parseInt(prompt("Ingrese la Cantidad de Cuotas: (12/24/36/48/60):"));   
    }

    return plazo;
}

const solicitarTipoCliente = () => {
    return prompt("Ingrese el Tipo de Cliente: (Exclusive/Premium/Start)").toUpperCase();
}

const calcularTasa = (plazo) => {
    switch (plazo) {
        case 12:
            tasa = 50;
            break;
        case 24:
            tasa = 60;
            break;
        case 36:
            tasa = 70;
            break;
        case 48:
            tasa = 80;
            break;
        case 60:
            tasa = 90;
            break;    
        default:
            tasa = 120;
            break;
    }

    return tasa;
}

const obtenerTNA = (tipoCliente) => {
    switch (tipoCliente) {
        case "EXCLUSIVE":
            TNA = 113;
            break;
        case "PREMIUM":
            TNA = 118;
            break;
        case "START":
            TNA = 123;
            break;
        default:
            TNA = 150;
            break;
    }

    return TNA;
}

const calculoDeInteres = (monto, tna, cuotas) => {
    /* let calculo1 = (monto * (tna - 100)) / 100;
    console.log(calculo1);
    let calculo2 =  monto + calculo1;
    console.log(calculo2);
    let calculo3 = calculo2 / cuotas;
    console.log(calculo3); */

    return (monto + ((monto * (tna - 100)) / 100)) / cuotas;
}

const calcularMontoInteresConIVA = (valor) => {
    return (valor * IVA) / 100;
}

const calcularMontoCapital = (valor) => {
    return (valor * tasa) / 100;
}

const calcularCuotaPura = (interes, capital) => {
    return interes + capital;
}

const calcularCuotaTotal = (cuotaPura, iva) => {
    return cuotaPura + iva;
}

const mostrarLogPrestamoSolicitado = (monto, plazo, tipoCliente, cuotaPura, montoConCapital, montoConInteres, montoConInteresIVA, cuotaTotal) => {
    console.log("Monto: $" + monto);
    console.log("Plazo: " + plazo + " Cuotas");
    console.log("Tasa: " + tasa);
    console.log("Tipo de Cliente: " + tipoCliente);
    console.log("TNA: " + TNA);
    console.log("Calculo de Interés: $" + montoConInteres);
    console.log("Calculo de IVA: $" + montoConInteresIVA);
    console.log("Calculo de Capital: $" + montoConCapital);
    console.log("Cuota Pura: $" + cuotaPura);
    console.log("Cuota Total: $" + cuotaTotal);
}

const informarPrestamoSolicitado = (monto, plazo, tipoCliente, cuotaPura, montoConCapital, montoConInteres, montoConInteresIVA, cuotaTotal) => {
    let salida = "SIMULADOR DE PRESTAMO PERSONAL\n\n";
    salida += "Monto solicitado: $" + monto + "\n";
    salida += "Plazo: " + plazo + " Cuotas" + "\n";
    salida += "Tipo de Cliente: " + tipoCliente + "\n";
    salida += "Tasa Nominal Anual (TNA): " + TNA + "%" + "\n";
    salida += "Cuota Pura: $" + cuotaPura.toFixed(2) + "\n";
    salida += "Capital: $" + montoConCapital.toFixed(2) + "\n";
    salida += "Intereses: $" + montoConInteres.toFixed(2) + "\n";
    salida += "IVA: $" + montoConInteresIVA.toFixed(2) + "\n";
    salida += "Cuota Total: $" + cuotaTotal.toFixed(2) + "\n";
    alert(salida);
}