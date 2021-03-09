describe('homepage', () => {
  beforeEach(() => {
    cy.fixture("mockUrls.json")
      .then((response) => {
        cy.intercept("http://localhost:3001/api/v1/urls", {
          statusCode: 200,
          body: response
        })
      })
    cy.fixture("mockPost.json")
      .then((response) => {
        cy.intercept("POST", "http://localhost:3001/api/v1/urls", {
          statusCode: 200,
          body: response
        })
      })
    cy.visit('http://localhost:3000/rocket-docket/')
  })

  it('should show the page title and existing urls', () => {
    cy.visit('http://localhost:3000/')
    cy
      .get('.site-title').should('have.text', 'URL Shortener')
      .get('.url').should('have.length', 2)
      .get('.url').first().within(() => {
        
        cy.get('.url-title').should('have.text', 'Awesome photo')
        cy.get('.short-url').should('have.attr', 'href', 'http://localhost:3001/useshorturl/1')
        cy.get('.short-url').should('have.text', 'http://localhost:3001/useshorturl/1')
        cy.get('.long-url').should('have.text', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')

      })
  })

  it('should show the form and inputs', () => {
    cy.visit('http://localhost:3000/')
    cy
      .get('.site-title').should('have.text', 'URL Shortener')
      .get('.url').should('have.length', 2)
      .get('.url').first().within(() => {
        
        cy.get('.url-title').should('have.text', 'Awesome photo')
        cy.get('.short-url').should('have.attr', 'href', 'http://localhost:3001/useshorturl/1')
        cy.get('.short-url').should('have.text', 'http://localhost:3001/useshorturl/1')
        cy.get('.long-url').should('have.text', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')

      })
  })
})