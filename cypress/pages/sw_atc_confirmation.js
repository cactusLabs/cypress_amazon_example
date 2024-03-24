class sw_atc_confirmation {
    elements = {
        addedToBasketText: () => cy.get('h1.sw-atc-text'),
        proceedToCheckoutCount: () => cy.get('input[name="proceedToCheckout"]'),
    }
}
module.exports = new sw_atc_confirmation();