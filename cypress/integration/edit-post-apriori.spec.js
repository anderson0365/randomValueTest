/// <reference types="cypress" />

import { EditPostPage } from "../page-object/editar-post-page";
import config from "../config.js";
import { TagsRandomData } from "../page-object/tags-api-random";

context("Validar funcionalidad de editar post (datos apriori)...", async () => {
  const pagina = new EditPostPage();
  let apriori = new TagsRandomData("./apriori/pages_data.json", false);

  before(async () => {
    await apriori.requireData();
  });

  beforeEach(() => {
    pagina.navigate();
  });

  describe(`Escenario 1: Editar un post con título vacio`, () => {
    let title;
    let expectedTitle = "(Untitled)";

    before(() => {
      title = apriori.get("empty");
    });

    it("Editar Post", () => {
      pagina.editPostRemoveTitle(config.email, config.password);
    });

    it("Validar edicion del post", () => {
      pagina.validateUpdatedPost(config.email, config.password, expectedTitle);
    });
  });

  describe(`Escenario 2: Editar un post con título naughty`, () => {
    let title;

    before(() => {
      title = apriori.get("naughty");
    });

    it("Editar post", () => {
      pagina.editPostWithTitle(config.email, config.password, title);
    });

    it("Validar edicion del la página", () => {
      pagina.validateUpdatedPost(config.email, config.password, title);
    });
  });

  describe(`Escenario 3: Editar un post con título html`, () => {
    let title;

    before(() => {
      title = apriori.get("html");
    });

    it("Editar post", () => {
      pagina.editPostWithTitle(config.email, config.password, title);
    });

    it("Validar edición del post", () => {
      pagina.validateUpdatedPost(config.email, config.password, title);
    });
  });

  describe(`Escenario 4: Editar un post con título text`, () => {
    let title;

    before(() => {
      title = apriori.get("text");
    });

    it("Editar post", () => {
      pagina.editPostWithTitle(config.email, config.password, title);
    });

    it("Validar edición del post", () => {
      pagina.validateUpdatedPost(config.email, config.password, title);
    });
  });

  describe(`Escenario 5: Editar un post con body vacio`, () => {
    let title = "(Untitled)";
    let body;

    before(() => {
      body = apriori.get("empty");
    });

    it("Editar post", () => {
      pagina.editPostRemoveBody(config.email, config.password, body);
    });

    it("Validar edición del post", () => {
      pagina.validateUpdatedPost(config.email, config.password, title);
    });
  });

  describe(`Escenario 6: Editar un post con body naughty`, () => {
    let title = "(Untitled)";
    let body;

    before(() => {
      body = apriori.get("naughty");
    });

    it("Editar post", () => {
      pagina.editPostWithBody(config.email, config.password, body);
    });

    it("Validar edición del post", () => {
      pagina.validateUpdatedPost(config.email, config.password, title);
    });
  });

  describe(`Escenario 7: Editar un post con body html`, () => {
    let title = "(Untitled)";
    let body;

    before(() => {
      body = apriori.get("html");
    });

    it("Editar post", () => {
      pagina.editPostWithBody(config.email, config.password, body);
    });

    it("Validar edición del post", () => {
      pagina.validateUpdatedPost(config.email, config.password, title);
    });
  });

  describe(`Escenario 8: Editar un post con body text`, () => {
    let title = "(Untitled)";
    let body;

    before(() => {
      body = apriori.get("text");
    });

    it("Editar post", () => {
      pagina.editPostWithBody(config.email, config.password, body);
    });

    it("Validar edición del post", () => {
      pagina.validateUpdatedPost(config.email, config.password, title);
    });
  });

  describe(`Escenario 9: Editar un post con custom excerpt naughty`, () => {
    let title = "(Untitled)";
    let customExcerpt;

    before(() => {
      customExcerpt = apriori.get("naughty");
    });

    it("Editar post", () => {
      pagina.editPostWithCustomExcerpt(
        config.email,
        config.password,
        customExcerpt
      );
    });

    it("Validar edición del post", () => {
      pagina.validateUpdatedPost(config.email, config.password, title);
    });
  });

  describe(`Escenario 10: Editar un post con custom excerpt vacio`, () => {
    let title = "(Untitled)";
    let customExcerpt;

    before(() => {
      customExcerpt = apriori.get("empty");
    });

    it("Editar post", () => {
      pagina.editPostWithCustomExcerpt(
        config.email,
        config.password,
        customExcerpt
      );
    });

    it("Validar edición del post", () => {
      pagina.validateUpdatedPost(config.email, config.password, title);
    });
  });

  describe(`Escenario 11: Editar un post con custom excerpt html`, () => {
    let title = "(Untitled)";
    let customExcerpt;

    before(() => {
      customExcerpt = apriori.get("html");
    });

    it("Editar post", () => {
      pagina.editPostWithCustomExcerpt(
        config.email,
        config.password,
        customExcerpt
      );
    });

    it("Validar edición del post", () => {
      pagina.validateUpdatedPost(config.email, config.password, title);
    });
  });

  describe(`Escenario 12: Editar un post con slug vacio`, () => {
    let title = "(Untitled)";
    let slug;

    before(() => {
      slug = apriori.get("empty");
    });

    it("Editar post", () => {
      pagina.editPosWithSlug(config.email, config.password, slug);
    });

    it("Validar edición del post", () => {
      pagina.validateUpdatedPost(config.email, config.password, title);
    });
  });

  describe(`Escenario 13: Editar un post con slug naughty`, () => {
    let title = "(Untitled)";
    let slug;

    before(() => {
      slug = apriori.get("naughty");
    });

    it("Editar post", () => {
      pagina.editPosWithSlug(config.email, config.password, slug);
    });

    it("Validar edición del post", () => {
      pagina.validateUpdatedPost(config.email, config.password, title);
    });
  });

  describe(`Escenario 14: Editar un post con slug html`, () => {
    let title = "(Untitled)";
    let slug;

    before(() => {
      slug = apriori.get("html");
    });

    it("Editar post", () => {
      pagina.editPosWithSlug(config.email, config.password, slug);
    });

    it("Validar edición del post", () => {
      pagina.validateUpdatedPost(config.email, config.password, title);
    });
  });
});
