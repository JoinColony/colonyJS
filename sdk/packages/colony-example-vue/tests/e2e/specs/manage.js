
describe('Create view', () => {
  it('visits the create view', () => {
    cy.visit('/create')
    cy.contains('h1', 'This is an about page')
  })
})
