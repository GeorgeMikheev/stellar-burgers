describe('Burger constructor tests', () => {
  const addIngredient = () => {
    cy.get('button').should('have.text', 'Добавить').click();
  };

  const findIngredient = (type: string) => cy.get(`[data-type="${type}"]`);
  const findDataCY = (type: string) => cy.get(`[data-cy="${type}"]`);

  const openPopup = () => {
    findIngredient('main').first().click();
  };

  beforeEach(() => {
    cy.visit('/');

    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' }).as(
      'waitIngredients'
    );
    cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' }).as(
      'waitUser'
    );

    localStorage.setItem('refreshToken', 'testLSToken');
    cy.setCookie('accessToken', 'testCookieToken');

    cy.wait('@waitIngredients');
    cy.wait('@waitUser');
  });

  afterEach(() => {
    localStorage.removeItem('refreshToken');
    cy.clearCookie('accessToken');
  });

  it('Test adding the ingredient', () => {
    findIngredient('main').first().within(addIngredient);
    findIngredient('bun').first().within(addIngredient);
    findIngredient('sauce').first().within(addIngredient);

    cy.contains('Выберите булки').should('not.exist');
    cy.contains('Выберите начинку').should('not.exist');
  });

  it('Testing the opening and closing of the modal window', () => {
    openPopup();
    findDataCY('popup').as('popup');
    cy.get('@popup').should('be.visible');
    findDataCY('close-button').click();
    cy.get('@popup').should('not.exist');
  });

  it('Testing the closing of the modal window by click on overly', () => {
    openPopup();
    findDataCY('popup').as('popup');
    findDataCY('overlay').click({ force: true });
    cy.get('@popup').should('not.exist');
  });

  it('Test of the creation of the order', () => {
    findIngredient('main').first().within(addIngredient);
    findIngredient('bun').first().within(addIngredient);
    findIngredient('sauce').first().within(addIngredient);

    cy.contains('Выберите булки').should('not.exist');
    cy.contains('Выберите начинку').should('not.exist');

    cy.intercept('POST', 'api/orders', { fixture: 'order.json' }).as('order');

    findDataCY('order-button').click();

    cy.wait('@order');
    findDataCY('popup').should('be.visible');
    findDataCY('close-button').click();
    findDataCY('popup').should('not.exist');

    cy.contains('Выберите булки').should('be.visible');
    cy.contains('Выберите начинку').should('be.visible');
  });
});
