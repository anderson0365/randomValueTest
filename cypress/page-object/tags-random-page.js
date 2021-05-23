export class GhostTesterRandom{
    constructor(email, password, startUrl, dateObject, version){
        this.email = email;
        this.password = password;
        this.startUrl = startUrl;
        this.dateObject = dateObject;
        this.version=version;
        this.stepCounter = 0;
    }

    initNavigation(){
        cy.visit(this.startUrl);
        cy.wait(1000);//Delay to avoid test fail
    }

    logIn(){
        cy.get('input[name="identification"]').focus().type(this.email);
        cy.get('input[name="password"]').focus().type(this.password);
        cy.get('button[type="submit"]').click();
    }

    selectTagsFromManageMenu(){
        cy.get('a[href="#/tags/"]').first().click({force: true});
    }

    selectPostsfromManageMenu(){
        cy.get('a[href="#/posts/"]').first().click({force: true});
    }

    selectPagesFromManageMenu(){
        cy.get('a[href="#/pages/"]').first().click({force: true});
    }

    createAPost(postTitle){
        cy.get('a[href="#/editor/post/"]').first().click({force: true});
        cy.get('textarea[placeholder="Post Title"]').focus().type(postTitle);
        cy.get('div[data-placeholder="Begin writing your post..."]').focus();
    }

    createAPage(pageTitle){
        cy.get('a[href="#/editor/page/"]').first().click({force: true});
        cy.get('textarea[placeholder="Page Title"]').focus().type(pageTitle);
        cy.get('div[data-placeholder="Begin writing your page..."]').focus();
    }

    selectAPostWithItsTitle(postTitle){
        cy.contains(postTitle).click({force: true});
    }

    selectAPageWithItsTitle(pageTitle){
        cy.contains(pageTitle).click({force: true});
    }

    publishAPost(){
        cy.get('div.gh-publishmenu-trigger').click({force: true});
        cy.get('button.gh-publishmenu-button').click();
    }

    associatedTagToPost(tagName){
        cy.get('button.post-settings').click();
        cy.get('#tag-input').focus().type(tagName + '{enter}');
        cy.get('button.close').click();
    }

    detachLastTagFromPost(){
        cy.get('button.post-settings').click();
        cy.get('#tag-input').focus().type('{backspace}');
        cy.get('button.close').click();
    }

    checkTagDontHavePostsRelated(tagSlug){
        cy.get(`a.gh-tag-list-posts-count[href="#/tags/${tagSlug}/"] > span`).should('have.text','0 posts');
    }

    createOrModifyTag(newName, color, slug, description, metaTitle, metaDescription, oldName){
        if(oldName) this.selectATagByItsName(oldName);
        else cy.get('a[href="#/tags/new/"]').click({force: true});
        
        if(newName) cy.get('#tag-name').focus().clear().type(newName);

        if(color) cy.get('input[name="accent-color"]').focus().clear().type(color);
        if(slug) cy.get('#tag-slug').focus().clear().type(slug);
        if(description) cy.get('#tag-description').focus().clear().type(description);
        if(metaTitle || metaDescription){
            this.expandMetadataSettings();
            if(metaTitle) cy.get('input[name="metaTitle"]').focus().clear().type(metaTitle);
            if(metaDescription) cy.get('textarea[name="metaDescription"]').focus().clear().type(metaDescription);
        }
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click();
    }

    expandMetadataSettings(){
        cy.get('section.bb.b--whitegrey.pa5 > div.flex.justify-between > div > button.gh-btn').first().click()
    }

    validateErrorMessage(msg){
        cy.contains(msg)
    }

    validateGreenWordCount(count){
        cy.get('span.word-count[style="color: rgb(159, 187, 88);"]').contains(count);
    }

    validateRedWordCount(count){
        cy.get('span.word-count[style="color: rgb(226, 84, 64);"]').contains(count);
    }

    selectATagByItsName(name){
        cy.contains(name).first().click({force: true});
    }

    removeATagByItsName(name){
        this.selectATagByItsName(name)
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]').click()
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').first().click()
    }

    removeATag(tagSlug){
        cy.get(`a[href="#/tags/${tagSlug.toLowerCase()}/"]`).first().click({force: true});
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]').click()
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').first().click()
    }

    validateTagAssociation(tagName, postTitle){
        cy.get(`a[title="List posts tagged with '${tagName}'"]`).click({force: true});
        cy.contains(postTitle);
    }

    validateTagAssociationWithPage(tagName){
        cy.get(`a[title="List posts tagged with '${tagName}'"] > span`).should('have.text','1 post');
    }

    removePost(){
        cy.get('button.post-settings').click();
        cy.get('button.settings-menu-delete-button').click();
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').first().click();
    }
}
