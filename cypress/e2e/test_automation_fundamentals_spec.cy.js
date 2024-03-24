import addToCart from "../pages/addToCart";
import cookie_notice from "../pages/cookie_notice";
import navbar_main from "../pages/navbar_main";
import search_results from "../pages/search_results";
import sc_active_cart from "../pages/sc_active_cart";
import sw_atc_confirmation from "../pages/sw_atc_confirmation";

describe('Verify an understanding of the fundamentals of test automation', () => {
    it('verifies that the user can add socks to the shopping cart', () => {
        cy.visit('https://www.amazon.co.uk');
        cookie_notice.click_acceptButton(); // flaky!!
        navbar_main.elements.navCartCount().should('have.text', '0');
        navbar_main.elements.searchTextbox().type('Socks');
        navbar_main.elements.searchSubmitButton().click();
        search_results.elements.firstSearchResult().click();
        addToCart.click_addToBasketButton(); 

        // Assertions
        navbar_main.elements.navCartCount().should('have.text', '1');
        sw_atc_confirmation.elements.addedToBasketText().should('include.text', 'Added to Basket');
        sw_atc_confirmation.elements.proceedToCheckoutCount().should('have.value', '1');
        navbar_main.elements.navCart().should('have.attr', 'aria-label', '1 item in shopping basket'); 

        // Navigate to basket and confirm it contains socks
        navbar_main.elements.navCart().click();

        // Assert that id='sc-active-cart' contains h1 'Shopping Basket'
        sc_active_cart.elements.shoppingBasketText().should('include.text', 'Shopping Basket');

        // Assert that cart contains 'socks'
        sc_active_cart.elements.activeItems().should('exist');
    })
});