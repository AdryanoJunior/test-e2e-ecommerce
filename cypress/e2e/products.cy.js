import userData from '../fixtures/userData.json'
import productsPage from '../../pages/products.page';


describe('Main test cases - Products', () => {

    beforeEach(() => {
        productsPage.visitUrl()
        cy.login(userData.userSuccess.username, userData.userSuccess.password)
        
    });

    it('Select a product from the list', () => {
       productsPage.visitProductCatalog()

        productsPage.searchProductList('Slim fit elegant')
        
        cy.get('body').should('contain', 'Attributes')
    });

    it('Search for product using the search bar', () => {
        productsPage.visitProductCatalog()
        
        productsPage.searchpProductSearchBar('Basic regular')
    });

    it('Must visit product page', () => {
        productsPage.visitProduct('Slim-fit-classic')
    });

    it.only('Add product to cart and remove', () => {
         productsPage.visitProductCatalog()
         productsPage.searchProductList('Slim fit elegant')
         productsPage.addProductToCart('XXL', 3)
         cy.get('body').should('contain', 'Edit your items, apply coupon or proceed to the checkout')
          
         productsPage.removeProductButton()
         cy.get('body').should('contain', 'Your cart is empty')
    });

});