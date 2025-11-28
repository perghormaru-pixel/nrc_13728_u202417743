document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const CLAVE_SECRETA = "ok";
    const passwordInput = document.getElementById("password").value;

    if (passwordInput.toLowerCase() === CLAVE_SECRETA) {
        alert("¡Acceso concedido! Bienvenido.");
        // Redirige a la landing page
        window.location.href = "Landing_Page_Huaco.html";
    } else {
        alert("Clave incorrecta. Inténtalo de nuevo.");
        document.getElementById("password").value = "";
    }

    return false;
});
