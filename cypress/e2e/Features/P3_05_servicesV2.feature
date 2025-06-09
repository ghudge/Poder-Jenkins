Feature: Go to Services V2 module and Update documents

  Background: As a user/Admin I login poder website
    Given I am logged in to the poder website with email and password ssv2

 @ssv2_cargar_documento @regression
  Scenario Outline: I goto Services v2 module and add documents for Demandante
    Then I am on home page of poder website ssv2
    Then I click on module "Servicios Secretariales v2" ssv2
    Then I search with NUC in ssv2
    Then I click on search icon ssv2
    Then I verify NUC number
    Then I click on tramite icon ssv2
    Then I click on Documentos tab
    Then I click on cargar icon
    Then I verify Cargar Documento page
    Then I select Documento in Tipo de carga field
    Then I select one document from Tipo de documento field
    Then I upload document in Cargar documento field
    Then I select select date in Fecha del documento
    Then I select Tipo de Depositante as "<field>"
    Then I select Depositante
    Then I click on Guardar SSV2

    Examples:
      | field                |
      # | Demandante           |
      # | Demandado            |
      | Participante         |
      # | Representante        |
      # | Parte no involucrada |
      # | Componente Tribunal  |
      # | Tribunal             |

