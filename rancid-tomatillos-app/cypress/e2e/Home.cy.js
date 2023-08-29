import movieData from '../fixtures/movieData.json'


describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 201,
            body: movieData
        })
    })

    it('The user should see a header and 3 movie cards', () => {
        cy.get('.header-container').should('be.visible')
        .get('.movies-container').find('.movie-card').should('have.length', 3)
        .get('.movie-card').first().contains('.rating-display', 4.0)
        .get('.movie-card').last().contains('.rating-display', 7.0)
        .get('.movie-card').first().contains('h3', 'Black')
        .get('.movie-card').last().contains('h3', 'R.I.P.D. 2')
        
    })
        
    }
) 