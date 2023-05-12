// ENTRADA DE DATOS > PROCESAMIENTO DE DATOS > SALIDA (O INFORMACIÓN)
const IVA = 21;
let TNA;
let tasa;

//Etapa 1 - Entrada de Datos
// Solicito el Monto
let monto = solicitarMonto();
// Solicitar el Plazo
let plazo = solicitarPlazo();
// Calculo la Tasa de Interés según el Plazo en Cuotas
tasa = calcularTasa(plazo);
// Solicito el Tipo de Cliente
let tipoCliente = solicitarTipoCliente();
// Valido el Tipo de Cliente
TNA = obtenerTNA(tipoCliente);

// Realizamos los Cálculos
let montoConInteres = calculoDeInteres(monto, TNA, plazo);
let montoConInteresIVA = calcularMontoInteresConIVA(montoConInteres);
let montoConCapital = calcularMontoCapital(montoConInteres);
let cuotaPura = calcularCuotaPura(montoConInteres, montoConCapital);
let cuotaTotal = calcularCuotaTotal(cuotaPura, montoConInteresIVA);

// Salida
informarPrestamoSolicitado(monto, plazo, tipoCliente, cuotaPura, montoConCapital, montoConInteres, montoConInteresIVA, cuotaTotal);
mostrarLogPrestamoSolicitado(monto, plazo, tipoCliente, cuotaPura, montoConCapital, montoConInteres, montoConInteresIVA, cuotaTotal);