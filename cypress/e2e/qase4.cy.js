//Test Case 4: Logout User

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')
    cy.fixture('userData.json').then((user) => {
      const email = user.email;
      const password = user.password;
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
// 5. Verify 'Login to your account' is visible
cy.get('.login-form > h2').should('be.visible')
// 6. Enter correct email address and password
cy.get('[data-qa="login-email"]').type(email)
cy.get('[data-qa="login-password"]').type(password)
// 7. Click 'login' button
cy.get('[data-qa="login-button"]').click()
// 8. Verify that 'Logged in as username' is visible
cy.contains('Logged in as test01').should('be.visible');

// 9. Click 'Logout' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
// 10. Verify that user is navigated to login page
cy.contains(' Signup / Login').should('be.visible')
  })
  })
})