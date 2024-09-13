describe('MY SHOP - User Login and Logout', () => {

    beforeEach(() => {

        cy.visit('https://www.demoblaze.com/');
    });

    it('should successfully log in with valid credentials', () => {

        cy.get('#login2').contains('Log in').click();
        cy.wait(2000);

        const validUsername = 'Rohit1';
        const validPassword = 'Rohitt@123';

        cy.get('#loginusername').type(validUsername);
        cy.get('#loginpassword').type(validPassword);

        cy.get('[onclick="logIn()"]').click();

  
        //  cy.get('#nameofuser').contains('Welcome Rohit1');
        cy.get('#logout2').contains('Log out')
    });

    it('should fail to log in with invalid credentials', () => {

        cy.get('#login2').contains('Log in').click();

        const invalidUsername = 'invaliduser';
        const invalidPassword = 'wrongpassword';

        cy.get('#loginusername').type(invalidUsername);
        cy.get('#loginpassword').type(invalidPassword);

      
        cy.get('[onclick="logIn()"]').click();

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('User does not exist.');
        });
    });

    it('should log out successfully after logging in', () => {
        
        cy.get('#login2').contains('Log in').click();
        const validUsername = 'Rohit1';
        const validPassword = 'Rohit@123';
        
        cy.get('#loginusername').type(validUsername);
        cy.get('#loginpassword').type(validPassword);
        cy.get('[onclick="logIn()"]').click();

        // Verify successful login
        cy.get('#logout2').contains('Log out');

        //  Log out
        cy.get('#logout2').click({force : true});

        cy.get('#login2').contains('Log in');
        cy.contains('Welcome').should('not.exist');
    });
});


describe.only('MY SHOP - User Login and Logout', () => {

    it('test login functionality with valid and invalid credentials and logout', function () {
        // Load the fixture file 'loginCredentials.json'
        cy.fixture('login').then((users) => {
            cy.visit('https://www.demoblaze.com/');
            users.forEach((user) => {
            // Test login with valid credentials
                // cy.get('#login2').contains('Log in').click();
                // cy.wait(2000);

                // cy.get('#loginusername').type(user.username);
                // cy.get('#loginpassword').type(user.password);
                // cy.get('[onclick="logIn()"]').click();

                cy.login(user.username, user.password);

                if(user.username == 'Rohit1' || user.password == 'Rohit@123')
                {
                    cy.get('#logout2').contains('Log out')

                    cy.get('#logout2').click({force : true});

                    cy.get('#login2').contains('Log in');
                    cy.contains('Welcome').should('not.exist');
                }
                else{

                    cy.on('window:alert', (alertText) => {
                        expect(alertText).to.equal('User does not exist.');
                    });
                }
            });
        });
    });
});