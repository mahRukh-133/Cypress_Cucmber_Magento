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
  cy.wait(3000)
})

Then ('Check-out the items',()=>{
  
  cy.get('.showcart').click({force:true})
  //CheckoutPage.ShowCartbtn()
  cy.wait(2000)
  cy.get('#top-cart-btn-checkout').click({force:true})
  cy.wait(7000)
  //Verify the Url
  //cy.url().should('include','/checkout/#shipping')
  CheckoutPage.EmailField()
  //Add First Nmae
  cy.get('[name="shippingAddress.firstname"]').click({multiple:true}).type('John')
  //Add Last Name
  cy.get('[name="shippingAddress.lastname"]').click().type('smith')
  // Add company Name
  cy.get('[name="shippingAddress.company"]').click().type('test')
  //Add Street 
  cy.get('input[name="street[0]"]').type('123 Main Street');
  //Add city
  cy.get('[name="shippingAddress.city"]').click().type('LHR')
  // Seelct Country
  cy.get('select.select[name="region_id"]').select('California');
  //Add Postal Code
  cy.get('[name="shippingAddress.postcode"]').click().type('12345')
  // add Phone Number
  cy.get('[name="shippingAddress.telephone"]').click().type('0234627112122')
  cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
  //Click on Next Button
  cy.get('.button').click()
})
 Then('I reviewed & Payments',()=>{
  cy.wait(5000)
  //cy.url().should('include','/checkout/#payment')
 
  cy.get('.payment-group > .step-title').should('be.visible')
  //Click on Place order
  cy.get('.action.primary.checkout').click()
  cy.get('.page-title-wrapper').should('be.visible')
 })