Cypress.Commands.add('registration', (email, password, name) => {
    cy.visit('http://automationexercise.com')

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

// Verify 'New User Signup!' is visible
cy.get('.signup-form > h2').should('contain', 'New User Signup!');

// Enter name and email address
cy.get('[data-qa="signup-name"]').type(name);
cy.get('[data-qa="signup-email"]').type(email);

// Click 'Signup' button
cy.get('[data-qa="signup-button"]').click();

// Verify that 'ENTER ACCOUNT INFORMATION' is visible
cy.get('b').should('contain', 'Enter Account Information');

// Fill details
cy.get('#id_gender1').check();
cy.get('[data-qa="password"]').type(password);
cy.get('[data-qa="days"]').select('10');
cy.get('[data-qa="months"]').select('May');
cy.get('[data-qa="years"]').select('1990');

// Select checkboxes
cy.get('#newsletter').check();
cy.get('#optin').check();

// Fill additional details
cy.get('[data-qa="first_name"]').type('Giorgi');
cy.get('[data-qa="last_name"]').type('Mchedlidze');
cy.get('[data-qa="company"]').type('TestCompany');
cy.get('[data-qa="address"]').type('Tbilisi, Saburtalo');
cy.get('[data-qa="address2"]').type('Apartment 10');
cy.get('[data-qa="country"]').select('Canada');
cy.get('[data-qa="state"]').type('Tbilisi');
cy.get('[data-qa="city"]').type('Qutaisi');
cy.get('[data-qa="zipcode"]').type('0100');
cy.get('[data-qa="mobile_number"]').type('+995555123456');

// Click 'Create Account button'
cy.get('[data-qa="create-account"]').click();

// Verify that 'ACCOUNT CREATED!' is visible
cy.get('b').should('contain', 'Account Created!');

// Click 'Continue' button
cy.get('[data-qa="continue-button"]').click();

// Verify that 'Logged in as username' is visible
cy.get('.shop-menu > .nav > :nth-child(10) > a').should('contain', name);
})




Cypress.Commands.add('login', (email, password) => {

    cy.visit('https://automationexercise.com/')
// Test Case 2: Login User with correct email and password
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
// 5. Verify 'Login to your account' is visible
cy.get('.login-form > h2').should('contain', 'Login to your account');
// 6. Enter correct email address and password
cy.get('[data-qa="login-email"]').type(email);
cy.get('[data-qa="login-password"]').type(password);
// 7. Click 'login' button
cy.get('[data-qa="login-button"]').click();
// 8. Verify that 'Logged in as username' is visible
cy.get('.shop-menu > .nav > :nth-child(10) > a').should('contain', 'Logged in as');


})


Cypress.Commands.add('loginWithInvalidCredentials', (email, password) => {
    cy.visit('https://automationexercise.com/');
  
    // Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
  
    // Verify 'Login to your account' is visible
    cy.get('.login-form > h2').should('contain', 'Login to your account');
  
    // Fill login form with incorrect credentials
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
  
    // Click login button
    cy.get('[data-qa="login-button"]').click();
  
    // Verify error message is visible
    cy.get('.login-form p').should('contain', 'Your email or password is incorrect!');
  });