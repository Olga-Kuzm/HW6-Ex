
Feature: Subscription creation
    Background: Log in
    Given I go to "https://viktor-silakov.github.io/course-sut/?quick"
    And I login as: "walker@jw.com", "password"


  Scenario Outline: Create Subscription 
     Given I go to "Create User" menu item
     And I fill the form:     
        | email | password | address1 | address2 | city | zip | description | plan | years |
        |abc@abc.com| abc | road1 | road2 | Minsk | 4321 | test1 | Education | 10 |
        |def@def.com| def | street1 |street2 | Brest |5678 | test 2 | Premium | 15 |
        |ghi@ghi.com| ghi | avenue1 |avenue2 | Oslo | 9876 | test3 | Enterprise | 20 |
    When I go to "Create Subscription" menu item
    And I create new Subscriptions
    When I go to "List of Subscriptions" menu item
    Then I check List of Subscriptions
    

