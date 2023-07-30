const CheckOutElementsLocators = require('../PageElements/Checkout_Page_Element.json')

export class CheckOutPageElements{

    ShowCartbtn(){
        cy.contains(CheckOutElementsLocators.CheckoutPageLocators.Show_Cart).click()
    }
}