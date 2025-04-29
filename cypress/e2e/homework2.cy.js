//Test Case 3: Login User with incorrect email and password

describe('template spec', () => {
  before(function () {
    cy.fixture('invalidUser.json').as('invalidData')
  });

  it(' Login User with incorrect email and password', function () {
    cy.login(this.invalidData.invalidEmail, this.invalidData.invalidPassword);
    cy.visit('https://example.cypress.io')
  })
})