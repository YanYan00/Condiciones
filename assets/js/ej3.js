const boton = document.querySelector("#enviar");
boton.addEventListener('click', function() {
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
    const pass3 = document.getElementById("pass3").value;
    const password = pass1 + pass2 + pass3;

    const mensaje = document.getElementById("mensaje");

    if (password === '911') {
        mensaje.innerHTML = 'Password 1 correcto';
    } else if (password === '714') {
        mensaje.innerHTML = 'Password 2 correcto';
    } else {
        mensaje.innerHTML = 'Password incorrecto';
    }
});