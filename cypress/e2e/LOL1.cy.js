// Test Case 1: Register User

describe('Login Existing User Test', () => {
  it('should login an already registered user', () => {
    const email = 'giorgi.mchedlo.092@gmail.com'
    const password = 'giorgi911'
    const username = 'giorgi01'

    
  

    cy.log("ისევ ტესტიდან დალოგვა")
    cy.registerAndLogin(email, password, username)
  })
})


