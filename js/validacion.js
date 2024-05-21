function validarCampos() {
    let nombre = document.querySelector('#nombre').value;
    let telefono = document.querySelector('#telefono').value;
    let email = document.querySelector('#email').value;

    // expresión regular

    let soloPalabras = /^[a-z\s]+$/i;
    let pruebaEmail = /^[a-zA-Z\d\._-]*@[a-zA-Z\d_-]*\.[a-zA-Z]{3}(\.[a-zA-Z]{2})*$/;


    let datosValidos = true; 
    let msjError = 'Alguno de los datos no son validos: ';
    if (nombre === '' || !soloPalabras.test(nombre)) {
        datosValidos = false;
        msjError += ' Debe ingresar un nombre';
    }

    if (telefono === '' || !Number.isInteger(Number(telefono))) {
        datosValidos = false;
        msjError += ' Debe ingresar un numero de telefono';
    }

    if (email === '') {
        datosValidos = false;
        msjError += ' Debe ingresar un correo electronico';
    }

    let mensaje = document.querySelector('#rtaValidacion');
    if (datosValidos) {
        mensaje.innerHTML = 'Los datos se ingresaron correctamente, gracias por su contacto'
    } else {
        mensaje.innerHTML = msjError
    }
}


const formulario = document.querySelector('#formContacto');
formulario.addEventListener('submit', evento => {
    validarCampos();
    evento.preventDefault();
});
