describe('Index', () => {
  it('navigate to coin details page', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Crypto App');
    cy.contains('Bitcoin').click();

    cy.contains('Rank #1');
  });

  it('search coin', () => {
    cy.visit('http://localhost:3000/');

    cy.get('input').click();
    cy.contains('Cryptocurrencies');

    cy.get('input').type('bsv');

    cy.contains('Bitcoin SV (BSV)').click();
    cy.contains('Rank #70');
  });

  it('navigate to Top10 page', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Top 10').click();
    cy.location().should((loc) => {
      expect(loc.origin).to.eq('http://localhost:3000');
      expect(loc.port).to.eq('3000');
      expect(loc.protocol).to.eq('http:');
      expect(loc.pathname).to.eq('/top10');
      expect(loc.toString()).to.eq('http://localhost:3000/top10');
    });
  });

  it('navigate to Watchlist page', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Top 10').click();
    cy.location().should((loc) => {
      expect(loc.origin).to.eq('http://localhost:3000');
      expect(loc.port).to.eq('3000');
      expect(loc.protocol).to.eq('http:');
      expect(loc.pathname).to.eq('/watchlist');
      expect(loc.toString()).to.eq('http://localhost:3000/watchlist');
    });
  });
});
