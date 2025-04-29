//Test Case 2: Login User with correct email and password



describe('template spec', () => {
  before(function() {
    cy.fixture('myNew.json').as('userdata')
  })
  it.only('Login User with correct email and password', function () {
    cy.visit('https://automationexercise.com/')
    cy.login(this.userdata.email, this.userdata.password)
   

  })
})