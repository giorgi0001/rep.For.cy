//Test Case 3: Login User with incorrect email and password

describe('template spec', () => {
  it('Login User with incorrect email and password', () => {
    cy.visit('https://automationexercise.com/')

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully

// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
// 5. Verify 'Login to your account' is visible
cy.get('.login-form > h2').should('be.visible')
// 6. Enter incorrect email address and password
cy.get('[data-qa="login-email"]').type('g.mchedl@mail.ru')
cy.get('[data-qa="login-password"]').type('test12')
// 7. Click 'login' button
cy.get('[data-qa="login-button"]').click()
// 8. Verify error 'Your email or password is incorrect!' is visible
cy.contains('Your email or password is incorrect!').should('be.visible')
  })
})