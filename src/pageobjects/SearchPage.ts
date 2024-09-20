import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavPage } from "./NavPage";
import { TopNavBar } from "./TopNavBar";

const searchInput = '#smart-search-input-1'
const searchResultBase = '.search-result__title'

export class SearchPage {
        
    header = new Header()
    topNav = new TopNavBar()
    footer = new Footer()
    
    searchFor(text: string) {
        cy.get(searchInput).type(text).type('{enter}')
        return new SearchPage()
    }

    hasResult(resultText: string) {
        cy.contains('.search-result__title', resultText).should('be.visible')
        return new SearchPage()
    }

    goToResult(resultText: string) {
        cy.contains('.search-result__title', resultText).click()
        return new NavPage()
    }
}

