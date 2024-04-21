describe("Sign In", () => {
  beforeEach(() => {
    cy.viewport(1280, 786);
    cy.visit("https://www.daraz.pk/");
    cy.contains("login").click();
    cy.get('.mod-login-input-loginName > input').type("abc3@gmail.com")
    cy.get('.mod-input-password > input').type("Pak12345")
  });

  it("Check Product Adding to cart", () => {
    cy.get("input#q").should("exist").type("Keyboards");
    cy.get("button.search-box__button--1oH7").click({ force: true });
    cy.get(".gridItem--Yd0sa a").first().click();
    cy.contains("Add to Cart").click();
  });
});
  