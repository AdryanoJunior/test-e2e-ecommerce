import { faker } from '@faker-js/faker';

describe('Register functionality test cases - Demo Sylius', () => {

    beforeEach(() => {
        cy.visit('register')
    });

    it('Register - Success', () => {
        cy.get('#sylius_shop_customer_registration_firstName').type(faker.person.firstName('male'))
        cy.get('#sylius_shop_customer_registration_lastName').type(faker.person.lastName('male'))
        cy.get('#sylius_shop_customer_registration_email').type(faker.internet.email({ firstName: 'Scott' }))
        cy.get('#sylius_shop_customer_registration_phoneNumber').type(faker.phone.number({ style: 'international' }))
        cy.get('#sylius_shop_customer_registration_user_plainPassword_first').type('Testing12345$')
        cy.get('#sylius_shop_customer_registration_user_plainPassword_second').type('Testing12345$')
        cy.get('#register-button').click()
        cy.get('body').should('contain', 'Thank you for registering, check your email to verify your account')
    });

    it('Registration with all fields blank', () => {
         cy.get('#register-button').click()
         cy.get('body').should('contain', 'Please enter your first name')
         cy.get('body').should('contain', 'Please enter your last name')
         cy.get('body').should('contain', 'Please enter your email')
         cy.get('body').should('contain', 'Please enter your password')
    });

    it('Registration with different passwords', () => {
        cy.get('#sylius_shop_customer_registration_firstName').type(faker.person.firstName('female'))
        cy.get('#sylius_shop_customer_registration_lastName').type(faker.person.lastName('female'))
        cy.get('#sylius_shop_customer_registration_email').type(faker.internet.email({ firstName: 'Penelope' }))
        cy.get('#sylius_shop_customer_registration_phoneNumber').type(faker.phone.number({ style: 'international' }))
        cy.get('#sylius_shop_customer_registration_user_plainPassword_first').type('Test123')
        cy.get('#sylius_shop_customer_registration_user_plainPassword_second').type('Testing12345$')
        cy.get('#register-button').click()
        cy.get('.invalid-feedback')
    });
});