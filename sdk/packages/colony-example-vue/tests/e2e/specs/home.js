// https://docs.cypress.io/api/introduction/api.html

describe('Home view', () => {
  it('Visit home', () => {
    cy.visit('/')
  })
  it('Create a token', () => {
    const stub = cy.stub()
    cy.on ('window:alert', stub)
    cy.get('form.create-token-form').within(() => {
      cy.get('input.name').type('qwe')
      cy.get('input.symbol').type('qwe')
      cy.get('button').click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('tried to create token')
        })
    })
  })
  it('Create a colony', () => {
    const stub = cy.stub()
    cy.on ('window:alert', stub)
    cy.get('form.create-colony-form').within(() => {
      cy.get('input.address').type('qwe')
      cy.get('button').click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('tried to create colony')
        })
    })
  })
})
