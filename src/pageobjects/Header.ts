import { HomePage } from "./HomePage"
import { NavPage } from "./NavPage"
import { SearchPage } from "./SearchPage"

const homeLink = '.cmp-custom-header__list-upper-active'
const browseLink = 'li > a[href="/en/services"]';
const searchLink = '.search-link'
const signInLink = '.sign-in-btn > span'
const createAccountLink = '.cmp-custom-header__list-lower a[href*="create-account"]'
const helpLink = '.cmp-custom-header__list-lower a[href*="help"]'

export class Header {

    goToHome(): HomePage {
        cy.get(homeLink).click()
        return new HomePage()
    }

    goToBrowse(): NavPage {
        cy.get(browseLink).click()
        return new NavPage()
    }

    goToSearch(): SearchPage {
        cy.get(searchLink).click()
        return new SearchPage()
    }

    goToSignIn(): NavPage {
        cy.get(signInLink).click()
        return new NavPage()
    }

    goTocreateAccount(): NavPage {
        cy.get(createAccountLink).click()
        return new NavPage()
    }

    goToHelp(): NavPage {
        cy.get(helpLink).click()
        return new NavPage()
    }
}
