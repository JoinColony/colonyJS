describe('Home view', () => {
  before(() => {
    cy.setColony()
    cy.get('a').contains('Token').click()
  })
  it('Mints tokens', () => {
    cy.get('form.mint-tokens-form').within(() => {
      cy.get('input.amount').type(10)
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
