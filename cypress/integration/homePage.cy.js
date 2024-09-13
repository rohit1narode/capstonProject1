describe('MY SHOP-Home page', () => {

  it('Home page Navigation', () => {

    cy.visit('https://www.demoblaze.com/');

    cy.url().should('eq', 'https://www.demoblaze.com/');
    cy.title().should('include', 'STORE');

    cy.get('.list-group').should('be.visible');

    cy.contains('Phones').should('be.visible');
    cy.contains('Laptops').should('be.visible');
    cy.contains('Monitors').should('be.visible');  

    cy.xpath("//div[@id='tbodyid']/div").should('have.length', 9);
    cy.xpath("//div[@id='tbodyid']/div").first().should('be.visible');
    cy.xpath("//div[@id='tbodyid']/div").eq(5).should('be.visible');
    cy.xpath("//div[@id='tbodyid']/div").last().should('be.visible');
  });
});

