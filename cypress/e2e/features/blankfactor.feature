Feature: Navigation on Blankfactor site

  Scenario: Visit homepage and accept policy
    Given the user visits the homepage
    When he navigates through the site and copy the text from the card
    Then the site is loaded successfully