
// Test Case 1: Register User

describe('template spec', () => {
  it('Register User', () => {
    cy.visit('https://automationexercise.com/')
  
      // 1. Launch browser

// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
// 5. Verify 'New User Signup!' is visible
cy.contains('New User Signup!').should('be.visible')
// 6. Enter name and email address
const randomNumber = Math.random().toString().slice(2, 8);
const email = `giorgi${randomNumber}@gmail.com`;
const password = 'test1234'
cy.get('[data-qa="signup-name"]').type('test01');
cy.get('[data-qa="signup-email"]').type(email);
cy.writeFile('cypress/fixtures/userData.json', {
  email: email,
  password: password
});

// 7. Click 'Signup' button
cy.get('[data-qa="signup-button"]').click()
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
cy.get(':nth-child(1) > b').should('be.visible')
// 9. Fill details: Title, Name, Email, Password, Date of birth
cy.get('#id_gender1').click() 
cy.get('[data-qa="password"]').type('test1234')
cy.get('[data-qa="months"]').select("October")
cy.get('[data-qa="days"]').select('8')
cy.get('[data-qa="years"]').select('1992')


// 10. Select checkbox 'Sign up for our newsletter!'
cy.get('#newsletter').check()
// 11. Select checkbox 'Receive special offers from our partners!'
cy.get('#optin').check()
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
cy.get('[data-qa="first_name"]').type('giorgi')
cy.get('[data-qa="last_name"]').type('mchedlo')
cy.get('[data-qa="company"]').type('zootopia')
cy.get('[data-qa="address"]').type('tsereteli')
cy.get('[data-qa="address2"]').type('mtatsminda')
cy.get('[data-qa="country"]').select('New Zealand')
cy.get('[data-qa="state"]').type('Wellington')
cy.get('[data-qa="city"]').type('Wellington')
cy.get('[data-qa="zipcode"]').type('6021')
cy.get('[data-qa="mobile_number"]').type("+64 4 472 1234")

// 13. Click 'Create Account button'
cy.get('[data-qa="create-account"]').click()
// 14. Verify that 'ACCOUNT CREATED!' is visible
cy.contains('Account Created!', { timeout: 10000 }).should('be.visible')
// 15. Click 'Continue' button
cy.get('[data-qa="continue-button"]').click()
// 16. Verify that 'Logged in as username' is visible
cy.get(':nth-child(10) > a').should('be.visible')
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

  }) 
})