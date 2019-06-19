describe('Manage tasks', () => {
  before(() => {
    cy.setColony()
    cy.get('a').contains('Tasks').click()
  })
  it('Create task', () => {
    cy.get('form.create-task-form').within(() => {
      cy.selectOption('select.domain', 1)
      cy.selectOption('select.skill', 1)
      cy.get('input.title').type('Do something')
      cy.get('input.description').type('This is a description')
      cy.get('input.date').type('2020-05-05')
      cy.get('button').click()
    })
  })
  it('Fund tasks', () => {
    cy.get('form.fund-task-form').within(() => {
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
