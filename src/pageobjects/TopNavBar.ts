import { NavPage } from "./NavPage"

const raisingkidsLink = '.top-navigation-bar__item a[href="/en/services/raising-kids"]';
const livingArrangementsLink = '.top-navigation-bar__item a[href="/en/services/living-arrangements"]';
const ageingLink = '.top-navigation-bar__item a[href="/en/services/ageing"]';
const workLink = '.top-navigation-bar__item a[href="/en/services/work"]';
const educationLink = '.top-navigation-bar__item a[href="/en/services/education"]';
const healthanddisabilityLink = '.top-navigation-bar__item a[href="/en/services/health-and-disability"]';

export class TopNavBar {

    goToRaisingKids(): NavPage {
        cy.get(raisingkidsLink).click()
        return new NavPage()
    }

    goToLivingArrangements(): NavPage {
        cy.get(livingArrangementsLink).click()
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


