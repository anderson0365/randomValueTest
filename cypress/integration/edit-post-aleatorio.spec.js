/// <reference types="cypress" />
import { EditPostPage } from "../page-object/editar-post-page";
import config from "../config";

const faker = require("faker");

context(
  "Validar funcionalidad de editar post (datos aleatorios)...",
  async () => {
    const pagina = new EditPostPage();

    beforeEach(() => {
      pagina.navigate();
    });

    describe(`Escenario 25: Editar un post con título aleatorio`, () => {
      let title;

      before(() => {
        title = faker.lorem.text();
      });

      it("Editar Post", () => {
        pagina.editPostWithTitle(config.email, config.password, title);
      });

      it("Validar edición del post", () => {
        pagina.validateUpdatedPost(config.email, config.password, title);
      });
    });

    describe(`Escenario 26: Editar un post con body aleatorio`, () => {
      let title = "(Untitled)";
      let body;

      before(() => {
        body = faker.lorem.paragraph();
      });

      it("Editar Post", () => {
        pagina.editPostWithBody(config.email, config.password, body);
      });

      it("Validar edición del post", () => {
        pagina.validateUpdatedPost(config.email, config.password, title);
      });
    });

    describe(`Escenario 27: Editar un post con slug aleatorio`, () => {
      let title = "(Untitled)";
      let body;

      before(() => {
        body = faker.lorem.paragraph();
      });

      it("Editar Post", () => {
        pagina.editPosWithSlug(config.email, config.password, body);
      });

      it("Validar edición del post", () => {
        pagina.validateUpdatedPost(config.email, config.password, title);
      });
    });

    describe(`Escenario 28: Editar un post con excerpt aleatorio`, () => {
      let title = "(Untitled)";
      let body;

      before(() => {
        body = faker.lorem.paragraph();
      });

      it("Editar Post", () => {
        pagina.editPostWithCustomExcerpt(config.email, config.password, body);
      });

      it("Validar edición del post", () => {
        pagina.validateUpdatedPost(config.email, config.password, title);
      });
    });

    describe(`Escenario 29: Editar un post con meta title aleatorio`, () => {
      let title = "(Untitled)";
      let body;

      before(() => {
        body = faker.lorem.paragraph();
      });

      it("Editar Post", () => {
        pagina.editPostWithMetaTitle(config.email, config.password, body);
      });

      it("Validar edición del post", () => {
        pagina.validateUpdatedPost(config.email, config.password, title);
      });
    });

    describe(`Escenario 28: Editar un post con con meta body aleatorio`, () => {
      let title = "(Untitled)";
      let body;

      before(() => {
        body = faker.lorem.paragraph();
      });

      it("Editar Post", () => {
        pagina.editPostWithMetaBody(config.email, config.password, body);
      });

      it("Validar edición del post", () => {
        pagina.validateUpdatedPost(config.email, config.password, title);
      });
    });
  }
);
