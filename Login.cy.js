describe("Sign In", () => {
  beforeEach(() => {
    cy.viewport(1280, 786);
    cy.visit("https://www.daraz.pk");
  });
  it("Login with Invalid Data", () => {
    cy.contains("login").click();
    cy.contains("Error").should("not.exist");
    cy.get("div.mod-login-input-loginName input").type("haleemasaud3gmail.com");
    cy.get("div.mod-input-password input").type("Halima1234");
    cy.get("div.mod-login-btn > button").click();
    cy.contains("Error").should("exist");
  });
  it("Login ", ()=>{
    cy.contains("login").click({force:true});
    cy.contains("Error").should("not.exist");
    cy.get('.mod-login-input-loginName > input').type("haleemasaud3@gmail.com");
    cy.get('.mod-input-password > input').type("Halima1234");
    cy.get('.next-btn').click()  
  });

});

