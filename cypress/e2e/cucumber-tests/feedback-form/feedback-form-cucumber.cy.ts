/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the feedback form is opened", () => {
	cy.visit("/");
	cy.get('[data-cy="add-feedback-btn"]').click();
});

When("user does not type anything in the form and submits it", () => {
	cy.get('[data-cy="form-send-btn"]').click();
});

Then("feedback form displays error message", () => {
	cy.get('[data-cy="feedback-form-error-title"').should("exist");
	cy.get('[data-cy="feedback-form-error-description"').should("exist");
});

When("user enters valid data", () => {
	cy.get('[data-cy="feedback-form-title-input"]').click().type("Test title");
	cy.get('[data-cy="feedback-form-description-input"]')
		.click()
		.type("Test description");
});

Then("errors are cleared", () => {
	cy.get('[data-cy="feedback-form-error-title"').should("not.exist");
	cy.get('[data-cy="feedback-form-error-description"').should("not.exist");
});
