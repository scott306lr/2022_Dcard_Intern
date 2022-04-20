describe('GitRepo App Tests', () => {
  it('Routing test - repository list', () => {
    cy.visit('/')
    cy.get('input').type('scott306lr{enter}')
    cy.location('pathname').should('eq', '/users/scott306lr/repos')
    cy.get('main').find('header').should('include.text', 'scott306lr')
  })

  it('repository list - includes "name", "stargazers_count"', () => {
    cy.visit('/users/scott306lr/repos')
    //repository.name
    cy.get('ul').find('li').first().find('h1[id=repo-name]').should('exist')
    //repository.stargazers_count
    cy.get('ul')
      .find('li')
      .first()
      .find('span[id=star-count] > p')
      .should('exist')
  })

  it('repository list - redirects correctly after click', () => {
    cy.visit('/users/scott306lr/repos')
    cy.get('ul')
      .find('li')
      .first()
      .find('h1')
      .then(($li) => {
        const text = $li.text()
        cy.wrap($li).click()
        cy.location('pathname').should('eq', `/users/scott306lr/repos/${text}`)
      })
  })

  it('repository list - initials 10 repos, loads 10 more when scrolls to end', () => {
    cy.visit('/users/Dcard/repos')
    cy.get('ul').find('li').should('have.length', 10)
    cy.get('ul').scrollTo('bottom')
    cy.get('ul').find('li').should('have.length', 20)
  })

  it('single repository page - includes "full_name", "description", "stargazers_count"', () => {
    cy.visit('/users/scott306lr/repos/2022_Dcard_Intern')
    //repository.full_name
    cy.get('h1[id=full_name]').should(
      'include.text',
      'scott306lr/2022_Dcard_Intern'
    )
    //repository.description
    cy.get('p[id=description]').should(
      'include.text',
      '2022 Web Frontend Intern Homework'
    )
    //repository.stargazers_count
    cy.get('span[id=star-count] > p').should('exist')
  })

  it('single repository page - contains href to githubpage', () => {
    cy.visit('/users/scott306lr/repos/2022_Dcard_Intern')
    cy.get('a[href="https://github.com/scott306lr/2022_Dcard_Intern"]').should(
      'exist'
    )
  })

  it('API 404 error handling', () => {
    cy.visit('/users/scott306lr/repos/UnknownRepoName')
    cy.get('main[class^=hidden]').should('exist')
    cy.get('h1[id=404]').should('exist')
  })

  it('View port visibility test', () => {
    cy.visit('/users/scott306lr/repos/2022_Dcard_Intern')

    const sizes = [
      [1920, 1080],
      [1280, 720],
      [1024, 600],
      [768, 480],
      [375, 320],
      [320, 240],
    ]
    const phones = ['macbook-16', 'iphone-x', 'iphone-6', 'iphone-5']
    sizes.forEach((size) => {
      const [width, height] = size
      cy.viewport(width, height)
      cy.get('h1[id=full_name]').should('be.visible')
      cy.get('p[id=description]').should('be.visible')
      cy.get('span[id=star-count] > p').should('be.visible')
    })
    phones.forEach((phone) => {
      cy.viewport(phone)
      cy.get('h1[id=full_name]').should('be.visible')
      cy.get('p[id=description]').should('be.visible')
      cy.get('span[id=star-count] > p').should('be.visible')
    })
  })

  //done but test case not written - needs to stub api call, don't know how to do that by cypress
  it.skip('API 403 limit exceeded handling')
})
