const nombre = document.getElementById("name");
const email = document.getElementById("email");
const textarea = document.getElementById("textarea");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e => { //cuando se envie el fomr, quiero que emita algo 
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if (nombre.value.length < 3) {
        warnings += `El nombre no es válido <br>`
        entrar = true
        nombre.placeholder = '¡Debe ingresar un nombre!';
        nombre.style.backgroundColor = "#F7F7AC";
    } else {
        nombre.style.backgroundColor = "#FFFFFF";
        nombre.placeholder = 'Escribe tu nombre';
    }
    if (!regexEmail.test(email.value)) {
        warnings += `El correo no es válido <br>`
        entrar = true
        email.placeholder = '¡Aquí debe ingresar un correo!';
        email.style.backgroundColor = "#F7F7AC";
    } else {
        email.style.backgroundColor = "#FFFFFF";
        email.placeholder = 'Ingresa tu correo';
    }
    if (textarea.value.length < 5 || textarea.value.length > 256) {
        warnings += `El texto no esta bien<br>`
        entrar = true
        textarea.placeholder = 'Cuéntame...';
        textarea.style.backgroundColor = "#F7F7AC";
    } else {
        textarea.style.backgroundColor = "#FFFFFF";
    }
    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "¡Enviado con éxito¡"

        form.reset();
    }
})

/*function validar() {
    var nombre = documenmt.datos.nombre;
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(correo);


    if (nombre.value.length < 5) {
        document.getElementById("error_nombre").style.display = 'inline';
        return false;
    } else {
        document.getElementById("error_nombre").style.display = 'none';
    }
    if (esValido==true) {
        alert
        
    }

}*/