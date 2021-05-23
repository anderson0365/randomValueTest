# randomValueTest
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
