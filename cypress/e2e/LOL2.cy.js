//test case: 2 login correct name and password and Edit account details
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationteststore.com/')



    // // 1. Launch browsercy.visit('https://automationteststore.com/')
// 2. Navigate to url '
// 3. Verify that home page is visible successfully
//4.clik 'Login or register'
cy.get('#customer_menu_top > li > a').click()
//5. Verify 'Returning Customer' is visible
cy.get('.returncustomer > .heading2').should('be.visible')
//6. enter dirst name and password
cy.get('#loginFrm_loginname').type('giorgi01')
cy.get('#loginFrm_password').type('giorgi911') 
//7. click 'login' button
cy.get('#loginFrm > fieldset > .btn').click()

//9. verify "Edit account details" is visible
cy.get('.side_account_list > :nth-child(1) > a').should('be.visible')
//10 click "Edit account details"
cy.get('.side_account_list > :nth-child(3) > a').click()
//11 verify "My Account Information" is visible
cy.get('.maintext').should('be.visible')
//12 change First Name, Last name,Telephone,fax
cy.get('#AccountFrm_firstname').clear().type('giorga')
cy.get('#AccountFrm_lastname').clear().type('mchedlo')
cy.get('#AccountFrm_telephone').clear().type('+447123456780')
cy.get('#AccountFrm_fax').clear().type('+442087654313')
//13 click 'Continue' button
cy.get('.col-md-12 > .btn-orange').click()

//14 verify "Success: Your account has been successfully updated." is visible
cy.get('.alert').should('be.visible')
  })
})