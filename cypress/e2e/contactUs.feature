Feature: Contact Us

    Feature Description

    Scenario: Error message appears when user try send 'Contact us' form without filled company-website field
    Given User opens ContactUs page
    When User accept cookie & choose reason for contact - support
    And User first name input "Albert"
    And User last name input "Albert"
    And User business email input "Albert@albert.com"
    And User click submit button
    Then Error message Must be a url. appears

    Scenario: Error message appears when user try send 'Contact us' form without filled email field
    Given User opens ContactUs page
    When User choose reason for contact - support
    And User first name input "Albert"
    And User last name input "Albert"
    And User company website input mysite.com 
    And User click submit button
    Then Error message Must be valid email. appears

    Scenario: Error message appears when user try send 'Contact us' form without filled Firstname field
    Given User opens ContactUs page
    When User choose reason for contact - support
    And User last name input "Albert"
    And User company website input mysite.com 
    And User business email input "Albert@albert.com"
    And User click submit button
    Then Error message This field is required. appears

    Scenario: Error message appears when user try send 'Contact us' form without filled Lastname field
    Given User opens ContactUs page
    When User choose reason for contact - support
    And User first name input "Albert"
    And User company website input mysite.com
    And User business email input "Albert@albert.com"
    And User click submit button
    Then Error message This field is required. for Lastname appears

    Scenario: User directed on 'contact us' form by click 'Talk to an expert' button on main page.
    Given User opens main page
    When User click on Talk to an expert button
    Then User on the Contact us page

    Scenario: Primary interest drop-down list appears when user choose reason for contact - Sales inquiry
    Given User opens ContactUs page
    When User choose reason for contact - Sales inquiry
    Then Primary interest drop-down appears

    Scenario: Error message appears when user try send 'Contact us' form without selected 'Primary interest' field
    Given User opens ContactUs page
    When User choose reason for contact - Sales inquiry
    And User first name input "Albert"
    And User last name input "Albert"
    And User business email input "Albert@albert.com"
    And User company website input mysite.com 
    And User click submit button
    Then Error message This field is required. for Primary interest appears