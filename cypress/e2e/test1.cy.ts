import { HomePage } from "../../src/pageobjects/HomePage"
import {NavPage} from "../../src/pageobjects/NavPage"
import {SearchPage} from "../../src/pageobjects/SearchPage"

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://my.gov.au')
      cy.viewport(1536, 960)
    })

    it('Test header navigation', () => {
        let home=new HomePage()
        home
        .header.goToHome()
        .header.goToBrowse()
        .header.goToSearch()
        .header.goTocreateAccount()
        .header.goToHelp()
        .header.goToSignIn()

    })

    it('Test footer navigation', () => {
        let home=new HomePage()
        home
        .footer.goToAbout()
        .footer.goToHelp()
        .footer.goToContact()
        .footer.goToFeedback()
    })

    it('Test top navigator', () => {
        let home=new HomePage()
        home
        .header.goToBrowse()
        .topNav.goToRaisingKids()
        .topNav.goToLivingArrangements()
        .topNav.goToAgeing()
        .topNav.goToWork()
        .topNav.goToEducation()
        .topNav.goToHealthAndDisability()
    })

    it('Search for accessibility', () => {
      let home=new HomePage()
        home
        .header.goToSearch()
        .searchFor("accessibility")
        .hasResult("Accessibility")
        // .goToResult("Access")
        // .header.toHome()

    })
})