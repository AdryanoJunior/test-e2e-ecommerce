import userData from '../fixtures/userData.json'

describe('Login functionality test cases - Demo Sylius', () => {

  beforeEach(() => {
    cy.visit('login')
  });

  it('Login - Success', () => {
    cy.login(userData.userSuccess.username, userData.userSuccess.password)
    cy.get('body').should('contain', 'My account')
  })

  it('Login - Fail', () => {
     cy.login(userData.userFail.username, userData.userFail.password)
     cy.get('body').should('contain', 'Invalid credentials')
  });
})