describe('MY SHOP-product details', () => {

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('product details for Samsung Galaxy S6', () => {

    cy.get('#itemc').contains('Phone').click();
    
    cy.contains('Samsung galaxy s6').click();
    cy.wait(5000);
    cy.get('h2.name').should('have.text', 'Samsung galaxy s6');
    cy.get('.price-container').should('contain', '$360');

    // Validate the product description using XPath
    cy.xpath('//div[@id="more-information"]//p')
    .should('contain.text', 'The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded.');
  });

//   it('product details for Sony vaio i5', () => {

//     cy.get('#itemc').contains('').click();
    
//     cy.contains('Samsung galaxy s6').click();
//     cy.wait(5000);
//     cy.get('h2.name').should('have.text', 'Samsung galaxy s6');
//     cy.get('.price-container').should('contain', '$360');

//     // Validate the product description using XPath
//     cy.xpath('//div[@id="more-information"]//p')
//     .should('contain.text', 'The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded.');
//   });
});