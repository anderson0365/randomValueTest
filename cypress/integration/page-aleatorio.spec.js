/// <reference types="cypress" />
import { Pagina } from "../page-object/pagina";
import config from "../config";

const faker = require("faker");

context(
  "Validar funcionalidad de crear page (datos aleatorios)...",
  async () => {
    const pagina = new Pagina();

    beforeEach(() => {
      pagina.navigate();
    });

    describe(`Escenario 29: Crear una página con título aleatorio`, () => {
      let title;

      before(() => {
        title = faker.lorem.text();
      });

      it("Crear página", () => {
        pagina.createPageWithTitle(config.email, config.password, title);
      });

      it("Validar creación de la página", () => {
        pagina.validateCreatedPage(config.email, config.password, title);
      });
    });

    describe(`Escenario 30: Crear una página con body aleatorio`, () => {
      let title = "(Untitled)";
      let body;

      before(() => {
        body = faker.lorem.paragraph();
      });

      it("Crear página", () => {
        pagina.createPageWithBody(config.email, config.password, body);
      });

      it("Validar creación de la página", () => {
        pagina.validateCreatedPage(config.email, config.password, title);
      });
    });
  }
);
