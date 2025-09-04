describe('System Main Flow - Demo Sylius', () => {

    before(() => {
        cy.visit('register')
    });
    
    it('From registration to finalizing the order', () => {
        cy.register()
        cy.get('body').should('contain', 'Thank you for registering, check your email to verify your account')

        cy.choosingProduct()
        cy.get('body').should('contain', 'Details')

        cy.selectVariations()
        cy.get('body').should('contain', 'Item has been added to cart')
        cy.get('body').should('contain', 'Edit your items, apply coupon or proceed to the checkout')
      
        cy.checkoutButton()

        cy.fillBillingAddress()
        cy.get('body').should('contain', 'Order total:')

        cy.selectShippingMethod()

        cy.selectPaymentMethod()
        cy.get('body').should('contain', 'Summary of your order')

        cy.placeOrderButton()
        cy.get('body').should('contain', 'You have successfully placed an order')
    });
});