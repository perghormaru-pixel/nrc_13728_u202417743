// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón de hamburguesa
    const btnHamburguesa = document.querySelector(".menu-toggle");
    
    // Selecciona el menú horizontal
    const menuHorizontal = document.querySelector(".menu-horizontal");
    
    // Verificar que los elementos existen
    if (btnHamburguesa && menuHorizontal) {
        // Al hacer clic en el botón de hamburguesa
        btnHamburguesa.addEventListener("click", (e) => {
            e.stopPropagation(); // Evitar que el clic se propague
            menuHorizontal.classList.toggle("active");
            
            // Cambiar el ícono
            if (menuHorizontal.classList.contains("active")) {
                btnHamburguesa.innerHTML = "✕"; // Ícono de "X" cuando está abierto
            } else {
                btnHamburguesa.innerHTML = "&#9776;"; // Ícono de hamburguesa cuando está cerrado
                // Cerrar todos los submenús al cerrar el menú principal
                cerrarTodosLosSubmenus();
            }
        });
        
        // Manejar clics en los botones del menú para abrir/cerrar submenús
        const botonesMenu = document.querySelectorAll('.btn-menu');
        botonesMenu.forEach(boton => {
            boton.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) { // Solo en móviles
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const submenu = this.nextElementSibling;
                    const estaActivo = submenu.classList.contains('active');
                    
                    // Cerrar todos los submenús primero
                    cerrarTodosLosSubmenus();
                    
                    // Abrir el submenú actual si no estaba activo
                    if (!estaActivo) {
                        this.classList.add('active');
                        submenu.classList.add('active');
                    }
                }
            });
        });
        
        // Cerrar menú al hacer clic fuera de él
        document.addEventListener('click', function(e) {
            if (!menuHorizontal.contains(e.target) && !btnHamburguesa.contains(e.target)) {
                menuHorizontal.classList.remove('active');
                btnHamburguesa.innerHTML = "&#9776;";
                cerrarTodosLosSubmenus();
            }
        });
        
        // Función para cerrar todos los submenús
        function cerrarTodosLosSubmenus() {
            document.querySelectorAll('.opciones-menu.active').forEach(submenu => {
                submenu.classList.remove('active');
            });
            document.querySelectorAll('.btn-menu.active').forEach(boton => {
                boton.classList.remove('active');
            });
        }
        
        // Cerrar menú al redimensionar la ventana a desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                menuHorizontal.classList.remove('active');
                btnHamburguesa.innerHTML = "&#9776;";
                cerrarTodosLosSubmenus();
            }
        });
    }
});
