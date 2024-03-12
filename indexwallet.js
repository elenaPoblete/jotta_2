document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "jotta89" && password === "jottawallet89") {
        alert("Inicio de sesión exitoso. Bienvenido!");
        window.location.href = "menu.html"; // Redirecciona a sitio principal llamado menú
        // Guardar el nombre de usuario en una variable
    // Después de verificar el inicio de sesión
var username = "jotta89"; // Aquí reemplaza "nombreDeUsuario" con el nombre de usuario obtenido del formulario de inicio de sesión
localStorage.setItem("username", username);
    } else {
        alert("Nombre de usuario y/o contraseña incorrectos. Intente nuevamente");
    }
});