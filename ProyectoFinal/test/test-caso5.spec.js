const { Builder, By, until } = require("selenium-webdriver");

(async function testCheckboxRequerido() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Abrir la página del formulario (ajusta la URL)
        await driver.get("http://localhost:5500/pages/contacto.html");

        // Llenar los campos con datos válidos
        await driver.findElement(By.id("nombre")).sendKeys("Alejandra Moreno");
        await driver.findElement(By.id("email")).sendKeys("ale.moreno@gmail.com");
        await driver.findElement(By.css("textarea")).sendKeys("Hola, quiero más información!");

        // *NO* marcar el checkbox

        // Hacer clic en el botón de enviar
        await driver.findElement(By.css("button[type='submit']")).click();

        // Esperar a que aparezca el mensaje de error
        let mensajeError = await driver.wait(
            until.elementLocated(By.xpath("//*[contains(text(),'Debes aceptar los términos y condiciones')]")),
            5000
        );

        // Verificar si el mensaje es visible
        let visible = await mensajeError.isDisplayed();
        if (visible) {
            console.log("✅ Test exitoso: Se mostró el mensaje de error correctamente.");
        } else {
            console.log("❌ Test fallido: No se encontró el mensaje de error.");
        }

    } catch (error) {
        console.error("❌ Error en la prueba:", error);
    } finally {
        // Cerrar el navegador
        await driver.quit();
    }
})();
