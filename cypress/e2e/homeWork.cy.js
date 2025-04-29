//     Test Case 1: Register User


describe('template spec', () => {
  before(function() {
    cy.fixture('myNew.json').as('userdata')
  })

  it('Register User', function ()  {
    cy.visit('http://automationexercise.com')

    cy.registration(this.userdata.email, this.userdata.password, this.userdata.name)
  })
})