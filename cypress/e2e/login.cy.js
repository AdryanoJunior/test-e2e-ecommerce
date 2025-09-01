describe('Login functionality test cases - Demo Sylius', () => {

  beforeEach(() => {
    cy.visit('login')
  });

  it('Login - Success', () => {
    cy.login('fashion@example.com', 'sylius')
    cy.get('body').should('contain', 'My account')
  })
})