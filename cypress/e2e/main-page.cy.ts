/// <reference types="Cypress" />

describe("Main page (feedback)", () => {
	it("should open the page", () => {
		cy.visit("/");
	});

	it("should display feedback items", () => {
		cy.visit("/");
		cy.get('[data-cy="feedback-tile"]').should("have.length", 6);
	});
});
