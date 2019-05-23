// https://docs.cypress.io/api/introduction/api.html

describe('Home view', () => {
  it('Visit home', () => {
    cy.visit('/')
  })
  it('Create a token', () => {
    cy.get('form.create-token-form').within(() => {
      cy.get('input.name').type('0xB711F5DD8401006C89D4a1CCa064c574f9774618')
      cy.get('input.symbol').type('qwe')
      return cy.get('button').click()
    })
  })
  it('Create a colony', () => {
    cy.get('form.create-colony-form').within(() => {
      cy.get('input.address').type('0xB711F5DD8401006C89D4a1CCa064c574f9774618')
      cy.get('button').click()
    })
  })
})
