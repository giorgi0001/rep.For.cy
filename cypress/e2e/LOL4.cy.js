
//Test Case 4 : change password


describe('template spec', () => {
  it('change password', () => {
    cy.visit('https://automationteststore.com/')
    // 1. Launch browsercy.visit('https://automationteststore.com/')
// 2. Navigate to url '
// 3. Verify that home page is visible successfully
// 4. Click on 'Login or register' button
cy.get('#customer_menu_top > li > a').click()
//5. verify "Returning Customer" is visible
cy.get('.returncustomer > .heading2').should('be.visible')
//6. Enter Login Name AND Password
cy.get('#loginFrm_loginname').type('giorgi01')
cy.get('#loginFrm_password').type('giorgi112')
//7/ click 'login' button
cy.get('#loginFrm > fieldset > .btn').click()
  //8. verify "Account Dashboard" is visible
  cy.get('.selected > a').should('be.visible')
//9. click "change password"
cy.get('.side_account_list > :nth-child(4) > a').click()
//10. verify "Change Password" is visible
cy.get('.maintext').should('be.visible')
//11. enter "Currant Password" and "new password"
cy.get('#PasswordFrm_current_password').type("giorgi112")
//12. enter "new password"
cy.get('#PasswordFrm_password').type('giorgi911')
//13. Confirm new password
cy.get('#PasswordFrm_confirm').type('giorgi911')
//14. click "Continue" button
cy.get('.col-md-12 > .btn-orange').click()


 




})
})