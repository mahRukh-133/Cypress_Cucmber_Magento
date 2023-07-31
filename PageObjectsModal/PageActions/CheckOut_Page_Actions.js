const CheckOutElementsLocators = require('../PageElements/Checkout_Page_Element.json')

export class CheckOutPageElements{

    ShowCartbtn(){
        cy.get(CheckOutElementsLocators.CheckoutPageLocators.Show_Cart).click()
    }

    EmailField(){
        cy.get(CheckOutElementsLocators.CheckoutPageLocators.Email_Text).click().type('test@gmail.com')
    }

    FirstName(){
        cy.get(CheckOutElementsLocators.CheckoutPageLocators.First_Name).click().type('JOHN')
    }

    LastName(){
        cy.get(CheckOutElementsLocators.CheckoutPageLocators.Last_Name).click().type('Smith')
    }

    Company(){
        cy.get(CheckOutElementsLocators.CheckoutPageLocators.Company)..click().type('test')
    }

    Street(){
        cy.get(CheckOutElementsLocators.CheckoutPageLocators.Street).type('123 Main Street')
    }

    City(){
        cy.get(CheckOutElementsLocators.CheckoutPageLocators.City).click().type('LHR')
    }

State(){
       cy.get(CheckOutElementsLocators.CheckoutPageLocators.State).select('California')
}

PostalCode(){
    cy.get(CheckOutElementsLocators.CheckoutPageLocators.Postal_Code).click().type('12345')
}

PhoneNumber(){
    cy.get(CheckOutElementsLocators.CheckoutPageLocators.Phone_Number).click().type('0234627112122')
}

CheckBox(){
    cy.get(CheckOutElementsLocators.CheckoutPageLocators.Check_Box).click()
}

NextBtn(){
    cy.get(CheckOutElementsLocators.CheckoutPageLocators.Next_Btn).click()
}








}