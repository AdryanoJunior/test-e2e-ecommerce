import userData from '../fixtures/userData.json'

describe('Test cases for the feature of changing personal information', () => {

    beforeEach(() => {
        cy.visit('login')
        cy.login(userData.userSuccess.username, userData.userSuccess.password)
    });

    const selectorsList = {
        myAccountButton: '#my-account-button',
        editButton: "[href='/en_US/account/profile/edit']",
        firstNameField: '[name="sylius_shop_customer_profile[firstName]"]',
        lastNameField: '[name="sylius_shop_customer_profile[lastName]"]',
        selectGender: '[name="sylius_shop_customer_profile[gender]"]', 
        saveChangesButton: '#save-changes'
    }
    
    it('Change personal information - Success', () => {
        cy.get(selectorsList.myAccountButton).click()
        cy.location('pathname').should('equal', '/en_US/account/dashboard')
        cy.get('body').should('contain', 'Manage your personal information and preferences')

        cy.get(selectorsList.editButton).eq(1).click()
        cy.location('pathname').should('equal', '/en_US/account/profile/edit')
        cy.get('body').should('contain', 'Edit your personal information')

        cy.get(selectorsList.firstNameField).clear().type('Test')
        cy.get(selectorsList.lastNameField).clear().type('Success')
        cy.get(selectorsList.selectGender).select('Male')
        cy.get(selectorsList.saveChangesButton).click()
        cy.get('body').should('contain', 'Customer has been successfully updated')
    });

    it('Change data without filling in the first name', () => {
        cy.get(selectorsList.myAccountButton).click()
        cy.get(selectorsList.editButton).eq(1).click()
        cy.get(selectorsList.firstNameField).clear()
        cy.get(selectorsList.lastNameField).clear().type('Testing')
        cy.get(selectorsList.selectGender).select('Female')
        cy.get(selectorsList.saveChangesButton).click()
        cy.get('body').should('contain', 'Please enter your first name')
    });

    it('Change data without filling in the last name', () => {
         cy.get(selectorsList.myAccountButton).click()
         cy.get(selectorsList.editButton).eq(1).click()
         cy.get(selectorsList.firstNameField).clear().type('Test')
         cy.get(selectorsList.lastNameField).clear()
         cy.get(selectorsList.selectGender).select('Male')
         cy.get(selectorsList.saveChangesButton).click()
         cy.get('body').should('contain', 'Please enter your last name')
    });
});