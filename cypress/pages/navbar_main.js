class navbar_main {
    elements = {
        navCart: () => cy.get('#nav-cart'),
        navCartCount: () => cy.get("#nav-cart-count"),
        searchTextbox: () => cy.get("#twotabsearchtextbox"),
        searchSubmitButton: () => cy.get("#nav-search-submit-button"),
    }
}
module.exports = new navbar_main();