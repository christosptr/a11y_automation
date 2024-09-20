export const yesRadio = '#yesid'
export const noRadio = '#noid'


//aria-checked, role radio, 

export class Usefull {

    getYesRadioButton(): string{
        return yesRadio
    }

    getNoRadioButton(): string{
        return noRadio
    }

    clickYesRadio(): Usefull{
        cy.get(yesRadio).click()
        return new Usefull()
    }

    clickNoRadio(): Usefull {
        cy.get(noRadio).click()
        return new Usefull()
    }

    checkElementAttributeValue(elementName, attributeName: string, attributeValue: string): Usefull {
        cy
        .get(elementName)
        .invoke('attr', attributeName)
        .should('eq', attributeValue)
        return new Usefull()
    }

}

