describe('Home view', () => {
  before(() => {
    cy.setColony()
    cy.get('a').contains('Domains').click()
  })
  it('Add domain', () => {
    cy.get('form.add-domain-form').within(() => {
      cy.get('button').click()
    })
  })
  it('Fund domain', () => {
    cy.get('form.fund-domain-form').within(() => {
      cy.selectOption('select', 2)
      cy.get('button').click()
    })
  })
  // it('Remove an admin', () => {
  //   cy.get('a').contains('Admins').click()
  //   cy.get('form.remove-admin-form').within(() => {
  //     cy.get('input.address').type(userAddress)
  //     cy.get('button').click()
  //   })
  // })
})
