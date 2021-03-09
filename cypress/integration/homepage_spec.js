describe('Loading and Error Component', () => {
  beforeEach(() => {
    cy.fixture("mockUpcoming.json")
      .then((response) => {
        cy.intercept("https://ll.thespacedevs.com/2.0.0/launch/upcoming", {
          statusCode: 200,
          delay: 3000,
          body: response
        })
      })
    cy.fixture("mockRecent.json")
      .then((response) => {
        cy.intercept("https://ll.thespacedevs.com/2.0.0/launch/previous", {
          statusCode: 200,
          delay: 3000,
          body: response
        })
      })
    cy.visit('http://localhost:3000/rocket-docket/')
  })

  it('should show the header and error component if a bad path is entered, and allow the user to return to home', () => {
    cy.visit('http://localhost:3000/rocket-docket/some-bad-path')
    cy
      .get('.site-title').should('have.text', 'Rocket Docket')
      .get('.tagline').should('have.text', 'A docket of upcoming rocket launches.')
    cy
      .get('.error-logo').should('have.attr', 'src', '/static/media/rocket-docket-logo.741c2a33.png')
      .get('.error-message').should('have.text', 'Oops! An error with message"404 Page not found"has occured.')
      .get('.error-back-button').should('have.text', 'Back to Home').click()
      cy.url().should('eq', 'http://localhost:3000/rocket-docket')
  })

  it('should display the header and a loading component while waiting for fetch response', () => {
    cy.visit('http://localhost:3000/rocket-docket/')
    cy
      .get('.site-title').should('have.text', 'Rocket Docket')
      .get('.tagline').should('have.text', 'A docket of upcoming rocket launches.')
    cy
      .get('.loading-screen').should('have.text', 'Loading...')
      .get('.loading-image').should('have.attr', 'src', '/static/media/rocket-docket-logo.741c2a33.png')
  })
})