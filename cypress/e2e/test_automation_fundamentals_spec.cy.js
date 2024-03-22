import cookie_notice from "../pages/cookie_notice";
import navbar_main from "../pages/navbar_main";
import search_results from "../pages/search_results";

describe('Verify an understanding of the fundamentals of test automation', () => {
    it('user can search for socks', () => {
        cy.visit('https://www.amazon.co.uk');
        cookie_notice.click_acceptButton();
        cy.get(navbar_main.elements.searchTextbox()).type('Socks');
        cy.get(navbar_main.elements.searchSubmitButton()).click();
        search_results.elements.firstSearchResult().click();

        cy.wait(20);
    })
});