/// <reference types="cypress" />
import { GhostTesterRandom } from '../page-object/tags-random-page';
import config from '../config'

const RandExp = require('randexp');

context('Validar funcionalidad de crear/modificar TAG (datos aleatorios)...', async () => {
    let testerObject = new GhostTesterRandom(
        config.email,
        config.password,
        "http://localhost:2368/ghost/#/signin",
        new Date().toISOString().replace(/:/g, "."),
        config.version
    );

    describe(`Escenario 26: Modificar un tag, de tal forma que su nuevo parámetro “Meta Description” tenga menos de 156 caracteres`, ()=>{
        let name;
        let oldMetaDescription;
        let newMetaDescription; 

        before(()=> {
            name = new RandExp(/[a-z]\w{0,20}/).gen();
            oldMetaDescription = new RandExp(/[a-z]\w{50}/).gen();
            newMetaDescription = new RandExp(/\w{155}/).gen();
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, undefined, undefined,  oldMetaDescription);
        });

        it('Se modifica y valida el tag...', ()=>{
            testerObject.selectTagsFromManageMenu();
            testerObject.selectATagByItsName(name);
            testerObject.createOrModifyTag(undefined, undefined, undefined, undefined, undefined, newMetaDescription, name);
            testerObject.validateGreenWordCount(newMetaDescription.length);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });

    describe(`Escenario 27: Modificar un tag, de tal forma que su nuevo parámetro “Meta Description” tenga 156 caracteres`, ()=>{
        let name;
        let oldMetaDescription;
        let newMetaDescription; 

        before(()=> {
            name = new RandExp(/[a-z]\w{0,20}/).gen();
            oldMetaDescription = new RandExp(/[a-z]\w{50}/).gen();
            newMetaDescription = new RandExp(/\w{156}/).gen();
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, undefined, undefined,  oldMetaDescription);
        });

        it('Se modifica y valida el tag...', ()=>{
            testerObject.selectTagsFromManageMenu();
            testerObject.selectATagByItsName(name);
            testerObject.createOrModifyTag(undefined, undefined, undefined, undefined, undefined, newMetaDescription, name);
            testerObject.validateGreenWordCount(newMetaDescription.length);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });

    describe(`Escenario 28: Modificar un tag, de tal forma que su nuevo parámetro “Meta Description” tenga mas de 156 caracteres`, ()=>{
        let name;
        let oldMetaDescription;
        let newMetaDescription; 

        before(()=> {
            name = new RandExp(/[a-z]\w{0,20}/).gen();
            oldMetaDescription = new RandExp(/[a-z]\w{50}/).gen();
            newMetaDescription = new RandExp(/\w{157}/).gen();
        });

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, undefined, undefined, undefined, undefined,  oldMetaDescription);
        });

        it('Se modifica y valida el tag...', ()=>{
            testerObject.selectTagsFromManageMenu();
            testerObject.selectATagByItsName(name);
            testerObject.createOrModifyTag(undefined, undefined, undefined, undefined, undefined, newMetaDescription, name);
            testerObject.validateRedWordCount(newMetaDescription.length);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });

    describe(`Escenario 29:	Creo un tag cuyo parámetro “Name” sea válido, y cuyo parámetro “Color” sea un hexadecimal inválido`, () => {
        let name;
        let color;

        before(() => {
            name = new RandExp(/[a-z]\w{20}/).gen();
            color = new RandExp(/[g-zG-Z]{6}/).gen();
        });

        beforeEach(() => {
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, color);
            testerObject.validateErrorMessage('The color should be in valid hex format');
        });
    });


    describe(`Escenario 30:	Creo un tag cuyo parámetro “Name” sea válido, y cuyo parámetro “Color” sea válido`, () => {
        let name;
        let color;

        before(() => {
            name = new RandExp(/[a-z]\w{20}/).gen();
            color = new RandExp(/[a-fA-F0-9]{6}/).gen();
        });

        beforeEach(() => {
            testerObject.initNavigation();
            testerObject.logIn();
        });

        it('Se crea el tag acorde a lo descrito...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createOrModifyTag(name, color);
        });

        it('Se elimina el tag creado...', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATagByItsName(name);
        });
    });


});