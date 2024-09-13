describe('MY SHOP-product search', () => {

    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
    });

    it('Product Search-mobile', () => {

        cy.get('.list-group-item').contains('Phones').click(); 

        cy.contains('Samsung galaxy s6').should('be.visible');
    });

    
    it('Product Search-laptop', () => {

        cy.get('.list-group-item').contains('Laptops').click();

        cy.contains('Sony vaio i5').should('be.visible');
    });

    
    it('Product Search-monitor', () => {

        cy.get('.list-group-item').contains('Monitors').click();

        cy.contains('ASUS Full HD').should('be.visible');
    });
});