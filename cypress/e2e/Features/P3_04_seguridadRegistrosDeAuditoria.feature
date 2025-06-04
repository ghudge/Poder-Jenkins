Feature: Seguridad Module Perfiles De Accesso card

  Background: As a user/Admin I login poder website
    Given I am logged in to the poder website with email and password
    Then I am on home page of poder website registro
    When I click on module Seguridad registro
    Then I validate all five card registro

  @add_filter_registros @regression
  Scenario Outline: As a user, I goto Registros de auditoría module
    Then I click on Registros de auditoría card
    Then I click on Registros de auditoría tab
    Then I select filter in fecha field "<filter>" dropdown
    Then I click on search icon

    Examples:
      | filter           |
      # | Última hora      |
      # | Últimas 12 horas |
      # | Últimas 24 horas |
      | Últimos 7 días   |
      # | Últimos 30 días  |

  @add_filter_registros_duration @regression
  Scenario Outline: As a user, I goto Registros de auditoría module
    Then I click on Registros de auditoría card
    Then I click on Registros de auditoría tab
    Then I select filter in fecha field "Personalizado..." dropdown
    Then I select from "<from>" date
    Then I select to "<to>" date
    Then I click on Aplicar button
    Then I click on search icon

    Examples:
      | from       | to         |
      | 2025-02-01 | 2025-02-05 |
      # | 2025-03-03 | 2025-03-07 |

  @add_filter_registros_with_type @regression
  Scenario Outline: As a user, I goto Registros de auditoría module with filter type
    Then I click on Registros de auditoría card
    Then I click on Registros de auditoría tab
    Then I select filter in fecha field "<filter>" dropdown
    Then I select filter type "<typef>" in Tipo de Filtro field
    Then I enter filter description "<desc>"
    Then I click on search icon

    Examples:
      | filter         | typef             | desc                         |
      # | Últimos 7 días | Correo            | sgagare@poderjudicial.gob.do |
      | Últimos 7 días | Nombre de usuario | Sonali Gagare                |
      # | Últimos 7 días | NUC               |                 2025-0000178 |
      # | Últimos 7 días | Cedula            |                  12345654321 |

  @add_filter_registros_seguridad @regression
  Scenario Outline: As a user, I goto Registros de seguridad module
    Then I click on Registros de auditoría card
    Then I click on Registros de seguridad tab
    Then I select seguridad filter in fecha field "<filterS>" dropdown
    Then I click on seguridad search icon

    Examples:
      | filterS          |
      # | Última hora      |
      # | Últimas 12 horas |
      # | Últimas 24 horas |
      | Últimos 7 días   |
      # | Últimos 30 días  |

  @add_filter_registros_seguridad_duration @regression
  Scenario Outline: As a user, I goto Registros de seguridad module
    Then I click on Registros de auditoría card
    Then I click on Registros de seguridad tab
    Then I select seguridad filter in fecha field "Personalizado..." dropdown
    Then I select from "<from>" date
    Then I select to "<to>" date
    Then I click on Aplicar button
    Then I click on seguridad search icon

    Examples:
      | from       | to         |
      | 2025-02-01 | 2025-03-05 |
      # | 2025-03-01 | 2025-03-30 |