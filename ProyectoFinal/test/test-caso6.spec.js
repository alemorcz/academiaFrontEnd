const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Agregar un producto y verificar que aparece en la lista', function () {
    this.timeout(30000); // Extiende el tiempo de espera máximo

    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://localhost:5500/admin.html'); // Cambia por la URL donde tienes tu admin.html
    });

    after(async function () {
        await driver.quit();
    });

    it('Debería agregar un producto y mostrarlo en la tabla', async function () {
        // Datos del producto de prueba
        const producto = {
            name: 'Producto Chido Grupo Frontera',
            code: 'JS123',
            description: 'Un kit super padre incluye de todo',
            price: '500',
            discount: '10',
            image: 'https://cooglife.com/wp-content/uploads/2024/08/GrupoFrontera-23.jpg'
        };

        // Llenar formulario
        await driver.findElement(By.id('productName')).sendKeys(producto.name);
        await driver.findElement(By.id('productCode')).sendKeys(producto.code);
        await driver.findElement(By.id('productDescription')).sendKeys(producto.description);
        await driver.findElement(By.id('productPrice')).sendKeys(producto.price);
        await driver.findElement(By.id('productDiscount')).sendKeys(producto.discount);
        await driver.findElement(By.id('productImage')).sendKeys(producto.image);

        // Enviar formulario
        await driver.findElement(By.css('button[type="submit"]')).click();

        // Esperar a que el producto aparezca en la tabla
        const table = await driver.wait(until.elementLocated(By.id('productTable')), 5000);

        // Verificar que el producto está en la tabla
        const tableText = await table.getText();
        expect(tableText).to.include(producto.name);
        expect(tableText).to.include(producto.code);
        expect(tableText).to.include(producto.description);
        expect(tableText).to.include(`$${producto.price}`); // Verifica precio sin descuento
    });
});
