// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


  
Cypress.Commands.add('registerAndLogin', (email, password, username) => {
  cy.log("custom command გამოვიძახე")

  cy.visit('https://automationteststore.com/')
  cy.get('#customer_menu_top > li > a').click()
  cy.get('.newcustomer > .heading2').should('be.visible')
  cy.contains('Continue').click()

  // ფორმის შევსება
  cy.get('#AccountFrm_firstname').type('giorgi')
  cy.get('#AccountFrm_lastname').type('mchedlidze')
  cy.get('#AccountFrm_email').type(email)
  cy.get('#AccountFrm_telephone').type('444123456789')
  cy.get('#AccountFrm_fax').type('442087654321')
  cy.get('#AccountFrm_company').type('mavne')
  cy.get('#AccountFrm_address_1').type('saburtalo')
  cy.get('#AccountFrm_city').type('naxalovka')
  cy.get('#AccountFrm_postcode').type('M1 1AE')
  cy.get('#AccountFrm_zone_id').select('Greater Manchester')
  cy.get('#AccountFrm_country_id').select('United Kingdom')
  cy.get('#AccountFrm_loginname').type(username)
  cy.get('#AccountFrm_password').type(password)
  cy.get('#AccountFrm_confirm').type(password)
  cy.get('#AccountFrm_newsletter0').click()
  cy.get('#AccountFrm_agree').click()

  

  // პირდაპირ ლოგინზე 
  cy.visit('https://automationteststore.com/index.php?rt=account/login')
  cy.get('#loginFrm_loginname').type(username)
  cy.get('#loginFrm_password').type(password)
  cy.get('button[title="Login"]').should('be.visible').click()
})