export class GhostTesterRandom{
    constructor(email, password, startUrl, dateObject){
        this.email = email;
        this.password = password;
        this.startUrl = startUrl;
        this.dateObject = dateObject;
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

}
