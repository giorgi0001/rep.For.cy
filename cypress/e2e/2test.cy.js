
//Test Case 2: Login User with correct email and password

describe('template spec', () => {
  it('Login User with correct email and password', () => {
    
    

    cy.fixture('userData.json').then((user) => {
      const email = user.email;
      const password = user.password;
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully

// 4. Click on 'Signup / Login' button
cy.visit('https://automationexercise.com/')
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
// 5. Verify 'Login to your account' is visible
cy.contains('Login to your account').should('be.visible')
// 6. Enter correct email address and password
cy.get('[data-qa="login-email"]').type(email)
cy.get('[data-qa="login-password"]').type(password)
// 7. Click 'login' button
cy.get('[data-qa="login-button"]').click()
// 8. Verify that 'Logged in as username' is visible
cy.contains('Logged in as test01').should('be.visible');
// 9. Click 'Delete Account' button

// 10. Verify that 'ACCOUNT DELETED!' is visible
    })
    })
}) 