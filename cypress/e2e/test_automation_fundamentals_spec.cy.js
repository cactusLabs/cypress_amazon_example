import cookie_notice from "../pages/cookie_notice";
import navbar_main from "../pages/navbar_main";
import search_results from "../pages/search_results";
import selected_socks from "../pages/selected_socks"

describe('Verify an understanding of the fundamentals of test automation', () => {
    it('verifies that the user can add socks to the shopping cart', () => {
        cy.visit('https://www.amazon.co.uk');
        cookie_notice.click_acceptButton();
        cy.get(navbar_main.elements.navCartCount()).should('have.text', '0');
        cy.get(navbar_main.elements.searchTextbox()).type('Socks');
        cy.get(navbar_main.elements.searchSubmitButton()).click();
        search_results.elements.firstSearchResult().click();
        selected_socks.click_addToBasketButton();

        // Assertions
        cy.get(navbar_main.elements.navCartCount()).should('have.text', '1');

        // 'Added to Basket' exists

        // 'Proceed to Checkout (1 item)' exists

        // 'id="nav-flyout-ewc"' flyout exists and contains 'Socks'

        // Navigate to basket and confirm it contains socks
    })
});