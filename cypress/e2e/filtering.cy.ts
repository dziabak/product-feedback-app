/// <reference types="Cypress" />

describe("filtering feedback", () => {
	it("should filter feedback by All", () => {
		cy.visit("/");
		cy.get('[data-cy="bug-filter-btn"').click();
		cy.get('[data-cy="all-filter-btn"').click();
		cy.get('[data-cy="feedback-tile"]').should("have.length", 6);
	});

	it("should filter feedback by a single category ('bug')", () => {
		cy.visit("/");
		cy.get('[data-cy="bug-filter-btn"').click();
		cy.contains('[data-cy="feedback-tile"]', /bug/i);
	});

	it("should filter feedback by two categories ('bug' & 'feature')", () => {
		cy.visit("/");
		cy.get('[data-cy="bug-filter-btn"').click();
		cy.get('[data-cy="feature-filter-btn"').click();
		cy.contains('[data-cy="feedback-tile"]', /bug/i);
		cy.contains('[data-cy="feedback-tile"]', /feature/i);
	});

	it("should display empty page if there are no filtered feedback items", () => {
		cy.visit("/");
		cy.get('[data-cy="ui-filter-btn"').click();
		cy.get('[data-cy="feedback-tile"]').should("have.length", 0);
		cy.get('[data-cy="no-feedback-element"]');
	});
});
