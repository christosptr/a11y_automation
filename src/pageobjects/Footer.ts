import { HomePage } from "./HomePage"
import { NavPage } from "./NavPage"

const aboutLink = '.cmp-custom-footer__column__list  a[href*="about.html"]'
const helpLink = '.cmp-custom-footer__column__list  a[href*="help.html"]'
const contactLink = '.cmp-custom-footer__column__list  a[href*="contact.html"]'
const feedbackLink = '.cmp-custom-footer__column__list  a[href*="feedback.html"]'


export class Footer {

    goToAbout(): NavPage {
        cy.get(aboutLink).click()
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
        cy.get(feedbackLink).click()
        return new NavPage()
    }

}

