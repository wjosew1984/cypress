describe("Automatización con Cypress", () => {
  it("Abre Google, busca Netflix y lo abre", () => {
    // Abre Google
    cy.visit("https://www.google.com");
    // Selecciona el elemento que representa el cartel emergente
    //cy.get('.M6CB1c rr4y5c').contains('No acceder').click();

    //cy.wait(2000);
    // Cierra el cartel emergente haciendo clic en el botón de cierre (ajusta el selector según tu caso)
    //cy.get('.SDkEP');
    cy.get('#APjFqb').type('Netflix');
    //cy.get('input[name="q"]').type('Netflix');
    cy.wait(3000);
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
    cy.wait(2000);

    // Maximiza la pantalla del navegador
    cy.viewport("macbook-13");

    // Escribe "Netflix" en el campo de búsqueda de Google y presiona Enter
    cy.get('.eKjLze > .g > [lang="es"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').type("Netflix{enter}");
    cy.wait(3000); 

    // Espera a que se carguen los resultados de búsqueda y haz clic en el enlace de Netflix
    //cy.get('h3').contains("Netflix").click();
    //cy.wait(3000);

    // Obtener Titulo y URL de la pagina
    cy.title().then((title) => {
      console.log(title);
    });
    cy.url().then((url) => {
      console.log(url);
    });
    cy.get('.default-ltr-cache-1asgq30 > .default-ltr-cache-inkrn > .default-ltr-cache-1u8qly9 > .default-ltr-cache-1jbflut > .e1ax5wel1').should('contain', 'Comenzar');

  });
});