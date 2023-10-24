// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('.login_logo');
    cy.get('[data-test="username"]');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.product_label');
  })
})