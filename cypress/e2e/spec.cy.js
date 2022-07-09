describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("save to reload").should("be.visible");
  });
});
