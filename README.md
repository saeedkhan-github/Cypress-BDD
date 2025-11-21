# Cypress BDD Framework with Cucumber

This project demonstrates a Cypress end-to-end testing framework using Cucumber for BDD.

## Features
- Cypress for browser automation
- Cucumber for BDD syntax
- Two sample test cases: Login and Search

## Project Structure
- `cypress/features/` - Contains `.feature` files for BDD scenarios
- `cypress/e2e/` - Step definitions for each feature
- `cypress/support/` and `cypress/fixtures/` - Standard Cypress folders

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Open Cypress:
   ```bash
   npx cypress open
   ```
3. Run tests from the Cypress UI or headless:
   ```bash
   npx cypress run
   ```

## Sample Scenarios
- **Login:** Opens login page, enters credentials, checks dashboard
- **Search:** Opens search page, searches for "Cypress", checks results
