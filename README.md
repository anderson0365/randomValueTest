# Pruebas con valores aleatorios 
Pruebas de aplicacion ghost v3.42.5 con valores aleatorios

## Instrucciones de ejecucion

Para el desarrollo de de esta aplicaicon se usó:
<ul>
  <li>node: v12.17.0</li>
  <li>npm: v6.14.4</li>
</ul>
Siga los siguientes pasos (recuerde que todas las direcciones mencionadas en este instructivo son relativas a la carpeta raiz):
<ol>
  <li>Correr localmente la aplicación ghost v3.42.5. Cree un usuario administrador en esta si aún no lo tiene. </li>
  <li>Clone el repositorio y luego, en la raiz ejecute el comando "<b>npm install</b>". Esto instalará todas las dependencias necesarias, incluyendo a cypress. </li>
  <li>Modificar las credenciales del usuario administrador de ghost en el archivo "<b>/cypress/config.json</b>", por las del usuario administrador de la aplicacion ghost en ejecucción.</li>
  <li>Ejecute cypress. Si está sobre un sistema linux, puede abrir la interfaz gráfica de cypress con el comando "<b>./node_modules/.bin/cypress open</b>".</li>
  <li>Ejecute las pruebas guardadas en la ruta "/cypress/integration"</li>
</ol>

## Comentarios Generales acerca de la aplicación desarrollada.
### Pruebas asociadas a funcionalidad crear/modificar Tags:
Para los escenarios asociados a esta funcionalidad de generaron datos de 3 formas.
#### Datos a priori:
El archivo “<b>cypress/integration/tag-apriori.spec.js</b>” contiene los escenarios de prueba programados que emplean esta modalidad. El archivo de los datos de la prueba es “<b>apriori/api_rand.json</b>”. Si desea cambiar este archivo JSON por valores nuevos, puede tomar nuevos datos de la URL https://my.api.mockaroo.com/api_rand.json?key=5d1a8540 y con estos reemplazar el contenido del archivo “<b>apriori/api_rand.json</b>”.
### Datos pseudo aleatorios:
El archivo “<b>cypress/integration/tag-pseudo.spec.js </b>” contiene los escenarios de prueba programados que emplean esta modalidad. Cada vez que se ejecutan estas pruebas, la aplicación consulta automáticamente el API en la URL https://my.api.mockaroo.com/api_rand.json?key=5d1a8540 para obtener valores aleatorios nuevos para los escenarios.
### Datos aleatorios.
El archivo “<b>cypress/integration/tag-pseudo.spec.js </b>” contiene los escenarios de prueba programados que emplean esta modalidad. Se emplea la librería “randexp” para la generación de datos aleatorios. Para más información sobre esta librería, consulte la siguiente URL: http://fent.github.io/randexp.js/
