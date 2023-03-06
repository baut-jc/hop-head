describe('BrewFaves display', () => {
    beforeEach(()=>{
      cy.intercept({
        method: 'GET',
        url: 'https://api.openbrewerydb.org/breweries?by_postal=87114&id=101-brewery',
      }, { fixture: 'breweries' })
      cy.visit('http://localhost:3000/favorites')
    })
  
    it('should have a navigation', () => {
      cy.get('nav')
      cy.get(':nth-child(1) > a').contains('Home')
      cy.get(':nth-child(2) > a').contains('Search')
      cy.get(':nth-child(3) > a').contains('Breweries')
      cy.get(':nth-child(4) > a').contains('BrewFaves')
    })

    it('should show the Saved Faves', () => {
      cy.get('p').contains('You haven\'t saved anything!')
    })

    it('should contain results', () => {
      cy.intercept({
          method: 'GET',
          url: 'https://api.openbrewerydb.org/breweries?by_postal=87114&id=101-brewery'
      }, { fixture: 'savedFaves' })
      cy.visit('http://localhost:3000/search')
      cy.get('form > input').type('87114')
      cy.get('button').click()
      cy.wait(1000)
      cy.get('[href="/favorites"]').click()
      cy.get('p')
      cy.contains('You haven\'t saved anything!')
  })
})