import { TodoPage } from "./todo-page";
export class Pagina {
  constructor() {
    this.todoPage = new TodoPage();
  }

  navigate() {
    this.todoPage.navigate();
  }

  login(username, password) {
    this.todoPage.login(username, password);
  }

  clickSeccionPages() {
    this.todoPage.clickBoton("a[href='#/pages/']", 1000);
  }

  clickBotonCrearPage() {
    cy.get("a[href='#/editor/page/']").then(($links) => {
      var firstLink = $links.get(0);

      if (!Cypress.dom.isHidden(firstLink)) {
        cy.wrap(firstLink).click({ force: true });
      }
    });
  }

  clickBotonMetaData() {
    cy.get("li[class='nav-list-item']").then(($lis) => {
      var firstLi = $lis.get(0);

      this.todoPage.clickBoton(firstLi, 1000);
    });
  }

  enterTituloPage(title) {
    if (title !== "") {
      this.todoPage.typeInElement(".gh-editor-title", title);
    } else {
      this.todoPage.clickElement(".gh-editor-title", title);
    }

    this.todoPage.clickBoton("body", 50);
  }

  enterBodyPage(body) {
    this.todoPage.clickElement(".koenig-editor p", body);
    this.todoPage.clickBoton("body", 50);
  }

  enterTextInSettingElement(text, element) {
    if (text !== "") {
      this.todoPage.typeInElement(element, text);
    } else {
      this.todoPage.clickElement(element, text);
    }

    this.todoPage.clickBoton("body", 50);
  }

  publicarPage() {
    this.todoPage.clickBoton(".gh-publishmenu-trigger", 1000);
    this.todoPage.clickBoton(".gh-publishmenu-button", 1000);
  }

  programarPublicacionPage() {
    this.todoPage.clickBoton(".gh-publishmenu-trigger", 1000);
    cy.get(".gh-date-time-picker").then(($pickers) => {
      var picker = $pickers.get(0);
      if (!Cypress.dom.isHidden(picker)) {
        cy.wrap(picker).click({ force: true });
      }
    });
    this.todoPage.clickBoton(".gh-publishmenu-button", 1000);
  }

  verPreviewPage() {
    this.todoPage.clickBoton("button[title='Settings']", 1000);
    this.todoPage.clickBoton(".post-view-link", 1000);
  }

  validarPageCreado(titulo) {
    cy.wait(1000);
    cy.get(".gh-list-data.gh-post-list-title h3").should(($title) => {
      expect($title.first()).to.contain(titulo);
    });
  }

  clickPageCreada() {
    cy.get(".gh-list-data.gh-post-list-title h3").then(($pages) => {
      var firstPage = $pages.get(0);
      if (!Cypress.dom.isHidden(firstPage)) {
        cy.wrap(firstPage).click({ force: true });
      } else {
        this.todoPage.clickBoton(firstPage, 1000);
      }
    });
  }

  eliminarPageCreada() {
    this.todoPage.clickBoton("button[title='Settings']", 1000);
    this.todoPage.clickBoton(".settings-menu-delete-button", 1000);
    this.todoPage.clickBoton(".gh-btn-red", 1000);
    cy.wait(1000);
  }

  logout() {
    this.todoPage.clickBoton(".gh-user-avatar", 1000);
    this.todoPage.clickBoton("a[href='#/signout/']", 50);
  }

  goToCreatePage(email, password) {
    this.login(email, password);
    this.clickSeccionPages();
    this.clickBotonCrearPage();
  }

  createPageWithTitle(email, password, title) {
    this.goToCreatePage(email, password);
    this.enterTituloPage(title);
  }

  tryCreatePageWithTitle(email, password, title) {
    this.goToCreatePage(email, password);
    this.enterTituloPage(title);
    this.closeCreatePage();
  }

  closeCreatePage(){
    this.clickSeccionPages();
    this.todoPage.clickBoton(".gh-btn-red", 1000);
    this.logout();
    this.navigate();
  }

  createPageWithBody(email, password, body) {
    this.goToCreatePage(email, password);
    this.enterBodyPage(body);
  }

  createPageWithCustomExcerpt(email, password, customExcerpt) {
    this.goToCreatePage(email, password);
    this.enterTextInSettingElement(
      customExcerpt,
      ".post-setting-custom-excerpt"
    );
    this.enterTituloPage("");
  }

  tryCreatePageWithCustomExcerpt(email, password, customExcerpt) {
    this.createPageWithCustomExcerpt(email, password, customExcerpt);
    this.closeCreatePage();
  }

  createPageWithSlug(email, password, slug) {
    this.goToCreatePage(email, password);
    this.enterTextInSettingElement(slug, ".post-setting-slug");
    this.enterTituloPage("");
  }

  createPageWithMetaTitle(email, password, metaTitle) {
    this.goToCreatePage(email, password);
    this.todoPage.clickBoton("button[title='Settings']", 1000);
    this.clickBotonMetaData();
    this.enterTextInSettingElement(metaTitle, ".post-setting-meta-title");
    this.enterTituloPage("");
  }

  tryCreatePageWithMetaTitle(email, password, metaTitle){
    this.createPageWithMetaTitle(email, password, metaTitle);
    this.closeCreatePage();
  }

  createPageWithMetaDescription(email, password, metaDescription) {
    this.goToCreatePage(email, password);
    this.todoPage.clickBoton("button[title='Settings']", 1000);
    this.clickBotonMetaData();
    this.enterTextInSettingElement(
      metaDescription,
      ".post-setting-meta-description"
    );
    this.enterTituloPage("");
  }

  tryCreatePageWithMetaDescription(email, password, metaDescription){
    this.createPageWithMetaDescription(email, password, metaDescription);
    this.closeCreatePage();
  }

  validateCreatedPage(email, password, title) {
    this.login(email, password);
    this.clickSeccionPages();
    this.validarPageCreado(title);
    cy.wait(1000);
    this.clickPageCreada();
    this.eliminarPageCreada();
    this.logout();
    this.navigate();
  }
}
