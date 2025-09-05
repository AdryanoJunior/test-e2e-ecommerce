# End-to-End Test Automation – E-commerce (Sylius Demo)

## About the Project

This project contains a suite of end-to-end (E2E) automated tests using Cypress, covering the complete flow of an e-commerce system:

User login and authentication

User registration and profile update

Adding and removing products from the cart

Positive and negative test scenarios (validations)

Checkout and order completion

The goal is to ensure quality and reliability of the core processes of a real-world e-commerce platform (Sylius Demo)


## Tech Stack
Cypress
 – E2E testing framework

Node.js
 – Runtime environment

npm
 – Package manager

Cypress Cloud
 – Reports, videos, and screenshots


# Installation & Execution
1. Clone the repository
```bash
https://github.com/AdryanoJunior/test-e2e-ecommerce.git
```
2. Install dependencies
```bash
npm install
```

## Running
```bash
# You open the Cypress UI
npx cypress open
```

# Test Scenarios

Authentication

Valid login (existing user)

Invalid login (wrong credentials)

User registration

Invalid registration validation
```

👤 User

Update profile information

Validate required fields

Negative flows (e.g., invalid password)
```

🛒 Cart

Add valid product

Add non-existent product

Remove item from cart

Update item quantity
```

💳 Checkout

Fill in valid address

Select shipping and payment method

Complete order successfully

Validate checkout errors
```

## Contributions

Contributions are welcome!
Feel free to open an issue or submit a pull request with improvements, new scenarios, or refactors.



 

