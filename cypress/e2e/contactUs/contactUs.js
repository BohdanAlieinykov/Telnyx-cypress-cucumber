import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('User opens ContactUs page', () =>{
    cy.visit('https://telnyx.com/contact-us')
})
When('User accept cookie & choose reason for contact - support', () =>{
    cy.get('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1').click({force:true})
    cy.get('#Reason_for_Contact__c').select(value="Support")
})
When('User choose reason for contact - support', () =>{
    cy.get('#Reason_for_Contact__c').select(value="Support")
})
And('User first name input "Albert"', () =>{
    cy.get('#FirstName').type('Albert')
})
And('User last name input "Albert"', () =>{
    cy.get('#LastName').type('Albert')
})
And('User business email input "Albert@albert.com"', () =>{
    cy.get('#Email').type('Albert@albert.com')
})
And('User click submit button', () =>{
    cy.get('[type="submit"]').click()
})
Then('Error message Must be a url. appears', () =>{
    cy.get('#ValidMsgWebsite').should('be.visible')
})
And('User company website input mysite.com', () =>{
    cy.get('#Website').type('http://www.mysite.com')
})
Then('Error message Must be valid email. appears', () =>{
    cy.get('#ValidMsgEmail').should('be.visible')
})
Then('Error message This field is required. appears', () =>{
    cy.get('#ValidMsgFirstName').should('be.visible')
})
Then('Error message This field is required. for Lastname appears', () =>{
    cy.get('#ValidMsgLastName').should('be.visible')
})
Given('User opens main page', () =>{
    cy.visit('https://telnyx.com')
    cy.viewport(1600, 800)
})
When('User click on Talk to an expert button', () =>{
    cy.get('.sc-9d98fd33-7.sc-9d98fd33-9').click()
})
Then('User on the Contact us page', () =>{
    cy.url().should('contain','contact-us')
    cy.get('h1 span').should('contain.text','Talk to an expert')
})
When('User choose reason for contact - Sales inquiry', () =>{
    cy.get('#Reason_for_Contact__c').select(value="Sales-Inquiry")
})
Then('Primary interest drop-down appears', () =>{
    cy.get('#Use_Case_Form__c').should('be.visible')
})
Then('Error message This field is required. for Primary interest appears', () =>{
    cy.get('#ValidMsgUse_Case_Form__c').should('be.visible')
})