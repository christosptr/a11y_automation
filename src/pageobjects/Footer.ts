import { HomePage } from "./HomePage"
import { NavPage } from "./NavPage"

const aboutMyGovLink = 'gui-nav-item[href="/en/about"]';
const helpLink = 'gui-nav-item[href="/en/about/help"]';
const contactLink = 'gui-nav-item[href="/en/about/help/contact"]';
const shareFeedbackLink = 'gui-nav-item[href="/en/about/feedback"]';


export class Footer {

    goToAbout(): NavPage {
        cy.get(aboutMyGovLink).click()
        return new NavPage()
    }

    goToHelp(): NavPage {
        cy.get(helpLink).click()
        return new NavPage()
    }

    goToContact(): NavPage {
        cy.get(contactLink).click()
        return new NavPage()
    }

    goToFeedback(): NavPage {
        cy.get(shareFeedbackLink).click()
        return new NavPage()
    }


}

