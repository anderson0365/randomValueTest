export class TodoPage {
  navigate() {
    cy.visit("http://localhost:2368/ghost/#/signin");
    cy.wait(1000);
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  }

  login(username, password) {
    cy.get("input[name='identification']").type(username, { force: true });
    cy.wait(1500);

    cy.get("input[name='password']").type(password, { force: true });
    cy.wait(1000);

    this.clickBoton(".login", 12000);

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  }

  clickBoton(selectorButton, wait) {
    cy.get(selectorButton).click({ force: true });
    cy.wait(wait);
  }

  typeInElement(element, text) {
    cy.get(element).type(text, { force: true });
  }

  clickElement(element, text) {
    cy.get(element).click({ force: true });
    cy.get(element).invoke("text", text, { force: true });
  }

  clearElement(element) {
    cy.get(element).clear();
  }
}
