const { Builder, Browser, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Validación de campos obligatorios', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
  });

  after(async () => {
    await driver.quit();
  });

  it('Debe mostrar mensajes de error al dejar campos vacíos', async () => {
    await driver.get('http://127.0.0.1:3000/ProyectoFinal/pages/HTML/contacto.html'); 

    const nombreInput = await driver.findElement(By.id('nombre'));
    const correoInput = await driver.findElement(By.id('email'));
    const mensajeInput = await driver.findElement(By.id('mensaje'));
    const checkbox = await driver.findElement(By.id('terminos'));
    const botonEnviar = await driver.findElement(By.id('enviar-contacto'));

    await botonEnviar.click();

    await driver.sleep(1000); 

    const mensajeErrorNombre = await driver.findElement(By.(''));
    const mensajeErrorCorreo = await driver.findElement(By.(''));
    const mensajeErrorMensaje = await driver.findElement(By.(''));

    assert.ok(mensajeErrorNombre.isDisplayed(), 'Completa este campo');
    assert.ok(mensajeErrorCorreo.isDisplayed(), 'Completa este campo');
    assert.ok(mensajeErrorMensaje.isDisplayed(), 'Completa este campo');


  });
});