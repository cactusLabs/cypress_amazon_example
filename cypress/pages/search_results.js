class search_results {

    elements = {
        firstSearchResult: () => cy.get('[data-image-index="1"].s-image').eq(0),
    }
}

module.exports = new search_results();