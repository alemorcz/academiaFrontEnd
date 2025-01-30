const assert = require("assert");
const { Builder, Browser, By } = require("selenium-webdriver");

describe("Eliminar productos del carrito", () =>{
    let driver = new Builder().forBrowser(Browser.CHROME).build();
    

    it("Eliminar un producto del carrito de compras", async () => {
        await driver.get("http://127.0.0.1:3000/ProyectoFinal/pages/HTML/admin.html")
        //await shoppingCart.wait(until.elementLocated(By.id('list-products')), 10000); 

        shoppingCart.get("http://127.0.0.1:3000/ProyectoFinal/pages/HTML/tienda.html");
        const addCartButton = await driver.findElement(By.id('boton-addCart'));

        await addCartButton.click();
        const cartItemCount = await driver.findElement(By.id('contador-items'));
        const itemCount = await cartItemCount.getText();
        assert.equal(itemCount, '1');

        const eliminarButton = await driver.findElement(By.id('botonEliminar'));
        await eliminarButton.click();

        await driver.wait(until.stalenessOf(eliminarButton), 10000);

        try {
            await driver.findElement(By.id('carrito'));
            assert.fail('El carrito está vacío.');
        } catch (error) {
            console.log('');
        }

    });

});