/// <reference types="Cypress" />

describe("feedback form", () => {
	it("should open new feedback form", () => {
		cy.visit("/");
		cy.get('[data-cy="add-feedback-btn"]').click();
		cy.location("pathname").should("equal", "/new-feedback");
		cy.get('[data-cy="form-cancel-btn"]').click();
		cy.get('[data-cy="form-dialog"]').should("not.exist");
		cy.location("pathname").should("equal", "/");
		cy.get('[data-cy="add-feedback-btn"]').click();
		cy.get('[data-cy="form-dialog"]').click({ force: true });
		cy.get('[data-cy="form-dialog"]').should("not.exist");
		cy.location("pathname").should("equal", "/");
		cy.get('[data-cy="add-feedback-btn"]').click();
		cy.go("back");
		cy.location("pathname").should("equal", "/");
	});

	it("should validate feedback form", () => {
		cy.visit("/");
		cy.get('[data-cy="add-feedback-btn"]').click();
		cy.get('[data-cy="form-send-btn"]').click();
		cy.get('[data-cy="feedback-form-error-title"').should("exist");
		cy.get('[data-cy="feedback-form-error-description"').should("exist");
		cy.get('[data-cy="feedback-form-title-input"]').click().type("Test title");
		cy.get('[data-cy="feedback-form-error-title"').should("not.exist");
		cy.get('[data-cy="feedback-form-description-input"]')
			.click()
			.type("Test description");
		cy.get('[data-cy="feedback-form-error-description"').should("not.exist");
	});

	it("should add new feedback", () => {
		cy.intercept(
			"PUT",
			"https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests/*",
			{ title: "Test title", description: "Test description", category: "Bug" }
		).as("submitNewFeedback");
		cy.visit("/");
		cy.get('[data-cy="add-feedback-btn"]').click();
		cy.get('[data-cy="feedback-form-title-input"]').type("Test title");
		cy.get('[data-cy="feedback-form-description-input"]').type(
			"Test description"
		);
		cy.get('[data-cy="feedback-form-category-list"]').click();
		cy.get('[data-cy="feedback-form-category-bug"]').click();
		cy.get('[data-cy="form-send-btn"]').click();
		cy.wait("@submitNewFeedback");
		cy.location("pathname").should("equal", "/");
	});

	// it("should add, edit (change feedback status) and delete feedback (backend)", () => {
	// 	cy.visit("/");
	// 	cy.get('[data-cy="add-feedback-btn"]').click();
	// 	cy.get('[data-cy="feedback-form-title-input"]').type("Test title");
	// 	cy.get('[data-cy="feedback-form-description-input"]').type(
	// 		"Test description"
	// 	);
	// 	cy.get('[data-cy="form-send-btn"]').click();
	// 	cy.get('[data-cy="feedback-tile"]').should("have.length", 7);
	// 	cy.contains("Test title").click();
	// 	cy.get('[data-cy="edit-feedback-btn"]').click();
	// 	cy.get('[data-cy="feedback-form-status-list"]').click();
	// 	cy.get('[data-cy="feedback-form-status-live"]').click();
	// 	cy.get('[data-cy="edit-action-btn"]').click();
	// 	cy.get('[data-cy="feedback-status-live"]').should("exist");
	// 	cy.get('[data-cy="edit-feedback-btn"]').click();
	// 	cy.get('[data-cy="delete-feedback-btn"]').click();
	// 	cy.get('[data-cy="delete-action-btn"]').click();
	// 	cy.get('[data-cy="feedback-tile"]').should("have.length", 6);
	// });
});
