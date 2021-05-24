import { TodoPage } from "./todo-page";

export class EditPostPage {
  constructor() {
    this.todoPage = new TodoPage();
  }

  navigate() {
    this.todoPage.navigate();
  }

  login(username, password) {
    this.step++;
    this.todoPage.login(username, password, this.scenario, this.step);
    this.step = this.step + 2;
  }

  infoParaPost(postTitle) {
    this.todoPage.typeInElement(".gh-editor-title", postTitle);
  }

  clickSeccionPosts() {
    cy.get("a[href='#/posts/']").first().click();
  }

  clickBotonVolver() {
    this.todoPage.clickBoton("a[href='#/posts/'].blue.link.fw4.flex", 1000);
  }

  getOnePost() {
    cy.get("a[href='#/posts/']").first().click();
    cy.wait(1000);
    cy.get(".gh-list-data.gh-post-list-title").first().click({ force: true });
  }

  validarPostEditado(tituloPost) {
    this.getOnePost(tituloPost);
  }

  clickPublishMenu() {
    this.todoPage.clickBoton(".gh-publishmenu .gh-publishmenu-trigger", 1000);
  }

  clickUpdateButton() {
    this.todoPage.clickBoton(".gh-publishmenu-button", 1000);
  }

  clickUnpublishButton() {
    this.todoPage.clickBoton(".gh-publishmenu-radio:not(.active)", 1000);
  }

  clickConfigButton() {
    this.todoPage.clickBoton(".post-settings", 500);
  }

  setExcerpt(text) {
    cy.get("textarea[name='post-setting-custom-excerpt']").type(text, {
      force: true,
    });
  }

  clickCloseConfigButton() {
    this.todoPage.clickBoton(".settings-menu-header-action", 500);
  }

  setUrlPost(url) {
    cy.get("input[name='post-setting-slug']").type(url, {
      force: true,
    });
  }

  clickDeletePost() {
    this.todoPage.clickBoton(".settings-menu-delete-button", 500);
    this.todoPage.clickBoton(".gh-btn-red", 500);
  }

  editPostWithTitle(email, password, title) {
    this.goToEditPost(email, password);
    this.enterTitlePost(title);
  }

  editPostClearWithTitle(email, password, title) {
    this.goToEditPost(email, password);
    this.removeTitlePost();
    this.enterTitlePost(title);
  }

  editPostRemoveTitle(email, password) {
    this.goToEditPost(email, password);
    this.removeTitlePost();
  }

  removeTitlePost() {
    this.todoPage.clearElement(".gh-editor-title");
    this.todoPage.clickBoton("body", 50);
  }

  goToEditPost(email, password) {
    this.login(email, password);
    this.clickSeccionPosts();
    this.getOnePost();
  }

  removeBodyPost() {
    this.todoPage.clickElement(".koenig-editor__editor p", "");
    this.todoPage.clearElement(".koenig-editor__editor p");
    this.todoPage.clickBoton("body", 50);
  }

  logout() {
    this.todoPage.clickBoton(".gh-user-avatar", 1000);
    this.todoPage.clickBoton("a[href='#/signout/']", 50);
  }

  enterTitlePost(title) {
    if (title !== "") {
      this.todoPage.typeInElement(".gh-editor-title", title);
    } else {
      this.todoPage.clickElement(".gh-editor-title", title);
    }

    this.todoPage.clickBoton("body", 50);
  }

  enterBodyPost(body) {
    this.todoPage.clickElement(".koenig-editor__editor p", body);
    this.todoPage.clickBoton("body", 50);
  }

  validateUpdatedPost(email, password, title) {
    this.login(email, password);
    this.clickSeccionPosts();
    this.validarPostEditado(title);
    cy.wait(1000);
    this.clickPostEditado();
    this.clickBotonVolver();
    this.logout();
    this.navigate();
  }

  validarPostEditado(titulo) {
    cy.wait(1000);
    cy.get(".gh-list-data.gh-post-list-title h3").should(($title) => {
      expect($title.first()).to.contain(titulo);
    });
  }

  clickPostEditado() {
    cy.get(".gh-list-data.gh-post-list-title h3").then(($posts) => {
      var firstPost = $posts.get(0);
      if (!Cypress.dom.isHidden(firstPost)) {
        cy.wrap(firstPost).click({ force: true });
      } else {
        this.todoPage.clickBoton(firstPost, 1000);
      }
    });
  }

  editPostWithBody(email, password, body) {
    this.goToEditPost(email, password);
    this.enterBodyPost(body);
  }

  editPostRemoveBody(email, password) {
    this.goToEditPost(email, password);
    this.removeBodyPost();
  }

  editPostWithCustomExcerpt(email, password, customExcerpt) {
    this.goToEditPost(email, password);
    this.enterTextInSettingElement(
      customExcerpt,
      ".post-setting-custom-excerpt"
    );
    this.enterTitlePost("");
  }

  enterTextInSettingElement(text, element) {
    if (text !== "") {
      this.todoPage.typeInElement(element, text);
    } else {
      this.todoPage.clickElement(element, text);
    }

    this.todoPage.clickBoton("body", 50);
  }

  editPosWithSlug(email, password, slug) {
    this.goToEditPost(email, password);
    this.enterTextInSettingElement(slug, ".post-setting-slug");
    this.enterTitlePost("");
  }

  tryEditPostWithCustomExcerpt(email, password, customExcerpt) {
    this.editPostWithCustomExcerpt(email, password, customExcerpt);
    this.closeEditarPost();
  }

  closeEditarPost() {
    this.clickSeccionPosts();
    this.todoPage.clickBoton(".gh-btn-red", 1000);
    this.logout();
    this.navigate();
  }

  tryEditPostWithTitle(email, password, title) {
    this.goToEditPost(email, password);
    this.enterTitlePost(title);
    this.closeEditarPost();
  }

  editPostWithMetaTitle(email, password, meta) {
    this.goToEditPost(email, password);
    this.todoPage.clickBoton("button[title='Settings']", 1000);
    this.clickBotonMetaData();
    this.enterTextInSettingElement(meta, ".post-setting-meta-title");
    this.enterTitlePost("");
  }

  editPostWithMetaBody(email, password, meta) {
    this.goToEditPost(email, password);
    this.todoPage.clickBoton("button[title='Settings']", 1000);
    this.clickBotonMetaData();
    this.enterTextInSettingElement(meta, ".post-setting-meta-description");
    this.enterTitlePost("");
  }

  clickBotonMetaData() {
    cy.get("li[class='nav-list-item']").then(($lis) => {
      var firstLi = $lis.get(0);

      this.todoPage.clickBoton(firstLi, 1000);
    });
  }
}
