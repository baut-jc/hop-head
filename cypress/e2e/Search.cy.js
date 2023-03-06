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
  
  it('should require input', ()=> {
    cy.get('[type="submit"]').click()
    cy.get('input:invalid').should('have.length', 1)
    cy.get('input').then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.')
    })
  })

  it('should take in a US zipCode', ()=> {
    cy.get('[name="zipCode"]').type('87114')
  })

  it('should display breweries in the area based on zip Code input', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://api.openbrewerydb.org/breweries?by_postal=87114',
    }, { fixture: 'breweries' })

    cy.get('form > input').type('87114')
      cy.get('button').click()
    cy.url().should('eq','http://localhost:3000/breweries/87114?zipCode=87114')
  })
})
