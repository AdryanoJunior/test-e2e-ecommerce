import { faker } from '@faker-js/faker';


 Cypress.Commands.add('login', (username, password) => {
    cy.get('#_username').type(username)
    cy.get('#_password').type(password)
    cy.get('#login-button').click()
 })

 Cypress.Commands.add('register', () => {
     cy.get('#sylius_shop_customer_registration_firstName').type(faker.person.firstName('male'))
        cy.get('#sylius_shop_customer_registration_lastName').type(faker.person.lastName('male'))
        cy.get('#sylius_shop_customer_registration_email').type(faker.internet.email({ firstName: 'Scott' }))
        cy.get('#sylius_shop_customer_registration_phoneNumber').type(faker.phone.number({ style: 'international' }))
        cy.get('#sylius_shop_customer_registration_user_plainPassword_first').type('Testing12345$')
        cy.get('#sylius_shop_customer_registration_user_plainPassword_second').type('Testing12345$')
        cy.get('#register-button').click()

 })
