import { Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import { WomenTabElements } from "../../../PageObjectsModal/PageActions/WomenTab_Actions";
import { CheckOutPageElements } from "../../../PageObjectsModal/PageActions/CheckOut_Page_Actions";

const WomenTabb_Elements = new WomenTabElements
const CheckoutPage = new CheckOutPageElements 

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

Then('I Click on Jackets',()=>{
  WomenTabb_Elements.Jackets()
})

When('I click on Items',()=>{
  
cy.get(":nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo").click()
})

Then('I Select Size',()=>{
  WomenTabb_Elements.SelectSize()
})

Then('I Select Color',()=>{
  WomenTabb_Elements.SelectColor()
})

Then('Click on Add to Cart Button',()=>{
  WomenTabb_Elements.AddCartBth()
})

Then ('I Select Another Item And Add to Cart',()=>{
  WomenTabb_Elements.AnotherTab()
  cy.wait(2000)
  cy.get('#option-label-size-143-item-166').click()
  //WomenTabb_Elements.SelectSize()
  WomenTabb_Elements.SelectColor()
  WomenTabb_Elements.AddCartBth()
})

Then ('Check-out the items',()=>{
  cy.get('.showcart').click()
  //CheckoutPage.ShowCartbtn()
  cy.get('#top-cart-btn-checkout').click()
})
