class ProductsPage {

    visitUrl() {
        cy.visit('login')
    }

    visitProductCatalog() {
        cy.get("[role='button']").eq(1).click()
        cy.get("[href='/en_US/taxons/jeans/men']").click()
    }

    searchProductList(nameProduct) {
         cy.get("[data-route='sylius_shop_product_index']")
        .contains(nameProduct)
        .click()
    }

    searchpProductSearchBar(nameProduct) {
        cy.get('#criteria_search_value').type(nameProduct)
        cy.get("[aria-label='search button']").click()
    }
    
    visitProduct(nameProduct) {
        cy.visit(`/products/${nameProduct}`)
    }

    addProductToCart(size, quantity ) {
        cy.get("#sylius_shop_add_to_cart_cartItem_variant_jeans_size").select(size)
        cy.get("#sylius_shop_add_to_cart_cartItem_quantity").clear().type(quantity)
        cy.get("#add-to-cart-button").click()
    }

    removeProductButton() {
        cy.get(".icon-tabler").click()
    }
}


export default new ProductsPage()