/// <reference types="cypress" />
import { GhostTesterRandom } from '../page-object/tags-random-page';
import config from '../config'
import { TagsRandomData } from '../page-object/tags-api-random';

context('Validar funcionalidad de crear/modificar TAG (datos pseudo aleatorios)...', async () => {

    let testerObject = new GhostTesterRandom(
        config.email,
        config.password,
        "http://localhost:2368/ghost/#/signin",
        new Date().toISOString().replace(/:/g, "."),
        config.version
    );

    let pseudo = new TagsRandomData('https://my.api.mockaroo.com/api_rand.json?key=5d1a8540');


    before(async () => {
        await pseudo.requireData();
    });

    describe(`Escenario 1: Crear un tag cuyo parámetro “Name” tenga menos de 191 caracteres`, ()=>{
        let name; 

        before(()=> {
            name = pseudo.get('msg_190');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });

    describe(`Escenario 2: Crear un tag cuyo parámetro “Name” tenga 191 caracteres`, ()=>{
        let name; 

        before(()=> {
            name = pseudo.get('msg_191');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });

    describe(`Escenario 3: Crear un tag cuyo parámetro “Name” tenga mas de 191 caracteres`, ()=>{
        let name; 

        before(()=> {
            name = pseudo.get('msg_192');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name);
            testerObject.validateErrorMessage('Tag names cannot be longer than 191 characters.');
        });
    });

    describe(`Escenario 4: Creo un tag cuyo parámetro “Name” sea válido, y cuyo parámetro “Description” tenga menos de 500 caracteres`, ()=>{
        let name;
        let description; 

        before(()=> {
            name = pseudo.get('valid_tag');
            description = pseudo.get('msg_499');
        });

        before(()=>{
            name = `98267q35408923ji5$%&#%$&#%$%&grfdg4r`;
            description = `a9u9'0423uj5pom2{p'yo9jhq3'906jbom45ep7k'0bj42'397hb094jhptinre`
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, description);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });

    describe(`Escenario 5: Creo un tag cuyo parámetro “Name” sea válido, y cuyo parámetro “Description” tenga 500 caracteres`, ()=>{
        let name;
        let description; 

        before(()=> {
            name = pseudo.get('valid_tag');
            description = pseudo.get('msg_500');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, description);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });

    describe(`Escenario 6: Creo un tag cuyo parámetro “Name” sea válido, y cuyo parámetro “Description” tenga mas de 500 caracteres`, ()=>{
        let name;
        let description; 

        before(()=> {
            name = pseudo.get('valid_tag');
            description = pseudo.get('msg_501');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, description);
            testerObject.validateErrorMessage(`Description cannot be longer than 500 characters.`);
        });
    });

    describe(`Escenario 7: Modificar un tag, de tal forma que el nuevo parámetro “Name” tenga menos de 191 caracteres`, ()=>{
        let oldName;
        let newName;

        before(()=> {
            oldName = pseudo.get('valid_tag');
            newName = pseudo.get('msg_190');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea un tag válido...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(oldName);
        });

        it('Se modifica el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(newName, undefined, undefined, undefined, undefined, undefined, oldName);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(newName);
        });

    });

    describe(`Escenario 8: Modificar un tag, de tal forma que el nuevo parámetro “Name” tenga 191 caracteres`, ()=>{
        let oldName;
        let newName;

        before(()=> {
            oldName = pseudo.get('valid_tag');
            newName = pseudo.get('msg_191');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea un tag válido...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(oldName);
        });

        it('Se modifica el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(newName, undefined, undefined, undefined, undefined, undefined, oldName);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(newName);
        });

    });

    describe(`Escenario 9: Modificar un tag, de tal forma que el nuevo parámetro “Name” tenga mas de 191 caracteres`, ()=>{
        let oldName;
        let newName;

        before(()=> {
            oldName = pseudo.get('valid_tag');
            newName = pseudo.get('msg_192');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea un tag válido...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(oldName);
        });

        it('Se modifica el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(newName, undefined, undefined, undefined, undefined, undefined, oldName);
            testerObject.validateErrorMessage('Tag names cannot be longer than 191 characters.');
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(oldName);
        });

    });

    describe(`Escenario 10: Modifico un tag, de tal forma que su nuevo parámetro “Description” tenga menos de 500 caracteres`, ()=>{
        let name;
        let oldDescription;
        let newDescription;

        before(()=> {
            name = pseudo.get('valid_tag');
            oldDescription = pseudo.get('naughty_string');
            newDescription = pseudo.get('msg_499');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea un tag válido...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, oldDescription);
        });

        it('Se modifica el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(undefined, undefined, undefined, newDescription, undefined, undefined, name);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });

    });

    describe(`Escenario 11: Modifico un tag, de tal forma que su nuevo parámetro “Description” tenga 500 caracteres`, ()=>{
        let name;
        let oldDescription;
        let newDescription;

        before(()=> {
            name = pseudo.get('valid_tag');
            oldDescription = pseudo.get('naughty_string');
            newDescription = pseudo.get('msg_500');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea un tag válido...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, oldDescription);
        });

        it('Se modifica el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(undefined, undefined, undefined, newDescription, undefined, undefined, name);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });

    });

    describe(`Escenario 12: Modifico un tag, de tal forma que su nuevo parámetro “Description” tenga mas de 500 caracteres`, ()=>{
        let name;
        let oldDescription;
        let newDescription;

        before(()=> {
            name = pseudo.get('valid_tag');
            oldDescription = pseudo.get('naughty_string');
            newDescription = pseudo.get('msg_501');
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea un tag válido...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, oldDescription);
        });

        it('Se modifica el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(undefined, undefined, undefined, newDescription, undefined, undefined, name);
            testerObject.validateErrorMessage(`Description cannot be longer than 500 characters.`);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });

    });

    describe(`Escenario 13: Crear un tag cuyo parámetro “Name” se validó, y su parámetro “Slug” contenga caracteres inválidos`, () => {
        let name;
        let slug;

        before(() => {
            name = pseudo.get('valid_tag');
            slug = pseudo.get('invalid_slug');
        });

        beforeEach(() => {
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, slug);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });

    describe(`Escenario 14: Crear un tag cuyo parámetro “Name” se validó, y su parámetro “Slug” válido`, () => {
        let name;
        let slug;

        before(() => {
            name = pseudo.get('valid_tag');
            slug = pseudo.get('valid_slug');
        });

        beforeEach(() => {
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, slug);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });

    describe(`Escenario 15: Modificar un tag, de tal forma que su parámetro “Slug” contenga caracteres inválidos`, () => {
        let name;
        let oldSlug;
        let newSlug;

        before(() => {
            name = pseudo.get('valid_tag');
            oldSlug = pseudo.get('valid_slug');
            newSlug = pseudo.get('invalid_slug');
        });

        beforeEach(() => {
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea un tag válido...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, oldSlug);
        });

        it('Se modifica el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(undefined, undefined, newSlug, undefined, undefined, undefined, name);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });

    describe(`Escenario 16: Modificar un tag, de tal forma que su parámetro “Slug” sea válido`, () => {
        let name;
        let oldSlug;
        let newSlug;

        before(() => {
            name = pseudo.get('valid_tag');
            oldSlug = pseudo.get('valid_slug');
            newSlug = pseudo.get('valid_slug2');
        });

        beforeEach(() => {
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea un tag válido...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, oldSlug);
        });

        it('Se modifica el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(undefined, undefined, newSlug, undefined, undefined, undefined, name);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });
});