Feature: User login 

    User can login in account
    User can't login with empty input
    Error message appears when user email input without @
    List of autorization methods appears by click on 'Log in with another OAuth Provider' button
    Scenario: Sucess login
    Given User opens login page
    When User enter the email 'ejuki038@gmail.com'
    And User enter the password 'PaSwOrD12-34'
    And Click submit btn
    Then User logged in

    Scenario: Error message appears when user try login with empty input
    Given User opens login page
    When Click submit btn
    And Click submit btn
    Then Error message appears
    
    Scenario: Error message 'Please enter a valid email address.' appears when user email input without '@'
    Given User opens login page
    When User enter the email without "@": 'ejuki038gmail.com'
    And User enter the password 'PaSwOrD12-34'
    Then Error message appears

    Scenario: List with another autorization methods appears when user click 'Log in with another OAuth Provider' button
    Given User opens login page
    When User click on 'Log in with another OAuth Provider'
    Then List of another autorization methods appears

    Scenario: User directed on Github login form by click [Log in with Github] button
    Given User opens login page
    When User click on 'Log in with another OAuth Provider'
    And User click on Log in with Github button
    Then Sign in with Github form appears

    Scenario: User directed on LinkedIn login form by click [Log in with LinkedIn] button
    Given User opens login page
    When User click on 'Log in with another OAuth Provider'
    And User click on 'Log in with LinkedIn' button
    Then Sign in with LinkedIn form appears

    Scenario: User directed on Facebook login form by click [Log in with Facebook] button
    Given User opens login page
    When User click on 'Log in with another OAuth Provider'
    And User click on Log in with Facebook button
    Then Sign in with Facebook form appears

    Scenario: User directed on reset password page by click 'Forgot your password?' button
    Given User opens login page
    When User click on Forgot your password? button
    Then User directed on password reset page

    