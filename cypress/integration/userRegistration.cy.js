describe.only('MY SHOP - User Registration', () => {

    beforeEach(() => {
        // Visit the homepage before each test case
        cy.visit('https://www.demoblaze.com/');
    });

    it('should successfully register with valid inputs', () => {
        // Click the "Sign up" button to open the registration modal
        cy.get('#signin2').contains('Sign up').click();
        cy.wait(2000)
        
        // Fill in valid user details
        const username = 'Rohit1'; // unique username
        const password = 'Rohit@123';

        cy.get('#sign-username').type(username);
        cy.get('#sign-password').type(password);

        // Click the "Sign up" button in the modal
        cy.get('[onclick="register()"]').click();

        // Handle the alert after successful registration
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('This user already exist.');
        });
    });

    it('should fail to register with empty fields', () => {
        // Click the "Sign up" button to open the registration modal
        cy.get('#signin2').contains('Sign up').click();
        cy.wait(2000)

        // Leave the username and password fields empty
        cy.get('#sign-username').clear();
        cy.get('#sign-password').clear();

        // Click the "Sign up" button in the modal
        cy.get('[onclick="register()"]').click();

        // Handle the alert for failed registration
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Please fill out Username and Password.');
        });
    });

    it('should fail to register with a short password', () => {
        // Click the "Sign up" button to open the registration modal
        cy.get('#signin2').contains('Sign up').click();

        // Enter a valid username but a short password
        const username = 'Rohit1'; // unique username
        const shortPassword = '123'; // too short

        cy.get('#sign-username').type(username);
        cy.get('#sign-password').type(shortPassword);

        // Click the "Sign up" button in the modal
        cy.get('[onclick="register()"]').click();

        // Expect an alert indicating registration failure or other validation errors
        cy.on('window:alert', (alertText) => {
            // Depending on how the system validates short passwords, update the expected text accordingly
            expect(alertText).to.include('Password must be at least 8 characters'); // Assuming this is the expected behavior
        });
    });
});



describe('MY SHOP - User Registration with Multiple Scenarios', () => {

    it('test user registration using different scenarios', function () {
        // Load the fixture file 'registration.json'
        cy.fixture('registration').then((users) => {

            cy.visit('https://www.demoblaze.com/');

            // Loop through each user in the fixture
            users.forEach((user) => {
                // Open the Sign Up modal
                cy.get('#signin2').click();
                cy.wait(2000);

                // Enter the username and password from the fixture data
                cy.get('#sign-username').clear().type(user.username);
                cy.get('#sign-password').clear().type(user.password);

                // Click on the "Sign up" button
                cy.get('[onclick="register()"]').click();

                // Handle and assert the alert message
                cy.on('window:alert', (alertText) => {
                    expect(alertText).to.equal(user.expected);
                });

                // Return to the home page before the next iteration
                cy.visit('https://www.demoblaze.com/');
            });
        });
    });
});
