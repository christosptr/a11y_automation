import { HomePage } from "../../src/pageobjects/HomePage"
import { Usefull } from "../../src/pageobjects/Usefull"



describe('search for a business name', () => {
    beforeEach(() => {
      cy.visit('https://my.gov.au/en/services/raising-kids')
      cy.viewport(1536, 960)
     // cy.injectAxe();
      //cy.injectAttest();
    })
  
    //aria-checked=false, role=radio, 
    it('WCAG Check Did you find this usefull radio buttons attributes', () => {
      let page=new Usefull()
          
    // first a11y test
    // not working
    // cy.checkA11y();

      //Check default Yes radio button state
      cy.get(page.yesRadioButton())
      .invoke('attr', 'aria-checked')
      .should('eq', 'false')
      .get(page.yesRadioButton())
      .invoke('attr', 'role')
      .should('eq', 'radio')
      //Check default No radio button state
      .get(page.noRadioButton())
      .invoke('attr', 'aria-checked')
      .should('eq', 'false')
      .get(page.noRadioButton())
      .invoke('attr', 'role')
      .should('eq', 'radio')
       //Check  Yes radio button state when selected
      .get(page.yesRadioButton()).click()
      .invoke('attr', 'aria-checked')
      .should('eq', 'true')
      .get(page.noRadioButton())
      .invoke('attr', 'aria-checked')
      .should('eq', 'false')
      //Check  No radio button state when selected
      .get(page.noRadioButton()).click()
      .invoke('attr', 'aria-checked')
      .should('eq', 'true')
      .get(page.yesRadioButton())
      .invoke('attr', 'aria-checked')
      .should('eq', 'false')

      //Second Alternative
      page.checkElementAttributeValue(page.yesRadioButton(),'aria-checked','false');
      page.checkElementAttributeValue(page.yesRadioButton(),'role','radio');
      page.clickYesRadio().checkElementAttributeValue(page.yesRadioButton(),'aria-checked','true')
      page.checkElementAttributeValue(page.noRadioButton(),'aria-checked','false');
      page.clickNoRadio().checkElementAttributeValue(page.noRadioButton(),'aria-checked','true');
      page.checkElementAttributeValue(page.yesRadioButton(),'aria-checked','false');

    })
  

})