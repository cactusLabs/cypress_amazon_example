class cookie_notice {

    elements = {
        acceptButton: () => "#a-autoid-0.a-button.a-button-primary",
    }

    click_acceptButton() {
        try {
            cy.get(this.elements.acceptButton(), { timeout: 10000 }).should('be.visible').click();
        }
        catch {
            console.log(`Cookie footer accept button node found.`);
        }
    }
}

module.exports = new cookie_notice();