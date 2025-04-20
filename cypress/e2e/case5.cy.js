describe('template spec', () => {
  it('passes', () => {
    cy.readFile('cypress/fixtures/userData.json').then((user) => {
      const email = user.email;
    cy.visit('http://automationexercise.com/')
//     Test Case 5: Register User with existing email
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
// 5. Verify 'New User Signup!' is visible
cy.get('.signup-form > h2').should('be.visible')
// 6. Enter name and already registered email address
cy.get('[data-qa="signup-name"]').type('test01')
cy.get('[data-qa="signup-email"]').type(email)
// 7. Click 'Signup' button
cy.get('[data-qa="signup-button"]').click()
// 8. Verify error 'Email Address already exist!' is visible
cy.contains('Email Address already exist!').should('be.visible');
    })
  })
})