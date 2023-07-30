Feature: Checkout Journey 
 As a user 
 I want to Select Items
 So I can Checkout

Scenario: Items Added to Cart Successfully
  Given I am on Login Page
  Then I Click  on Women Tab 
  Then I Select Tops Items
  Then I Click on Jackets
  When I click on Items
  Then I Select Size
  Then I Select Color
  Then Click on Add to Cart Button
  Then I Select Another Item And Add to Cart
  Then Check-out the items
 