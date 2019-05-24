// https://docs.cypress.io/api/introduction/api.html
//
const colonyAddress = Cypress.env('VUE_APP_COLONY_ADDRESS')
const userAddress = '0xb77d57f4959eafa0339424b83fcfaf9c15407461'

describe('Home view', () => {
  it('Visit manage', () => {
    cy.visit('/manage')
  })
  it('Set a colony', () => {
    cy.get('form.manage-colony-form').within(() => {
      cy.get('input.address').type(colonyAddress)
      cy.get('button').click()
    })
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq(`/manage/${colonyAddress}`)
    })
  })

  it('Add an admin', () => {
    cy.get('a').contains('Admins').click()
    cy.get('form.add-admin-form').within(() => {
      cy.get('input.address').type(userAddress)
      cy.get('button').click()
    })
  })
  it('Check an admin', () => {
    cy.get('a').contains('Admins').click()
    cy.get('form.check-admin-form').within(() => {
      cy.get('input.address').type(userAddress)
      cy.get('button').click()
    })
  })
  it('Remove an admin', () => {
    cy.get('a').contains('Admins').click()
    cy.get('form.remove-admin-form').within(() => {
      cy.get('input.address').type(userAddress)
      cy.get('button').click()
    })
  })
})
