class sc_active_cart {
    elements = {
        activeItemsProduct: () => cy.get('div[data-name="Active Items"] > * a.sc-product-link'),
        shoppingBasketText: () => cy.get('#sc-active-cart > * h1'),
    }
}
module.exports = new sc_active_cart();