describe('sorting feedback', () => {
    it('should display unsorted feedback list', () => { });
    it('should sort feedback by most comments', () => {
        cy.visit('/');
        cy.get('form').click(); // data-cy
        cy.contains('most comments').click();
    })
})