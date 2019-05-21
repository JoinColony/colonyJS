// https://docs.cypress.io/api/introduction/api.html

describe('Home view', () => {
  it('Visit manage', () => {
    cy.visit('/manage')
  })
  it('Set a colony', () => {
    cy.get('form.manage-colony-form').within(() => {
      cy.get('input.address').type('qwe')
      cy.get('button').click()
    })
  })
})
