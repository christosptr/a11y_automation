import { NavPage } from "./NavPage"

const raisingkidsLink = '.top-navigation-bar__item  a[href*="raising-kids.html"]'
const livingarrngementsLink = '.top-navigation-bar__item  a[href*="living-arrangements.html"]'
const ageingLink = '.top-navigation-bar__item  a[href*="ageing.html"]'
const workLink = '.top-navigation-bar__item  a[href*="work.html"]'
const educationLink = '.top-navigation-bar__item  a[href*="education.html"]'
const healthanddisabilityLink = '.top-navigation-bar__item  a[href*="health-and-disability.html"]'

export class TopNavBar {
    
    goToRaisingKids(): NavPage {
        cy.get(raisingkidsLink).click()
        return new NavPage()
    }
    
    goToLivingArrangements(): NavPage {
        cy.get(livingarrngementsLink).click()
        return new NavPage()
    }
    
    goToAgeing(): NavPage {
        cy.get(ageingLink).click()
        return new NavPage()
    }
    
    goToWork(): NavPage {
        cy.get(workLink).click()
        return new NavPage()
    }
    
    goToEducation(): NavPage {
        cy.get(educationLink).click()
        return new NavPage()
    }
    
    goToHealthAndDisability(): NavPage {
        cy.get(healthanddisabilityLink).click()
        return new NavPage()
    }
}


