export const yesRadio = '#yedid'
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
        cy.get(this.getYesRadioButton()).click();
        return new Usefull(); // Return new instance to ensure type correctness
    }

    clickNoRadio(): Usefull {
        cy.get(this.getNoRadioButton()).click();
        return new Usefull(); // Return new instance for type checking
    }

    checkElementAttributeValue(elementName: string, attributeName: string, attributeValue: string): Usefull {
        cy
        .get(elementName)
        .invoke('attr', attributeName)
        .should('eq', attributeValue)
        return new Usefull(); // Return new instance to ensure type correctness
    }

}

