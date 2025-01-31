const { Builder, By, until } = require("selenium-webdriver");

(async function testFormulario() {
    // Inicializar WebDriver (usando Chrome)
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Abrir la página del formulario (cambia la URL por la correcta)
        await driver.get("http://localhost:5500/pages/contacto.html");

        // Llenar los campos con datos válidos
        await driver.findElement(By.id("nombre")).sendKeys("Alejandra Moreno");
        await driver.findElement(By.id("email")).sendKeys("ale.moreno@gmail.com");
        await driver.findElement(By.css("textarea")).sendKeys("Hola, quiero más información!");

        // Marcar el checkbox de términos y condiciones
        await driver.findElement(By.css("input[type='checkbox']")).click();

        // Hacer clic en el botón de enviar
        await driver.findElement(By.css("button[type='submit']")).click();

        // Esperar a que aparezca la alerta con el mensaje esperado
        await driver.wait(until.alertIsPresent(), 5000);
        let alerta = await driver.switchTo().alert();
        let mensajeAlerta = await alerta.getText();

        // Verificar que el mensaje sea el correcto
        if (mensajeAlerta === "Recibimos tu mensaje, pronto te contactaremos!") {
            console.log("✅ Test exitoso: La alerta tiene el mensaje esperado.");
        } else {
            console.log("❌ Test fallido: El mensaje en la alerta es incorrecto.");
        }

        // Cerrar la alerta
        await alerta.accept();

    } catch (error) {
        console.error("❌ Error en la prueba:", error);
    } finally {
        // Cerrar el navegador
        await driver.quit();
    }
})();
