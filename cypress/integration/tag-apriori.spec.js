/// <reference types="cypress" />
import { GhostTesterRandom } from '../page-object/tags-random-page';
import config from '../config'
import { TagsRandomData } from '../page-object/tags-api-random';

context('Validar funcionalidad de crear/modificar TAG (datos apriori)...', async () => {

    let testerObject = new GhostTesterRandom(
        config.email,
        config.password,
        "http://localhost:2368/ghost/#/signin",
        new Date().toISOString().replace(/:/g, "."),
        config.version
    );

    let apriori = new TagsRandomData('./apriori/api_rand.json', false);

    before(async () => {
        await apriori.requireData();//se lee el archivo con los datos apriori
    });

    describe(`Escenario 17: Crear un tag cuyo parámetro “Name” sea válido, y su parámetro “Meta Title” tenga menos de 70 caracteres`, ()=>{
        let name;
        let metaTitle; 

        before(()=> {
            name = apriori.get('valid_tag');
            metaTitle = apriori.get('msg_69');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, undefined, metaTitle);
        });

        it('Se valida el tag creado...', ()=>{
            testerObject.selectTagsFromManageMenu();
            testerObject.selectATagByItsName(name);
            testerObject.expandMetadataSettings();
            testerObject.validateGreenWordCount(metaTitle.length);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });
    describe(`Escenario 18: Crear un tag cuyo parámetro “Name” sea válido, y su parámetro “Meta Title” tenga 70 caracteres`, ()=>{
        let name;
        let metaTitle; 

        before(()=> {
            name = apriori.get('valid_tag');
            metaTitle = apriori.get('msg_70');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, undefined, metaTitle);
        });

        it('Se valida el tag creado...', ()=>{
            testerObject.selectTagsFromManageMenu();
            testerObject.selectATagByItsName(name);
            testerObject.expandMetadataSettings();
            testerObject.validateGreenWordCount(metaTitle.length);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });
    describe(`Escenario 19: Crear un tag cuyo parámetro “Name” sea válido, y su parámetro “Meta Title” tenga mas de 70 caracteres`, ()=>{
        let name;
        let metaTitle; 

        before(()=> {
            name = apriori.get('valid_tag');
            metaTitle = apriori.get('msg_71');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, undefined, metaTitle);
        });

        it('Se valida el tag creado...', ()=>{
            testerObject.selectTagsFromManageMenu();
            testerObject.selectATagByItsName(name);
            testerObject.expandMetadataSettings();
            testerObject.validateRedWordCount(metaTitle.length);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });
    describe(`Escenario 20: Crear un tag cuyo parámetro “Name” sea válido, y su parámetro “Meta Description” tenga menos de 156 caracteres`, ()=>{
        let name;
        let metaDescription; 

        before(()=> {
            name = apriori.get('valid_tag');
            metaDescription = apriori.get('msg_155');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, undefined, undefined,metaDescription);
        });

        it('Se valida el tag creado...', ()=>{
            testerObject.selectTagsFromManageMenu();
            testerObject.selectATagByItsName(name);
            testerObject.expandMetadataSettings();
            testerObject.validateGreenWordCount(metaDescription.length);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });
    describe(`Escenario 21: Crear un tag cuyo parámetro “Name” sea válido, y su parámetro “Meta Description” tenga 156 caracteres`, ()=>{
        let name;
        let metaDescription; 

        before(()=> {
            name = apriori.get('valid_tag');
            metaDescription = apriori.get('msg_156');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, undefined, undefined,metaDescription);
        });

        it('Se valida el tag creado...', ()=>{
            testerObject.selectTagsFromManageMenu();
            testerObject.selectATagByItsName(name);
            testerObject.expandMetadataSettings();
            testerObject.validateGreenWordCount(metaDescription.length);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });
    describe(`Escenario 22: Crear un tag cuyo parámetro “Name” sea válido, y su parámetro “Meta Description” tenga 156 caracteres`, ()=>{
        let name;
        let metaDescription; 

        before(()=> {
            name = apriori.get('valid_tag');
            metaDescription = apriori.get('msg_157');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, undefined, undefined,metaDescription);
        });

        it('Se valida el tag creado...', ()=>{
            testerObject.selectTagsFromManageMenu();
            testerObject.selectATagByItsName(name);
            testerObject.expandMetadataSettings();
            testerObject.validateRedWordCount(metaDescription.length);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });

    describe(`Escenario 23: Modificar un tag, de tal forma que su parámetro “Meta Title” tenga menos de 70 caracteres`, ()=>{
        let name;
        let oldMetaTitle;
        let newMetaTitle; 

        before(()=> {
            name = apriori.get('valid_tag');
            oldMetaTitle = apriori.get('valid_slug');
            newMetaTitle = apriori.get('msg_69');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, undefined, oldMetaTitle);
        });

        it('Se modifica y valida el tag...', ()=>{
            testerObject.selectTagsFromManageMenu();
            testerObject.selectATagByItsName(name);
            testerObject.createOrModifyTag(undefined, undefined, undefined, undefined, newMetaTitle, undefined, name);
            testerObject.validateGreenWordCount(newMetaTitle.length);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });
    describe(`Escenario 24: Modificar un tag, de tal forma que su parámetro “Meta Title” tenga 70 caracteres`, ()=>{
        let name;
        let oldMetaTitle;
        let newMetaTitle; 

        before(()=> {
            name = apriori.get('valid_tag');
            oldMetaTitle = apriori.get('valid_slug');
            newMetaTitle = apriori.get('msg_70');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, undefined, oldMetaTitle);
        });

        it('Se modifica y valida el tag...', ()=>{
            testerObject.selectTagsFromManageMenu();
            testerObject.selectATagByItsName(name);
            testerObject.createOrModifyTag(undefined, undefined, undefined, undefined, newMetaTitle, undefined, name);
            testerObject.validateGreenWordCount(newMetaTitle.length);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });

    describe(`Escenario 25: Modificar un tag, de tal forma que su parámetro “Meta Title” tenga mas de 70 caracteres`, ()=>{
        let name;
        let oldMetaTitle;
        let newMetaTitle; 

        before(()=> {
            name = apriori.get('valid_tag');
            oldMetaTitle = apriori.get('valid_slug');
            newMetaTitle = apriori.get('msg_71');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, undefined, oldMetaTitle);
        });

        it('Se modifica y valida el tag...', ()=>{
            testerObject.selectTagsFromManageMenu();
            testerObject.selectATagByItsName(name);
            testerObject.createOrModifyTag(undefined, undefined, undefined, undefined, newMetaTitle, undefined, name);
            testerObject.validateRedWordCount(newMetaTitle.length);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });

});