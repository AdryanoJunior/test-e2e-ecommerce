describe('Login functionality test cases - Demo Sylius', () => {

  it('Login - Success', () => {
    cy.visit('login')
    cy.get('#_username').type('fashion@example.com')
    cy.get('#_password').type('sylius')
    cy.get('#login-button').click()
    cy.get('body').should('contain', 'My account')
  })
})