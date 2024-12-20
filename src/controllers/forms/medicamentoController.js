import { guardarMedicamento } from "../../services/medicamentoService.js"

let nombreMedicamento = document.getElementById("nombreMedicamento")
let presentacionMedicamento = document.getElementById("presentacionMedicamento")
let dosisMedicamento = document.getElementById("dosisMedicamento")
let laboratorioMedicamento = document.getElementById("laboratorioMedicamento")
let fechaCaducidadMedicamento = document.getElementById("fechaCaducidadMedicamento")
let contraIndicacionesMedicamento = document.getElementById("contraindicacionesMedicamento")
let registroMedicamento = document.getElementById("registroMedicamento")
let tieneCopago = document.getElementById("tieneCopago")

let botonRegistroMedicamento = document.getElementById("botonRegistroMedicamento")

botonRegistroMedicamento.addEventListener("click", function (evento) {
    evento.preventDefault()

    let datosFormularioMedicamento = {
        nombre: nombreMedicamento.value,
        presentacion: presentacionMedicamento.value,
        dosis: dosisMedicamento.value,
        laboratorio: laboratorioMedicamento.value,
        fechaCaducidad: fechaCaducidadMedicamento.value,
        contraIndicaciones: contraIndicacionesMedicamento.value,
        registroInvima: registroMedicamento.value,
        copago: tieneCopago.checked
    }

    console.dir(datosFormularioMedicamento);
    console.error(validarDatos())
    if (validarDatos()) {
        guardarMedicamento(datosFormularioMedicamento)
            .then((respuesta) => {
                console.log(respuesta);
                Swal.fire({
                    title: "Registro exitoso",
                    text: "Se ha ingresado un medicamento",
                    icon: "success",
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
})

function validarDatos() {
    if (nombreMedicamento.value != "" && dosisMedicamento.value != "") {
        return true
    } else {
        Swal.fire({
            title: "Necesitas ingresar datos",
            text: "Ingresa correctamente los campos",
            icon: "error",
        });
        return false
    }
}

fechaCaducidadMedicamento.type = "text";
fechaCaducidadMedicamento.addEventListener("focus", ()=>{
    fechaCaducidadMedicamento.type = "date";
  });
  fechaCaducidadMedicamento.addEventListener("blur", ()=>{
    if (fechaCaducidadMedicamento.value == "") {
        fechaCaducidadMedicamento.type = "text";    
    }
  });