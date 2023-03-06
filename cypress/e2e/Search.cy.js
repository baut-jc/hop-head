describe('Form page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/search')
  })
  
  it('should display a form', () => {
    cy.get('form').should('be.visible')
  })

  it('should have a navigation', () => {
    cy.get('nav')
    cy.get(':nth-child(1) > a').contains('Home')
    cy.get(':nth-child(2) > a').contains('Search')
    cy.get(':nth-child(3) > a').contains('Breweries')
    cy.get(':nth-child(4) > a').contains('BrewFaves')
  })
  
})