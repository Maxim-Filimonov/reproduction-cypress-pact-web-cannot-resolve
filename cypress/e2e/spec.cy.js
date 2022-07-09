const pact = require("@pact-foundation/pact-web");
describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("save to reload").should("be.visible");
  });
});
