describe('Map page', () => {
  beforeEach(()=>{
    cy.intercept({
      method: 'GET',
      url: 'https://api.openbrewerydb.org/breweries?by_postal=87114',
    }, { fixture: 'breweries' })
    cy.visit('http://localhost:3000/breweries')
  })
  
  it('should have a navigation', () => {
    cy.get('nav')
    cy.get(':nth-child(1) > a').contains('Home')
    cy.get(':nth-child(2) > a').contains('Search')
    cy.get(':nth-child(3) > a').contains('Breweries')
    cy.get(':nth-child(4) > a').contains('BrewFaves')
  })

  it('should display breweries', () => {
    cy.get('nav')
    cy.get(':nth-child(3) > a').contains('Breweries')
      .click()
    cy.url().should('eq', 'http://localhost:3000/breweries/')
    cy.intercept({
        method: 'GET',
        url: 'https://api.openbrewerydb.org/breweries?by_postal=87114',
      }, { fixture: 'breweries.json' })
      cy.get(':nth-child(10) > .brew-details > h1').contains('101 Brewery')
  })
})
