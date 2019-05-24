// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
const colonyAddress = Cypress.env('VUE_APP_COLONY_ADDRESS')

Cypress.Commands.add('setColony', () => {
  cy.visit('/manage')
  cy.get('form.manage-colony-form').within(() => {
    cy.get('input.address').type(colonyAddress)
    cy.get('button').click()
  })
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq(`/manage/${colonyAddress}`)
  })
})
