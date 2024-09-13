// describe('MY SHOP', () => {

//   beforeEach(() => {
//     cy.visit('https://www.demoblaze.com/');
//   });
  
//   it('Home page Navigation', () => {

//     cy.url().should('eq', 'https://www.demoblaze.com/');
//     cy.title().should('include', 'STORE');

//     cy.get('.list-group').should('be.visible');

//     cy.contains('Phones').should('be.visible');
//     cy.contains('Laptops').should('be.visible');
//     cy.contains('Monitors').should('be.visible');
//   });

//   it('Product Search', () => {

//     cy.get('.list-group-item').contains('Phones').click(); 
//     cy.contains('Samsung galaxy s6').should('be.visible');

//     cy.get('.list-group-item').contains('Laptops').click();
//     cy.contains('Sony vaio i5').should('be.visible');
//   });

//   it('product details for Samsung Galaxy S6', () => {

//     cy.get('#itemc').click();

//     cy.contains('Samsung galaxy s6').click();
//     cy.wait(5000);
//     cy.get('h2.name').should('have.text', 'Samsung galaxy s6');
//     cy.get('.price-container').should('contain', '$360');

//     // cy.get('#myTabContent p').should('be.visible')
//     // .and('contain', 'The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM.');

//     // Validate the product description using XPath
//   cy.xpath('//div[@id="more-information"]//p')
//   .should('contain.text', 'The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded.');

//   });

//   it('cart managment', () => {
  
//     cy.contains('Samsung galaxy s6').click();
//     cy.contains('Add to cart').click();
//     // Handle the alert that appears after adding the item to the cart
//     cy.on('window:alert', (text) => {
//       expect(text).to.contains('Product added');
//     });

//     cy.go('back');

//     cy.contains('Samsung galaxy s7').click();
//     cy.contains('Add to cart').click();
//     // Handle the alert that appears after adding the item to the cart
//     cy.on('window:alert', (text) => {
//       expect(text).to.contains('Product added');
//     });

//     cy.get('#cartur').click(); 
//     cy.contains('Samsung galaxy s6').should('be.visible');
//     cy.contains('Samsung galaxy s7').should('be.visible');
//   });
    
// });

// // describe('MY SHOP', () => {

// //   it('visit', () => {
// //     cy.visit('https://themes.woocommerce.com/storefront/');
// //   });
// // }); 


// describe('Cart Management - Add, Remove Items, and Verify Cart Total', () => {
//   it('should add items to the cart, verify the total, and remove an item', () => {
//     // Visit the Automation Test Store
//     cy.visit('https://automationteststore.com/');

//     // Add the first item to the cart (Product 1)
//     cy.get("img[src='//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-250x250.jpg']", { timeout: 10000 })
//       .click();

//     // Click "Add to Cart" button for the first product
//     cy.get('.cart', { timeout: 10000 }).click();

//     // Go back to the main page
//     cy.go('back');

//     // Add the second item to the cart (Product 2)
//     cy.get("section[id='featured'] div[class='thumbnails list-inline'] div:nth-child(1) div:nth-child(2) a:nth-child(1) img:nth-child(1)", { timeout: 10000 })
//       .click();

//     // Click "Add to Cart" button for the second product
//     cy.get('.cart', { timeout: 10000 }).click();

//     // Go back to the main page
//     cy.go('back');

//     // Add the third item to the cart (Product 3)
//     cy.get("img[src='//automationteststore.com/image/thumbnails/18/6f/demo_product03_jpg-100094-250x250.jpg']", { timeout: 10000 })
//       .click();

//     // Click "Add to Cart" button for the third product
//     cy.get('.cart', { timeout: 10000 }).click();

//     // Go to the cart by selecting "Cart" from the dropdown
//     cy.get('select.form-control').first().select('Cart', { timeout: 10000 });

//     // Verify the exact URL redirection to the cart page
//     cy.url({ timeout: 10000 }).should('eq', 'https://automationteststore.com/index.php?rt=checkout/cart');

//     // Verify that there are 3 items in the cart
//     cy.get('tr.success', { timeout: 10000 }).should('have.length', 3);

//     // Click the "Remove" button for the first item in the cart
//     cy.get('tr.success').first().find('a.btn.btn-sm.btn-default').click();

//     // Verify that there are now 2 items left in the cart
//     cy.get('tr.success', { timeout: 10000 }).should('have.length', 2);
//   });
// });

// describe(' Product Details', ()=>{
//   it(' Validate that product detail pages display accurate information',()=>{

//      cy.visit('https://demo.x-cart.com/demo')

//      cy.get(':nth-child(2) > .icon-link').should('be.visible').click()
//      cy.get('h1').should('contain', 'Apparel')

//      cy.get('.dialog > .content').should('be.visible');

//      cy.get('.first > .item-box > .details > .product-title').should('contain','Binary');

//      cy.get('.first > .item-box > .details > .price-cell > .price-row > .price-value > .currency').should('contain','$17.99')

//      cy.get('.first > .item-box > .details > .buttons-cell > .buy-now > form > .buttons-row > .main-button > .button-right > .button-left').click()

//      cy.get(':nth-child(4) > .item-box > .details > .buttons-cell > .buy-now > form > .buttons-row > .main-button > .button-right > .button-left > .fa').should('be.visible').click()

//      cy.get(':nth-child(2) > .item-box > .image > .image-wrapper > a > img').should('be.visible');
    
//      cy.xpath("//a[normalize-space()='Caffeine Molecule']").click();

//      cy.xpath("//span[contains(text(),'Add to cart')]").click();
     
//      cy.xpath("//a[normalize-space()='View cart']").click()

//   })

//   // it("Test the functionality of the 'Add to Cart' button", ()=>{

//   //  cy.visit('https://demo.x-cart.com/demo')

//   //  cy.get('.line1 > .menu-dialog').click()

//   //   cy.get('.nav > .current > a').should('contain','cart').click()

//   //   cy.get('.minicart-items-value').should('be.visible')

//   // })
// })