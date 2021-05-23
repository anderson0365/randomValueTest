/// <reference types="cypress" />

import { Pagina } from "../page-object/pagina";
import config from "../config.js";
import { TagsRandomData } from "../page-object/tags-api-random";

context("Validar funcionalidad de crear page (datos apriori)...", async () => {
  const pagina = new Pagina();
  let apriori = new TagsRandomData("./apriori/pages_data.json", false);

  before(async () => {
    await apriori.requireData();
  });

  beforeEach(() => {
    pagina.navigate();
  });

  describe(`Escenario 1: Crear una página con título vacio`, () => {
    let title;
    let expectedTitle = "(Untitled)";

    before(() => {
      title = apriori.get("empty");
    });

    it("Crear página", () => {
      pagina.createPageWithTitle(config.email, config.password, title);
    });

    it("Validar creación de la página", () => {
      pagina.validateCreatedPage(config.email, config.password, expectedTitle);
    });
  });

  describe(`Escenario 2: Crear una página con título naughty`, () => {
    let title;

    before(() => {
      title = apriori.get("naughty");
    });

    it("Crear página", () => {
      pagina.createPageWithTitle(config.email, config.password, title);
    });

    it("Validar creación de la página", () => {
      pagina.validateCreatedPage(config.email, config.password, title);
    });
  });

  describe(`Escenario 3: Crear una página con título html`, () => {
    let title;

    before(() => {
      title = apriori.get("html");
    });

    it("Crear página", () => {
      pagina.createPageWithTitle(config.email, config.password, title);
    });

    it("Validar creación de la página", () => {
      pagina.validateCreatedPage(config.email, config.password, title);
    });
  });

  describe(`Escenario 4: Crear una página con título text`, () => {
    let title;

    before(() => {
      title = apriori.get("text");
    });

    it("Crear página", () => {
      pagina.createPageWithTitle(config.email, config.password, title);
    });

    it("Validar creación de la página", () => {
      pagina.validateCreatedPage(config.email, config.password, title);
    });
  });

  describe(`Escenario 5: Crear una página con body vacio`, () => {
    let title = "(Untitled)";
    let body;

    before(() => {
      body = apriori.get("empty");
    });

    it("Crear página", () => {
      pagina.createPageWithBody(config.email, config.password, body);
    });

    it("Validar creación de la página", () => {
      pagina.validateCreatedPage(config.email, config.password, title);
    });
  });

  describe(`Escenario 6: Crear una página con body naughty`, () => {
    let title = "(Untitled)";
    let body;

    before(() => {
      body = apriori.get("naughty");
    });

    it("Crear página", () => {
      pagina.createPageWithBody(config.email, config.password, body);
    });

    it("Validar creación de la página", () => {
      pagina.validateCreatedPage(config.email, config.password, title);
    });
  });

  describe(`Escenario 7: Crear una página con body html`, () => {
    let title = "(Untitled)";
    let body;

    before(() => {
      body = apriori.get("html");
    });

    it("Crear página", () => {
      pagina.createPageWithBody(config.email, config.password, body);
    });

    it("Validar creación de la página", () => {
      pagina.validateCreatedPage(config.email, config.password, title);
    });
  });

  describe(`Escenario 8: Crear una página con body text`, () => {
    let title = "(Untitled)";
    let body;

    before(() => {
      body = apriori.get("text");
    });

    it("Crear página", () => {
      pagina.createPageWithBody(config.email, config.password, body);
    });

    it("Validar creación de la página", () => {
      pagina.validateCreatedPage(config.email, config.password, title);
    });
  });

  describe(`Escenario 9: Crear una página con custom excerpt vacio`, () => {
    let title = "(Untitled)";
    let customExcerpt;

    before(() => {
      customExcerpt = apriori.get("empty");
    });

    it("Crear página", () => {
      pagina.createPageWithCustomExcerpt(
        config.email,
        config.password,
        customExcerpt
      );
    });

    it("Validar creación de la página", () => {
      pagina.validateCreatedPage(config.email, config.password, title);
    });
  });

  describe(`Escenario 10: Crear una página con slug vacio`, () => {
    let title = "(Untitled)";
    let slug;

    before(() => {
      slug = apriori.get("empty");
    });

    it("Crear página", () => {
      pagina.createPageWithSlug(config.email, config.password, slug);
    });

    it("Validar creación de la página", () => {
      pagina.validateCreatedPage(config.email, config.password, title);
    });
  });

  describe(`Escenario 11: Crear una página con meta title vacio`, () => {
    let title = "(Untitled)";
    let metaTitle;

    before(() => {
      metaTitle = apriori.get("empty");
    });

    it("Crear página", () => {
      pagina.createPageWithMetaTitle(config.email, config.password, metaTitle);
    });

    it("Validar creación de la página", () => {
      pagina.validateCreatedPage(config.email, config.password, title);
    });
  });

  describe(`Escenario 12: Crear una página con meta description vacio`, () => {
    let title = "(Untitled)";
    let metaDescription;

    before(() => {
      metaDescription = apriori.get("empty");
    });

    it("Crear página", () => {
      pagina.createPageWithMetaDescription(
        config.email,
        config.password,
        metaDescription
      );
    });

    it("Validar creación de la página", () => {
      pagina.validateCreatedPage(config.email, config.password, title);
    });
  });
});
