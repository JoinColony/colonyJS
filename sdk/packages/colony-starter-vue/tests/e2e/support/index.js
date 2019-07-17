// https://on.cypress.io/configuration

// Import commands
import './commands'

// Prevent failing tests on uncaught exception error
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
