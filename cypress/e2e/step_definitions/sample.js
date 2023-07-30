import { Given, Then} from "@badeball/cypress-cucumber-preprocessor";
import { WomenTabElements } from "../../../PageObjectsModal/PageActions/WomenTab_Actions";


const WomenTabb_Elements = new WomenTabElements


Given('I am on Login Page', () => {
  cy.visit("https://magento.softwaretestingboard.com/")

});

Then('I Click  on Women Tab', ()=>{

    WomenTabb_Elements.WomenBtn()
    
})

Then ('I Select Tops Items',()=>{
    WomenTabb_Elements.TopsBtn()
    cy.wait(2000)
})