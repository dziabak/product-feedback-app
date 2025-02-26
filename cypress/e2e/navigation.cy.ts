describe('navigation', () => {
    it('should open roadmap', () => {
        cy.visit('/');
        cy.contains('Roadmap').click(); // get data-cy
        cy.location('pathname').should('equal', '/roadmap');
        cy.contains('Back').click(); // get data-cy
        cy.location('pathname').should('equal', '/');
        cy.contains('Roadmap').click(); // get data-cy
        cy.go('back');
        cy.location('pathname').should('equal', '/');
    })

    it('should open feedback item page', () => {
        cy.visit('/');
        cy.contains('Add tags').click({ force: true }); // get data-cy + issue with items not being visible due to breakpoints
        cy.location('pathname').should('match', /\/feedback\/[a-zA-Z0-9]+$/); // can you be more specific with the dynamic id in the url?
        cy.contains('Back').click(); // get data-cy
        cy.location('pathname').should('equal', '/');
        cy.contains('Add tags').click({ force: true });
        cy.go('back');
        cy.location('pathname').should('equal', '/');
    })

    it('should open new feedback form', () => {
        cy.visit('/');
        cy.contains('Add Feedback').click(); // get data-cy
        cy.location('pathname').should('equal', '/new-feedback');
        cy.contains('Cancel').click(); // get data-cy
        cy.get('dialog').should('not.exist');
        cy.location('pathname').should('equal', '/');
        cy.contains('Add Feedback').click(); // get data-cy
        cy.get('dialog').click({ force: true }); // get data-cy
        cy.get('dialog').should('not.exist');
        cy.location('pathname').should('equal', '/');
        cy.contains('Add Feedback').click();
        cy.go('back');
        cy.location('pathname').should('equal', '/');
    })
})