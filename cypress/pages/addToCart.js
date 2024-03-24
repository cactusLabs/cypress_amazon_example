class addToCart {
    elements = {
        addToBasketButton: () => "#add-to-cart-button",
    }

    click_addToBasketButton() {
        cy.get(this.elements.addToBasketButton(), { timeout: 10000 }).should('be.visible').click();
    }
}
module.exports = new addToCart();