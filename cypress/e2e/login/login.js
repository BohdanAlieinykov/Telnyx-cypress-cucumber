import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('User opens login page', () =>{
    cy.visit('https://portal.telnyx.com/#/login/sign-in')
})
When('User enter the email {string}', (email='ejuki038@gmail.com') =>{
    cy.get('.eSxLXo > .InlineForm__Container-cLNSZJ > .TextField__Container-gjOtap > .TextField__InputWrapper-hGJUmT > .ui-reactv2-input').type(email)
})
When('User enter the email without "@": {string}', (email='ejuki038gmail.com') =>{
    cy.get('.eSxLXo > .InlineForm__Container-cLNSZJ > .TextField__Container-gjOtap > .TextField__InputWrapper-hGJUmT > .ui-reactv2-input').type(email)
})
And('User enter the password {string}', (password='PaSwOrD12-34') =>{
    cy.get('[type="password"]').type(password)
})
And('Click submit btn', () =>{
    cy.get('.Button__StyledDefaultButton-sc-44gl5i-0').click()
})
Then('User logged in', () =>{
    cy.wait(5000)
    cy.url().should('contain','https://portal.telnyx.com/#/app/home')
})
When('Click submit button', () =>{
    cy.get('.Button__StyledDefaultButton-sc-44gl5i-0').click()
})
Then('Error message appears', () =>{
    cy.get('.TextField__ErrorMessage-wqPfx').should('be.visible')
})
When('User click on {string}', () =>{
    cy.get('.LoginOAuth__MoreProvidersButton-kGPaCc').click()
})
Then('List of another autorization methods appears', () =>{
    cy.get('[aria-label="githubForm"]').should('be.visible')
    cy.get('[aria-label="linkedinForm"]').should('be.visible')
    cy.get('[aria-label="facebookForm"]').should('be.visible')
})
And('User click on Log in with Github button', () =>{
    cy.get('[aria-label="githubForm"]').click()
})

Then('Sign in with Github form appears', () =>{
    cy.get('.mb-4 > p').should('contain.text','Sign in to GitHub')
})
And('User click on {string} button', () =>{
    cy.get('[aria-label="linkedinForm"]').click()
})
Then('Sign in with LinkedIn form appears', () =>{
    cy.get('.header__logo > li-icon > svg').should('be.visible')
})
And('User click on Log in with Facebook button', () =>{
    cy.get('[aria-label="facebookForm"]').click()
})
Then('Sign in with Facebook form appears', () =>{
    cy.get('.fb_logo').should('be.visible')
    cy.url().should('contain','facebook.com')
})
When('User click on Forgot your password? button', () =>{
    cy.get('[href="/#/login/password-reset"]').click()
})
Then('User directed on password reset page', () =>{
    cy.get('.Text-dlSwEf.PasswordReset__Title-gtVlEL').should('contain','Password Reset')
    cy.url().should('contain','password-reset')
})