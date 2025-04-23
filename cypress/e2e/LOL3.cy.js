

//testcase 3 : change or add new address

describe('template spec', () => {
  it('change or add new address', () => {
    cy.visit('https://automationteststore.com/')
    // 1. Launch browsercy.visit('https://automationteststore.com/')
// 2. Navigate to url '
// 3. Verify that home page is visible successfully
// 4. Click on 'Login or register' button
cy.get('#customer_menu_top > li > a').click()
//5. verify 'Returning Customer' is visible
cy.get('.returncustomer > .heading2').should('be.visible')
//6. enter login Name and password
cy.get('#loginFrm_loginname').type('giorgi01')
cy.get('#loginFrm_password').type('giorgi112')
//7.click 'login' button
cy.get('#loginFrm > fieldset > .btn').click()
//8. verify 'Account Dashboard' is visible
cy.get('.selected > a').should('be.visible')
//9. click '  Manage Address Book"
cy.get('.side_account_list > :nth-child(5) > a').click()
//10 verify 'Address Book Entries' is visible
cy.contains('Address Book Entries').should('be.visible')
//11. click 'edit' button
cy.get('tr > .pull-right > .btn').click()
//12. change address 1 , address 2
cy.get('#AddressFrm_address_1').clear().type('didube')
cy.get('#AddressFrm_address_2').clear().type('vake')
//13. click ' continue ' 
cy.get('.col-md-12 > .btn-orange').click()
//14. verify "Your address has been successfully updated" is visible
cy.contains("Your address has been successfully updated").should('be.visible')





  })
})