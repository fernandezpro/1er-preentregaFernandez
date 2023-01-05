
let nombre = prompt("¿Cómo te llamas?");
let alertBienvenida = `¡Hola ${nombre} Le damos la bienvenida a estudios contables Alejandro Fernandez`;
alert(alertBienvenida);


let categoriaTributo= prompt("Ingrese su categoría\n1- monotributista\n2- responsable inscripto\n3- sujeto exento");

if (categoriaTributo=== "1") {
    alert("Es Monotributista");
}
else if (categoriaTributo=== "2") {
    alert("Es Responsable inscripto");
}
else if (categoriaTributo=== "3") {
    alert("Es Sujeto exento");
}
else {
    alert("Opcion invalida");
}


for (let turno = 1; turno <= 5; turno++) {
    let solicitarTurno = prompt("¿desea pedir un turno? 'si', de lo contrario 'no'");
    while (solicitarTurno != "no") {
        let nombre = prompt("para reserva de turnos. Ingrese su nombre");
        let exito = `${nombre}, felicitaciones, tiene el turno #${turno}`
        alert(exito);
        break;
    }
    break;
}


let categoriaMon = prompt("¿Cuál es su condicion fiscal?\n1- monotributista\n2- responsable inscripto\n3- sujeto exento?");

switch (categoriaMon) {
    case "1":
        alert("Es monotributista");
        break;

    case "2":
        alert("Es responsable iscripto");
        break;

    case "3":
        alert("Es sujeto exento");
        break;

    default:
        alert("Opcion invalida");
        break;
}


function NombreYCategoria() {
    let nombre = prompt("Ingrese su nombre");
    let categoriaMon = prompt("Ingrese su categoria");
    let alert = `¡Bienvendo ${nombre} a nuestro estudio contable Alejandro Fernandez! La condición fiscal es: ${categoriaMon}`;
    alert(alert);
}

