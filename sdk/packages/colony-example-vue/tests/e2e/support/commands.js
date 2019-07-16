// https://on.cypress.io/custom-commands

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

Cypress.Commands.add('selectOption', (select, n) => {
  cy.get(`${select}>option`)
    .should('have.length.gt', 1)
    .eq(n)
    .then(e => cy.get(select)
      .select(e.text()))
})
