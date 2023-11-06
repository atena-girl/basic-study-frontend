describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/selectComponent')
    cy.contains("Home").click()
  })
})