class selected_socks {

    elements = {
        addToBasketButton: () => "#add-to-cart-button",
    }

    click_addToBasketButton() {
        cy.get(this.elements.addToBasketButton(), { timeout: 10000 }).should('be.visible').click();
    }
}

module.exports = new selected_socks();