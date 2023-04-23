// LOGINEXAM
const users = {
    'alice': 'password123',
    'bob': 'secret321'
};


const form = document.querySelector('#logincalendar');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente 
    const username = document.getElementById('logcal').value;
    const password = document.getElementById('passcal').value;
    // Aquí es donde vamos a manejar la verificación de credenciales y redirigir al usuario

    if (username === 'user' && password === 'hola.123') {
        // Las credenciales son correctas, redirigir al usuario a la página principal
        location.href = 'calendarcitas.html';
    } else {
        // Las credenciales son incorrectas, limpiar el formulario y permitir un nuevo intento
        form.reset();
        alert('Usuario o contraseña incorrectos');
    }
});
