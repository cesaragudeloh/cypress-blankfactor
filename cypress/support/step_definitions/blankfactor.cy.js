import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";

const HomePage = require("../pages/HomePage");


Given('the user visits the homepage', () => {
    cy.visit('/');
    HomePage.navigateToRetirementAndWealth()

});

When('he navigates through the site and copy the text from the card', () => {
    HomePage.goToCardAndCopyText()
    cy.get('@copiedCardText').then((message) => {
        cy.log(message)
    });
    cy.get('@copiedCardText').should('include', 'predictive data analytics');

    HomePage.goToLetsGetStartedButton()
});

Then('the site is loaded successfully', () => {
    HomePage.verifyContactPageLoaded()
})