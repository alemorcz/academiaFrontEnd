document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        
        // Limpiar mensajes previos
        document.querySelectorAll(".error-message").forEach(msg => msg.remove());

        // Validar los campos de entrada
        const inputs = form.querySelectorAll("input[required], textarea");
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                mostrarError(input, "Este campo es obligatorio");
            }
        });

        // Validar checkbox
        const checkbox = form.querySelector("input[type='checkbox']");
        if (checkbox && !checkbox.checked) {
            isValid = false;
            mostrarError(checkbox, "Debes aceptar los términos y condiciones");
        }

        if (!isValid) {
            event.preventDefault(); // Evitar el envío del formulario si hay errores
        } else {
            event.preventDefault(); // Evitar el envío real para mostrar la alerta
            alert("Recibimos tu mensaje, pronto te contactaremos!");
            form.reset(); // Limpiar el formulario después de enviar correctamente
        }
    });

    function mostrarError(elemento, mensaje) {
        if (!elemento.nextElementSibling || !elemento.nextElementSibling.classList.contains("error-message")) {
            const error = document.createElement("p");
            error.className = "error-message";
            error.textContent = mensaje;
            error.style.color = "red";
            error.style.fontSize = "0.8em";
            error.style.marginTop = "5px";
            
            elemento.insertAdjacentElement("afterend", error);
        }
    }
});
