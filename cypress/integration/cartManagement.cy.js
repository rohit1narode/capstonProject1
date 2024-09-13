// describe('MY SHOP', () => {

//     it('cart managment', () => {
    
//         cy.visit('https://www.demoblaze.com/');

//         cy.contains('Samsung galaxy s6').click();
//         cy.contains('Add to cart').click();       
//         // Handle the alert that appears after adding the item to the cart
//         cy.on('window:alert', (text) => {
//         expect(text).to.contains('Product added');
//         });

//         cy.go(-2);
        
//         cy.contains('Nexus 6').should('be.visible').click();
//         cy.contains('Add to cart').click();
//         // Handle the alert that appears after adding the item to the cart
//         cy.on('window:alert', (text) => {
//         expect(text).to.contains('Product added');
//         });

//         cy.get('#cartur').click(); 

//         cy.contains('Samsung galaxy s6').should('be.visible');
//         cy.contains('Nexus 7').should('be.visible');
//     });
    
// });

// describe('MY SHOP - Cart Management', () => {

//     it('add two items to the cart, remove one, and verify the cart content and total', () => {
    
//         // Step 1: Visit the homepage
//         cy.visit('https://www.demoblaze.com/');
//         cy.login('Rohit1', 'Rohit@123');

//         // Step 2: Add the first item to the cart (Samsung galaxy s6)
//         cy.contains('Samsung galaxy s6').click();
//         cy.contains('Add to cart').click();       
//         cy.on('window:alert', (text) => {
//             expect(text).to.contains('Product added');
//         });

//         // Go back two steps (go back to homepage)
//         cy.go(-2);
        
//         // Step 3: Add the second item to the cart (Nexus 6)
//         cy.xpath("//a[normalize-space()='Nexus 6']").contains('Nexus 6').should('be.visible').click();
//         cy.contains('Add to cart').click();
//         cy.on('window:alert', (text) => {
//             expect(text).to.contains('Product added');
//         });

//         // Step 4: Go to the cart
//         cy.get('#cartur').click(); 
        
//         // Verify both items are present in the cart
//         cy.contains('Samsung galaxy s6').should('be.visible');
//         cy.contains('Nexus 6').should('be.visible');

//         // Step 5: Remove the first item (Samsung galaxy s6) from the cart
//         cy.contains('Samsung galaxy s6').parent().contains('Delete').click();

//         // Step 6: Verify that Samsung galaxy s6 is removed from the cart
//         cy.contains('Samsung galaxy s6').should('not.exist');
//         cy.wait(2000)
//         // Verify that Nexus 6 is still in the cart
//         cy.contains('Nexus 6').should('be.visible');

//         // Step 7: Check the total number of items in the cart (should be 1)
//         cy.get('tr.success').should('have.length', 1); // Verifying the number of rows/items left in the cart
//         cy.get('#logout2').click({force : true});
        
//     }); 
// });
// Optionally, check the cart total if necessary
        // cy.get('#totalp').should('contain', 'Expected Total Price');


