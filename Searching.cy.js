describe("Search and Filter Products", () => {
    beforeEach(() => {
      cy.viewport(1280, 786);
      cy.visit("https://www.daraz.pk");
    })
    it("Searching via TextBox", () => {
      cy.get("input#q")
      .should("exist")
      .type("Drones");
      cy.get("button.search-box__button--1oH7")
      .click({force: true});
      cy.get("div.tips--QRnmZ")
      .should("exist")
      .then(element => {
      expect(element.text()).to.include("Drones")
      })
    });
    it("Category Wise Filtering", () => {
      cy.visit("https://www.daraz.pk")
      cy.contains("Electronic Devices")
      .should("exist")
      .click();
      cy.contains("Smart Phones")
      .trigger("mouseover");
      cy.contains("Apple iPhones")
      .click({force: true});
      cy.get(".title--Xj2oo")
      .should("exist")
      .should("include.text", "Apple iPhones")
    });
    it("Product Filtering", () => {
      let brand = "";
      cy.get("input#q")
      .should("exist")
      .type("Drones");
      cy.get("button.search-box__button--1oH7")
      .click()
      cy.get('[data-spm-click="gostr=/lzdse.result.list_grid;locaid=list"] > .daraz-search-common-icon').click()
    });
   });
   