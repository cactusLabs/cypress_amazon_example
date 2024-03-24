class sc_active_cart {
    elements = {
        activeItems: () => cy.get('div[data-name="Active Items"]'),
        shoppingBasketText: () => cy.get('#sc-active-cart > * h1'),
    }
}
module.exports = new sc_active_cart();