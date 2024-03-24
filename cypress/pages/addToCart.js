class addToCart {
    elements = {
        addToBasketButton: () => cy.get("#add-to-cart-button", { timeout: 10000 }),
    }
}
module.exports = new addToCart();