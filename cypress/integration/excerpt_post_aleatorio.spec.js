/// <reference types="cypress" />
import { CrearPostPage} from "../page-object/crear-post-page"
import config from '../config.js'

const faker = require('faker');

describe('Poner un Excerpt en el post', () => {
  const crearPostPage = new CrearPostPage()
  

  beforeEach(() => {
    crearPostPage.navigate();
  });

  
  context('Poner un Excerpt en el post',()=>{

    
    for( let i=0; i<=10; i++ ){
     
      let excerpt = faker.lorem.paragraph();
      let excerptShort = faker.lorem.sentence();

      let excerptOption = [excerpt,excerptShort];

      it('Poner un Excerpt en el post',()=>{
        crearPostPage.login(config.email, config.password);
        crearPostPage.setExpert(excerptOption[crearPostPage.getRandomInt(0,1)]);
        
      });
      
      
    }
    
  });

  

 
})
