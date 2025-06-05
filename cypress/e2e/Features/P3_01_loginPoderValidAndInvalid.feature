Feature: Login Poder

  Background: launch website
    Given Login page is Displayed

  @valid_email_and_valid_password @regression
  Scenario Outline: Login poder website with Valid and Invalid credentials
    Then enter email "<email>"
    When click on next button
    Then enter password "<password>"
    Then click on sign in button
    When click on yes button
    Then I validate home page title

    Examples:
      | email                         | password            |
      | nshah@poderjudicial.gob.do    | AYtq&RhK3A,420011    |
      # | nshah@poderjudicial123.gob.do123 | AYtq&RhK3A,42001    |
      # | nshah@poderjudicial.gob.do    | AYtq&RhK3A325342001 |
      # | _                             | AYtq&RhK3A,42001    |
      # | nshah@poderjudicial.gob.do    | _                   |

      
 