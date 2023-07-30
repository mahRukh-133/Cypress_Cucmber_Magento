const WomenTabElementsLocators = require('../PageElements/WomenTab_Elements.json')

export class WomenTabElements{

    WomenBtn(){
        cy.contains(WomenTabElementsLocators.WomenTabLocators.Women_Tab).click()
    }

    TopsBtn(){
       cy.contains(WomenTabElementsLocators.WomenTabLocators.Women_Tab).should('be.visible').click({force:true})
    }
}