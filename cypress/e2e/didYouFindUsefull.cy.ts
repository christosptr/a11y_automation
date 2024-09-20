import { Usefull } from "../../src/pageobjects/Usefull";

describe("WCAG Check Did you find this useful radio buttons attributes", () => {
  beforeEach(() => {
    cy.visit("https://my.gov.au/en/services/raising-kids");
    cy.viewport(1536, 960);
  });

  describe('Test Yes and No buttons for radio role', () => {
    it('should check the Yes buttons that has the role of radio', () => {
      // Select the Yes button by label-text and assert it has role="radio"
      cy.get('gui-button[label-text="Yes"][value="yes"]')
      .should('have.attr', 'data-response-type', 'positive') // Assert data-response-type is 'positive'
      .and('have.attr', 'label-text', 'Yes')                 // Assert label-text is 'Yes'
      .click() // Click the Yes button
      .shadow()                                              // Access the Shadow DOM
      .find('button')                                        // Find the <button> inside the shadow root
      .should('have.attr', 'role', 'radio')                // Assert role is 'radio'
      .and('have.attr', 'aria-checked', 'true');             // Assert aria-checked is set to true
     });
    it('should check the No button that has the role of radio', () => {
      // Select the No button by label-text and assert it has role="radio"
      cy.get('gui-button[label-text="No"][value="no"]')
        .should('have.attr', 'data-response-type', 'negative')
        .and('have.attr', 'label-text', 'No')
        .click() // Click the No button
        .shadow() // Access the Shadow DOM
        .find('button') // Find the <button> element inside the shadow root of the gui-button
        .should('have.attr', 'role', 'radio') // Assert it has the role 'radio'
        .and('have.attr', 'aria-checked', 'true'); // Assert aria-checked is set to true
    });

  });

});  // Closing for the outer describe block