/// <reference types="cypress" />
import { Pagina } from "../page-object/pagina";
import config from "../config";
import { TagsRandomData } from "../page-object/tags-api-random";

context(
  "Validar funcionalidad de crear page (datos pseudo aleatorios)...",
  async () => {
    const pagina = new Pagina();
    let pseudo = new TagsRandomData(
      "https://my.api.mockaroo.com/pseudo.json?key=1432e6b0"
    );

    before(async () => {
      await pseudo.requireData();
    });

    beforeEach(() => {
      pagina.navigate();
    });

    describe(`Escenario 13: Crear una página con título de 254 caracteres`, () => {
      let title;

      before(() => {
        title = pseudo.get("char_254");
      });

      it("Crear página", () => {
        pagina.createPageWithTitle(config.email, config.password, title);
      });

      it("Validar creación de la página", () => {
        pagina.validateCreatedPage(config.email, config.password, title);
        console.log(
          "A pesar de que se pudo hacer la creación de la página con un texto tan largo, en las secciones de lista de páginas y eliminar página, se deforma el contenido."
        );
      });
    });

    describe(`Escenario 14: Crear una página con título de 255 caracteres`, () => {
      let title;

      before(() => {
        title = pseudo.get("char_255");
      });

      it("Crear página", () => {
        pagina.createPageWithTitle(config.email, config.password, title);
      });

      it("Validar creación de la página", () => {
        pagina.validateCreatedPage(config.email, config.password, title);
        console.log(
          "A pesar de que se pudo hacer la creación de la página con un texto tan largo, en las secciones de lista de páginas y eliminar página, se deforma el contenido."
        );
      });
    });

    describe(`Escenario 15: Crear una página con título de 256 caracteres`, () => {
      let title;

      before(() => {
        title = pseudo.get("char_256");
      });

      it("Intentar crear página", () => {
        pagina.tryCreatePageWithTitle(config.email, config.password, title);
      });
    });

    describe(`Escenario 16: Crear una página con body de 2000 caracteres`, () => {
      let title = "(Untitled)";
      let body;

      before(() => {
        body = pseudo.get("char_2000");
      });

      it("Crear página", () => {
        pagina.createPageWithBody(config.email, config.password, body);
      });

      it("Validar creación de la página", () => {
        pagina.validateCreatedPage(config.email, config.password, title);
      });
    });

    describe(`Escenario 17: Crear una página con custom excerpt de 299 caracteres`, () => {
      let title = "(Untitled)";
      let customExcerpt;

      before(() => {
        customExcerpt = pseudo.get("char_299");
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

    describe(`Escenario 18: Crear una página con custom excerpt de 300 caracteres`, () => {
      let title = "(Untitled)";
      let customExcerpt;

      before(() => {
        customExcerpt = pseudo.get("char_300");
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

    describe(`Escenario 19: Crear una página con custom excerpt de 301 caracteres`, () => {
      let customExcerpt;

      before(() => {
        customExcerpt = pseudo.get("char_301");
      });

      it("Intentar crear página", () => {
        pagina.tryCreatePageWithCustomExcerpt(
          config.email,
          config.password,
          customExcerpt
        );
      });
    });

    describe(`Escenario 20: Crear una página con slug de 184 caracteres`, () => {
      let title = "(Untitled)";
      let slug;

      before(() => {
        slug = pseudo.get("char_184");
      });

      it("Crear página", () => {
        pagina.createPageWithSlug(config.email, config.password, slug);
      });

      it("Validar creación de la página", () => {
        pagina.validateCreatedPage(config.email, config.password, title);
      });
    });

    describe(`Escenario 21: Crear una página con slug de 185 caracteres`, () => {
      let title = "(Untitled)";
      let slug;

      before(() => {
        slug = pseudo.get("char_185");
      });

      it("Crear página", () => {
        pagina.createPageWithSlug(config.email, config.password, slug);
      });

      it("Validar creación de la página", () => {
        pagina.validateCreatedPage(config.email, config.password, title);
      });
    });

    describe(`Escenario 22: Crear una página con slug de 186 caracteres`, () => {
      let title = "(Untitled)";
      let slug;

      before(() => {
        slug = pseudo.get("char_186");
      });

      it("Crear página", () => {
        pagina.createPageWithSlug(config.email, config.password, slug);
      });

      it("Validar creación de la página", () => {
        pagina.validateCreatedPage(config.email, config.password, title);

        console.log(
          "A pesar de que el modelo dice que el campo debería soportar hasta 191 caracteres, el front end solo soporta hasta 185, y si se ingresa un valor con un número mayor de caracteres, lo recorta para cumplir con la validación."
        );
      });
    });

    describe(`Escenario 23: Crear una página con meta title de 299 caracteres`, () => {
      let title = "(Untitled)";
      let metaTitle;

      before(() => {
        metaTitle = pseudo.get("char_299");
      });

      it("Crear página", () => {
        pagina.createPageWithMetaTitle(
          config.email,
          config.password,
          metaTitle
        );
      });

      it("Validar creación de la página", () => {
        pagina.validateCreatedPage(config.email, config.password, title);
      });
    });

    describe(`Escenario 24: Crear una página con meta title de 300 caracteres`, () => {
      let title = "(Untitled)";
      let metaTitle;

      before(() => {
        metaTitle = pseudo.get("char_300");
      });

      it("Crear página", () => {
        pagina.createPageWithMetaTitle(
          config.email,
          config.password,
          metaTitle
        );
      });

      it("Validar creación de la página", () => {
        pagina.validateCreatedPage(config.email, config.password, title);
      });
    });

    describe(`Escenario 25: Crear una página con meta title de 301 caracteres`, () => {
      let title = "(Untitled)";
      let metaTitle;

      before(() => {
        metaTitle = pseudo.get("char_301");
      });

      it("Intentar crear página", () => {
        pagina.tryCreatePageWithMetaTitle(
          config.email,
          config.password,
          metaTitle
        );
        console.log(
          "A pesar de que el modelo dice que el campo debería soportar hasta 2000 caracteres, el front end solo soporta hasta 300, y si se ingresa un valor con un número mayor de caracteres, no permite crear la página."
        );
      });
    });

    describe(`Escenario 26: Crear una página con meta description de 499 caracteres`, () => {
      let title = "(Untitled)";
      let metaDescription;

      before(() => {
        metaDescription = pseudo.get("char_499");
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

    describe(`Escenario 27: Crear una página con meta description de 500 caracteres`, () => {
      let title = "(Untitled)";
      let metaDescription;

      before(() => {
        metaDescription = pseudo.get("char_500");
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

    describe(`Escenario 28: Crear una página con meta description de 501 caracteres`, () => {
      let metaDescription;

      before(() => {
        metaDescription = pseudo.get("char_501");
      });

      it("Intentar crear página", () => {
        pagina.tryCreatePageWithMetaDescription(
          config.email,
          config.password,
          metaDescription
        );
        console.log(
          "A pesar de que el modelo dice que el campo debería soportar hasta 2000 caracteres, el front end solo soporta hasta 500, y si se ingresa un valor con un número mayor de caracteres, no permite crear la página."
        );
      });
    });
  }
);
