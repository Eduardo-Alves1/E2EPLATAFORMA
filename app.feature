Feature: Login

  Scenario: CT000 - Open The page is accessible
    When I open the home page
    Then I should see the Home Page

  Scenario: CT001 - Opening The Login Form
    Given I on the home page
    When I click on the enter button
    Then I should see the Login Form

  Scenario: CT002 - Login successful
    When I open the login page
    And I enter "user@example.com" in the "E-mail" field
    And I enter "password123" in the "Password" field
    And I click on the enter button
    Then I should be redirected to the home page
    And I should see a welcome message

  Scenario: CT003 - Login with invalid Password
    When I open the login page
    And I enter "wrong@example.com" in the "E-mail" field
    And I enter "wrongpass" in the "Password" field
    And I click on the enter button
    Then I should see an error message

  Scenario: CT004 - Login with invalid E-mail
    When I open the login page
    And I enter "okEmal@example.com" in the "E-mail" field
    And I enter "wrongpass" in the "Password" field
    And I click on the enter button
    Then I should see an error message

  Scenario: CT005 - Login with invalid CPF
    When I open the login page
    And I enter "Invalid CPF" in the "E-mail or CPF" field
    And I enter "oKpASSWOR" in the "Password" field
    And I click on the enter button
    Then I should see an error message.