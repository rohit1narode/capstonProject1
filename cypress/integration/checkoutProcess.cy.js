describe('Checkout Process on DemoBlaze', () => {

  it('Should add an item to the cart and buy it', () => {

    cy.visit('https://www.demoblaze.com');

    cy.login('Rohit1', 'Rohit@123');
   
    // Select a product (e.g., Samsung Galaxy S6)
    cy.get('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)').click();

    cy.xpath("//a[normalize-space()='Samsung galaxy s6']").click();

    // Click the 'Add to cart' button
    cy.get('.btn.btn-success.btn-lg').contains('Add to cart').click();

    // Handle the alert confirmation
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Product added');
    });

    // Navigate to the cart
    cy.get('#cartur').click();
  

    // Step 2: Proceed to checkout with valid payment information

    // Verify that the item has been added to the cart
    cy.get('tr.success').should('exist');

    // Click on the 'Place Order' button
    cy.get('.btn.btn-success').contains('Place Order').click();

    // Step 3: Fill out the order details
    cy.get('#name').type('Rohit1');
    cy.get('#country').type('USA');
    cy.get('#city').type('New York');
    cy.get('#card').type('9874563210321654'); // Example valid test card number
    cy.get('#month').type('12');
    cy.get('#year').type('2025');

    // Step 4: Submit the order
    cy.get("button[onclick='purchaseOrder()']").contains('Purchase').click();

    // Confirm that the confirmation popup appears
    cy.get('.sweet-alert').should('be.visible');

    // Verify the confirmation message
    cy.get('.sweet-alert').contains('Thank you for your purchase!').should('exist');

    // Optionally verify order ID and amount
    cy.get('.lead.text-muted').then((confirmationText) => {
      expect(confirmationText.text()).to.include('Id:');
      expect(confirmationText.text()).to.include('Amount:');
    });

    // Click OK to close the confirmation
    cy.get('.confirm.btn.btn-lg.btn-primary').click();
  });
});
