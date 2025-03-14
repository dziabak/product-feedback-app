/// <reference types="Cypress" />

describe("sorting feedback", () => {
	it("should display unsorted feedback list", () => {});
	it("should sort feedback by most comments", () => {
		cy.visit("/");
		cy.get('[data-cy="sorting-form"]').click();
		cy.contains("most upvotes").click();

		cy.get('[data-cy="feedback-upvotes-count"]');
	});
});
