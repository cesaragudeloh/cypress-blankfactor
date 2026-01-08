class HomePage {

    elements = {
        industriesOption: () => cy.contains('ul#menu-main-menu li a', 'Industries'),
        retirementAndWealthOption: () => cy.contains('a.industry-item', 'Retirement and wealth'),
        poweringInnovationSection: () => cy.contains('h2', 'Powering innovation in retirement services'),
        AIAndMLCard: () => cy.contains('.card-wrapper', 'AI & Machine learning'),
        titleSection: '.card-text.small',
        letsGetStartedButton: () => cy.contains("a", "Let's get started"),
    }

    navigateToRetirementAndWealth() {
        this.elements.industriesOption().realHover();
        this.elements.retirementAndWealthOption().should('be.visible').click();
        this.elements.poweringInnovationSection()
            .scrollIntoView()
            .should('be.visible');
    }

    goToCardAndCopyText() {
        this.elements.AIAndMLCard()
            .scrollIntoView()
            .should('be.visible')
            .realHover()
            .find(this.elements.titleSection)
            .invoke('text')
            .as('copiedCardText');
    }

    goToLetsGetStartedButton() {
        this.elements.letsGetStartedButton()
            .scrollIntoView()
            .should('be.visible')
            .click();
    }

    verifyContactPageLoaded() {
        cy.url().should('include', '/contact');
        cy.title().then((pageTitle) => {
            cy.log('Page title:', pageTitle);
            console.log('Page title:', pageTitle);
        });
    }

}

module.exports = new HomePage();