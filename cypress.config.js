const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
     specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js'
  },
  defaultCommandTimeout: 20000
});
