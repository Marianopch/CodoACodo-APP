const contacto = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {

    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    mensaje: /^[a-zA-ZÀ-ÿ0-9\s]{1,200}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    nombre: false,
    telefono: false,
    correo: false,
    mensaje: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre')
            break;

        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono')
            break;

        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo')
            break;
        case "mensaje":
            validarCampo(expresiones.mensaje, e.target, 'mensaje')
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo_${campo}`).classList.remove("contacto-grupo-incorrecto")
        document.getElementById(`grupo_${campo}`).classList.add("contacto-grupo-correcto")
        document.querySelector(`#grupo_${campo} .contacto-inputError`).classList.remove('contacto-inputError-activo');
        campos[campo] = true;
;
    } else {
        document.getElementById(`grupo_${campo}`).classList.add("contacto-grupo-incorrecto")
        document.getElementById(`grupo_${campo}`).classList.remove("contacto-grupo-correcto")
        document.querySelector(`#grupo_${campo} .contacto-inputError`).classList.add('contacto-inputError-activo')
        campos[campo] = false;

    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)

});

contacto.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.nombre && campos.telefono && campos.correo && campos.mensaje){
        form.reset();

        document.getElementById('contacto-mensaje').classList.remove('contacto-mensaje-activo')
        document.getElementById('contacto-mensajeExito').classList.add('contacto-mensajeExito-activo')
        setTimeout(() => {
            document.getElementById('contacto-mensajeExito').classList.remove('contacto-mensajeExito-activo')

        }, 5000);
        campos['nombre','telefono','correo','mensaje'] = false;
    } else {
        document.getElementById('contacto-mensaje').classList.add('contacto-mensaje-activo')
    }
});