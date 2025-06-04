Feature: Seguridad Module

  # Scenario: Create New user
  #   Given I am logged in to the poder website with email and password
  #   Then I goto module

  # Scenario: Create New user
  #   Given I am logged in to the poder website with email and password
  #   Then I am on home page of poder website casos v2 RD
  #   Then I click on module "Casos V2" CasosV2 RD
  #   Then I search with NUC in CasosV2
  #   Then I click on ver tramite button CasosV2
  #   Then I click on Plus icon for registro de documento CasosV2 RD
  #   Then I delete all borradores disponibles

  Scenario: Create New user
    Given I am logged in to the poder website with email and password
    Then I am on home page of poder website casos v2
    Then I click on module "Casos V2" CasosV2
    Then I click on Plus Icon for new Case creation of cv2 module
    Then I delete all borradores disponibles
