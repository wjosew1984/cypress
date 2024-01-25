describe("Automatización con Cypress", () => {
    it("Abre Google, busca Netflix y lo abre", () => {
      // Abre Google
      cy.visit("https://www.google.com");
      cy.viewport(1920, 1080); // Establece la resolución de pantalla en 1920x1080

      // Selecciona el elemento que representa el cartel emergente
      // Seleccionar un botón por su contenido
      //cy.get('iframe').contains('No acceder').click();

      //cy.get('.M6CB1c rr4y5c').click();
      //cy.get('iframe')
      //cy.contains('No acceder').click();
      //cy.contains('[aria-label="No acceder"]').click();
      //cy.get('button.M6CB1c.rr4y5c').click();
      



      // Cierra el cartel emergente haciendo clic en el botón de cierre (ajusta el selector según tu caso)
      // Encuentra el botón por su clase y haz clic en él
      //cy.get('iframe').contains('No acceder').click();
      cy.get('button.M6CB1c.rr4y5c').contains('No acceder').click();
      //cy.get('.M6CB1c.rr4y5c').click();
      cy.wait(3000);
      cy.get('.SDkEP');
      cy.get('input[name="q"]').type('Netflix');
      cy.wait(2000);
      cy.get('input[name="q"]').type('cypress{enter}');
      cy.wait(2000);
      // Selecciona el elemento h1 que contiene el título
      cy.get('h1').invoke('text').then((title) => {
        // Imprime el título en la consola de Cypress
        cy.log('El título de la página es: ' + title);
      });
      
  
      // Maximiza la pantalla del navegador
      cy.viewport("macbook-13");
  
      // Escribe "Netflix" en el campo de búsqueda de Google y presiona Enter
      cy.get('input[name="q"]').type("Netflix{enter}");
      cy.wait(3000); 
  
      // Espera a que se carguen los resultados de búsqueda y haz clic en el enlace de Netflix
      cy.get('h3').contains("Netflix").click();
      cy.wait(3000);

      //Obtener titulo y URL de la pagina
      cy.title().then((title) => {
        console.log(title);
      });

      cy.url().then((url) => {
        console.log(url);
      });
      
    });
  });
  
  //
  /*

  describe('Búsqueda en Google', () => {
    it('Debería buscar "Ejemplo" en Google y hacer clic en el primer resultado', () => {
      cy.visit('https://www.google.com');
      cy.viewport(1920, 1080);  // Ajusta el tamaño de la ventana si es necesario;
      // Busca Netflix en Google
      cy.get('input[name="q"]').type(netflixSearchQuery).type('{enter}');
      cy.window().then((win) => {
        win.close();
      });
      cy.get('input[name=q]').type('Ejemplo');
      cy.get('input[name=q]').type('{enter}');
      cy.get('h3').first().click();
    });
  });
  
  

  // Importa Cypress
const cypress = require('cypress');

// Define el sitio web de Google y Netflix
const googleUrl = 'https://www.google.com';
const netflixSearchQuery = 'Netflix';

// Abre Google y maximiza la pantalla
cy.visit(googleUrl);
cy.viewport(1920, 1080);  // Ajusta el tamaño de la ventana si es necesario

// Busca Netflix en Google
cy.get('input[name="q"]').type(netflixSearchQuery).type('{enter}');

// Espera a que los resultados se carguen (ajusta el selector según sea necesario)
cy.get('#search').should('exist');

// Haz clic en el enlace de Netflix (ajusta el selector según sea necesario)
cy.get('a[href*="netflix.com"]').first().click();

// Ahora puedes continuar con tus pruebas de Cypress en el sitio de Netflix

// Ejemplo de prueba en Cypress (ajusta según tus necesidades)
cy.get('.login-button').click();  // Ejemplo hipotético de iniciar sesión en Netflix
 
cy.visit('https://www.google.com/webhp?hl=es&sa=X&ved=0ahUKEwjj7-aDr4iCAxU2DbkGHdWBACYQPAgJ');
cy.get('.LLD4me').click();
cy.get('#APjFqb').click();
cy.get('#APjFqb').type('netflix');
cy.get('center:nth-child(2) > .gNO89b').click();
cy.url().should('contains', 'https://www.google.com/search');
cy.url().should('contains', 'https://accounts.google.com/RotateCookiesPage');
*/ 