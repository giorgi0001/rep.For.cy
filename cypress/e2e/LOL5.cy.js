
//Test Case 5 :  login incorrect  password and name

describe('template spec', () => {
  it('login incorrect  password and name', () => {
    cy.visit('https://automationteststore.com/')
     // // 1. Launch browsercy.visit('https://automationteststore.com/')
// 2. Navigate to url '
// 3. Verify that home page is visible successfully
//4.clik 'Login or register'
cy.get('#customer_menu_top > li > a').click()
//5.enter incorrect login name and password
cy.get('#loginFrm_loginname').type('test2')
cy.get('#loginFrm_password').type('forever')
//6. click 'login' button
cy.get('#loginFrm > fieldset > .btn').click()
//7.verify login is incorrect
cy.get('.alert').should('be.visible')

  })
})