/// <reference types="Cypress" />

describe("navigation", () => {
	it("should open roadmap", () => {
		cy.visit("/");
		cy.get('[data-cy="roadmap-link"]').click();
		cy.location("pathname").should("equal", "/roadmap");
		cy.get('[data-cy="roadmap-back-btn"]').click();
		cy.location("pathname").should("equal", "/");
		cy.get('[data-cy="roadmap-link"]').click();
		cy.go("back");
		cy.location("pathname").should("equal", "/");
	});

	it("should open feedback item page", () => {
		cy.visit("/");
		cy.get('[data-cy="feedback-tile"]').first().click();
		cy.location("pathname").should("match", /\/feedback\/[a-zA-Z0-9]+$/); // can you be more specific with the dynamic id in the url?
		cy.get('[data-cy="feedback-detail-back-btn"]').click();
		cy.location("pathname").should("equal", "/");
		cy.get('[data-cy="feedback-tile"]').first().click();
		cy.go("back");
		cy.location("pathname").should("equal", "/");
	});
});
