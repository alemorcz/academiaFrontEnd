const assert = require("assert");
const { Builder, Browser, By } = require("selenium-webdriver");

describe("Agregar productos al carrito de compras", () =>{
    let shoppingCart = new Builder().forBrowser(Browser.CHROME).build();
    shoppingCart.get("http://127.0.0.1:3000/ProyectoFinal/pages/HTML/tienda.html");

    it("Agregar un producto al carrito de compras", async () => {
        const addCartButton = await shoppingCart.findElement(By.id('boton-addCart'));
        await addCartButton.click();

        await shoppingCart.sleep(3000);

        const cartItemCount = await shoppingCart.findElement(By.id('contador-items'));
        const itemCount = await cartItemCount.getText();
        assert.equal(itemCount, '1', 'Debería haber 1 item en el carrito');
    });
});