/// <reference types="Cypress" />

describe("Main page (feedback)", () => {
	it("should open the page", () => {
		cy.visit("/");
	});

	it("should display feedback items", () => {
		cy.visit("/");
		cy.get('[data-cy="feedback-tile"]').should("have.length", 6);
	});

	it("should display empty page if there are no feedback items", () => {
		cy.visit("/");
		cy.get('[data-cy="ui-filter-btn"').click();
		cy.get('[data-cy="feedback-tile"]').should("have.length", 0);
		cy.get('[data-cy="no-feedback-element"]');
	});
});
