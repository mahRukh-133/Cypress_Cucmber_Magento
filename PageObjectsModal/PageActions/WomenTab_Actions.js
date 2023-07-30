const WomenTabElementsLocators = require('../PageElements/WomenTab_Elements.json')

export class WomenTabElements{

    WomenBtn(){
        cy.contains(WomenTabElementsLocators.WomenTabLocators.Women_Tab).click()
    }

    TopsBtn(){
       cy.contains(WomenTabElementsLocators.WomenTabLocators.Women_Tab).should('be.visible').click({force:true})
    }

    Jackets(){
        cy.get(WomenTabElementsLocators.WomenTabLocators.Jacket_Text).should('be.visible').click()
    }

    Select_Item(){
        cy.get(WomenTabElementsLocators.WomenTabLocators.Jacket_Select).click()
    }

    SelectSize(){
        cy.get(WomenTabElementsLocators.WomenTabLocators.Size_Option).click()
    }

 SelectColor(){
    cy.get(WomenTabElementsLocators.WomenTabLocators.Color_Option).click()
 }

 AddCartBth(){
    cy.get(WomenTabElementsLocators.WomenTabLocators.Add_Cart_Btn).click({force:true})
 }

 AnotherTab(){
    cy.get(WomenTabElementsLocators.WomenTabLocators.Select_Another_Items).click()
 }




























}