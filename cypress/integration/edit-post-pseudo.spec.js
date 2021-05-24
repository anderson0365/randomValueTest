/// <reference types="cypress" />
import { EditPostPage } from "../page-object/editar-post-page";
import config from "../config";
import { TagsRandomData } from "../page-object/tags-api-random";

context(
  "Validar funcionalidad de editar post (datos pseudo aleatorios)...",
  async () => {
    const pagina = new EditPostPage();
    let pseudo = new TagsRandomData(
      "https://my.api.mockaroo.com/pseudo.json?key=1432e6b0"
    );

    before(async () => {
      await pseudo.requireData();
    });

    beforeEach(() => {
      pagina.navigate();
    });

    describe(`Escenario 15: Editar un post con título de 254 caracteres`, () => {
      let title;

      before(() => {
        title = pseudo.get("char_254");
      });

      it("Editar post", () => {
        pagina.editPostClearWithTitle(config.email, config.password, title);
      });

      it("Validar edición de un post", () => {
        pagina.validateUpdatedPost(config.email, config.password, title);
        console.log(
          "A pesar de que se pudo hacer la edición de un post con un texto tan largo, en las secciones de lista de posts y eliminar post, se deforma el contenido."
        );
      });
    });

    describe(`Escenario 16: Editar un post con título de 255 caracteres`, () => {
      let title;

      before(() => {
        title = pseudo.get("char_255");
      });

      it("Editar post", () => {
        pagina.editPostWithTitle(config.email, config.password, title);
      });

      it("Validar edición de un post", () => {
        pagina.validateUpdatedPost(config.email, config.password, title);
        console.log(
          "A pesar de que se pudo hacer la edición de un post con un texto tan largo, en las secciones de lista de posts y eliminar post, se deforma el contenido."
        );
      });
    });

    describe(`Escenario 17: Editar un post con título de 256 caracteres`, () => {
      let title;

      before(() => {
        title = pseudo.get("char_256");
      });

      it("Intentar Editar post", () => {
        pagina.tryEditPostWithTitle(config.email, config.password, title);
      });
    });

    describe(`Escenario 18: Editar un post con body de 2000 caracteres`, () => {
      let title = "(Untitled)";
      let body;

      before(() => {
        body = pseudo.get("char_2000");
      });

      it("Editar post", () => {
        pagina.editPostWithBody(config.email, config.password, body);
      });

      it("Validar edición de un post", () => {
        pagina.validateUpdatedPost(config.email, config.password, title);
      });
    });

    describe(`Escenario 19: Editar un post con custom excerpt de 299 caracteres`, () => {
      let title = "(Untitled)";
      let customExcerpt;

      before(() => {
        customExcerpt = pseudo.get("char_299");
      });

      it("Editar post", () => {
        pagina.editPostWithCustomExcerpt(
          config.email,
          config.password,
          customExcerpt
        );
      });

      it("Validar edición de un post", () => {
        pagina.validateUpdatedPost(config.email, config.password, title);
      });
    });

    describe(`Escenario 20: Editar un post con custom excerpt de 300 caracteres`, () => {
      let title = "(Untitled)";
      let customExcerpt;

      before(() => {
        customExcerpt = pseudo.get("char_300");
      });

      it("Editar post", () => {
        pagina.editPostWithCustomExcerpt(
          config.email,
          config.password,
          customExcerpt
        );
      });

      it("Validar edición de un post", () => {
        pagina.validateUpdatedPost(config.email, config.password, title);
      });
    });

    describe(`Escenario 21: Editar un post con custom excerpt de 301 caracteres`, () => {
      let customExcerpt;

      before(() => {
        customExcerpt = pseudo.get("char_301");
      });

      it("Intentar Editar post", () => {
        pagina.tryEditPostWithCustomExcerpt(
          config.email,
          config.password,
          customExcerpt
        );
      });
    });

    describe(`Escenario 22: Editar un post con slug de 184 caracteres`, () => {
      let title = "(Untitled)";
      let slug;

      before(() => {
        slug = pseudo.get("char_184");
      });

      it("Editar post", () => {
        pagina.editPosWithSlug(config.email, config.password, slug);
      });

      it("Validar edición de un post", () => {
        pagina.validateUpdatedPost(config.email, config.password, title);
      });
    });

    describe(`Escenario 23: Editar un post con slug de 185 caracteres`, () => {
      let title = "(Untitled)";
      let slug;

      before(() => {
        slug = pseudo.get("char_185");
      });

      it("Editar post", () => {
        pagina.editPosWithSlug(config.email, config.password, slug);
      });

      it("Validar edición de un post", () => {
        pagina.validateUpdatedPost(config.email, config.password, title);
      });
    });

    describe(`Escenario 24: Editar un post con slug de 186 caracteres`, () => {
      let title = "(Untitled)";
      let slug;

      before(() => {
        slug = pseudo.get("char_186");
      });

      it("Editar post", () => {
        pagina.createPageWithSlug(config.email, config.password, slug);
      });

      it("Validar edición de un post", () => {
        pagina.validateUpdatedPost(config.email, config.password, title);

        console.log(
          "A pesar de que el modelo dice que el campo debería soportar hasta 191 caracteres, el front end solo soporta hasta 185, y si se ingresa un valor con un número mayor de caracteres, lo recorta para cumplir con la validación."
        );
      });
    });
  }
);
