describe('Home view', () => {
  before(() => {
    cy.setColony()
    cy.get('a').contains('Funding').click()
  })
  it('Add domain', () => {
    cy.get('form.move-funding-form').within(() => {
      cy.get('input.from').type(1)
      cy.get('input.to').type(2)
      cy.get('input.amount').type(3)
      cy.get('button').click()
    })
  })
  it('Claim funds', () => {
    cy.get('form.claim-funding-form').within(() => {
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
