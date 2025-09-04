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

  Cypress.Commands.add('choosingProduct', () => {
   cy.get('[href="/en_US/taxons/fashion-category/dresses"]').click()
   cy.get("[product='Summer tunic']").click()
   
 })

 Cypress.Commands.add('selectVariations', () => {
   cy.get("[data-option='dress_size']").select('XL')
   cy.get("[data-option='dress_height']").select('Tall')
   cy.get("#sylius_shop_add_to_cart_cartItem_quantity").clear().type('2')
   cy.get('#add-to-cart-button').click()
   
 })

 Cypress.Commands.add('checkoutButton', () => {
   cy.get("[type='submit']").click()
   
 })


  Cypress.Commands.add('fillBillingAddress', () => {
    cy.get("#sylius_shop_checkout_address_customer_email").type(faker.internet.email({ firstName: 'Scott'}))
    cy.get("#sylius_shop_checkout_address_billingAddress_firstName").type(faker.person.firstName())
    cy.get("#sylius_shop_checkout_address_billingAddress_lastName").type(faker.person.lastName())
    cy.get("#sylius_shop_checkout_address_billingAddress_company").type(faker.company.name())
    cy.get("#sylius_shop_checkout_address_billingAddress_street").type(faker.location.streetAddress())
    cy.get("#sylius_shop_checkout_address_billingAddress_countryCode").select('Canada')
    cy.get("#sylius_shop_checkout_address_billingAddress_city").type(faker.location.city())
    cy.get("#sylius_shop_checkout_address_billingAddress_postcode").type(faker.location.zipCode())
    cy.get("#sylius_shop_checkout_address_billingAddress_phoneNumber").type(faker.phone.number())
    cy.get(".btn-primary").click()

 })

  Cypress.Commands.add('selectShippingMethod', () => {
   cy.get("#sylius_shop_checkout_select_shipping_shipments_0_method_1").click()
   cy.get("[type='submit']").click()
   
 })

 Cypress.Commands.add('selectPaymentMethod', () => {
   cy.get("[value='bank_transfer']").click()
   cy.get("[name='sylius_shop_checkout_select_payment'] .btn-primary").click()
   
 })


  Cypress.Commands.add('placeOrderButton', () => {
   cy.get("#confirmation-button.btn-primary").click()
   
 })

