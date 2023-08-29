import movieData from '../fixtures/movieData.json'


describe('Selected Movie Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 201,
            body: movieData
        })
        .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
            statusCode: 201,
            body: {
                "movie": {
                "id": 436270,
                "title": "Black Adam",
                "poster_path": "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
                "release_date": "2022-10-19",
                "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
                "genres": [
                "Action",
                "Fantasy",
                "Science Fiction"
                ],
                "budget": 200000000,
                "revenue": 384571691,
                "runtime": 125,
                "tagline": "The world needed a hero. It got Black Adam.",
                "average_rating": 4
                }
                }
        })
        .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
            statusCode: 201,
            body: {
                "videos": [
                {
                "id": 15,
                "movie_id": 436270,
                "key": "mkomfZHG5q4",
                "site": "YouTube",
                "type": "Trailer"
                },
                ]
                }
        })
    })

    it('Should click first movie and display data', () => {
        cy.get('.movie-card').first().click()
        .get('.video-container').should('be.visible')
        .get('.selectedMovie').contains('h3', 'Black Adam')
        .get('.selectedMovie').contains('p', 'Action, Fantasy')
        .get('.selectedMovie').contains('p', '125 minutes')
        .get('.selectedMovie').contains('p', 'Nearly 5,000 years')
        .get('.back-button').should('be.visible')
        .get('.back-button').click()
        .get('.video-container').should('not.exist')
        .get('.back-button').should('not.exist')
    })
    }
) 