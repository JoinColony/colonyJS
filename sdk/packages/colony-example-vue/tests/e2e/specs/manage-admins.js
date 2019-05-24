const userAddress = '0xb77d57f4959eafa0339424b83fcfaf9c15407461'

describe('Home view', () => {
  before(() => {
    cy.setColony()
    cy.get('a').contains('Admins').click()
  })
  it('Add an admin', () => {
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
