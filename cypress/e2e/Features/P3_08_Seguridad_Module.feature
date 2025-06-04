Feature: Seguridad Module

  # Scenario: Create New user
  #   Given I am logged in to the poder website with email and password

  #   Then I am on home page of poder website of susuario
  #   When I click on module Seguridad
  #   Then I validate all five card
  #   Then I click on Usuario card
  #   Then I add new user in usuario "p104siddatech"
  #   Then I select mandatory fields usuarios
  #   Then I click on Guardar usuario
  #   Then I goto seguridad and validate user is added or not
  #   When I click on module Seguridad
  #   Then I click on Usuario card
  #   Then I search new user by name "p104siddatech"

  


  Scenario: Create New permission with Visor profile
    Given I am logged in to the poder website with email and password
    Then I am on home page of poder website of susuario
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Usuario card
    Then I validate users list
    Then I search user by email
    Then I click on edit option
    Then I validate Asignar Permisos Tab
    Then I select mandatory fields usuarios
    Then I click on Guardar usuario


  # Scenario: Validate visor profile
  #   Then I login with visor prfile user and check validation of module
  #   Then I validate all modules of that user



  Scenario: Create New Profile - Profile Bulk uploads - Checking audit logs
    Given I am logged in to the poder website with email and password
    Then I am on home page of poder website of susuario
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Usuario card
    Then I validate users list
    Then I search user by email
    Then I click on edit option

    Then I goto Permisos Actuales tab
    Then I search permission by name or sala

    #
    When I click on module Seguridad in perfilaccess
    Then I validate all five card in perfilaccess
    Then I click on Perfiles De Accesso card
    Then I click on Agregar perfil button
    Then I enter name into Nombre del perfil field "Adarl"
    Then I enter discription into Descripción del perfil field
    Then I select 3 modules
    Then I click on Guardar perfil

    Then I search profile by name "Adarleny"
    Then I click on view details button of profile

    Then I click on edit profile option
    Then I edit info - select 2 module
    Then I click on Gestionar Usuarios Tab

    Then I click on Adición de usuarios masivos tab
    Then I click on guardar masivos user
    Then I validate error message of masivos user
    
    Then I select mandatory fields Perfil de Accesso
    Then I upload Invalid excel file in Archivo field
    Then I click on guardar masivos user
    Then I validate error popup masivos user

    Then I upload valid excel file in Archivo field
    Then I click on guardar masivos user
    Then I validate uploading sheet of usuarios
    Then I validate history of sheet uploaded with ratio

    Then I search profile by name "Administrador"
    Then I click on delete profile icon
    Then I click on OK button

    Then I search profile by name "Abogado Asistente two"
    Then I click on delete profile icon
    Then I click on Desactivar button
    # Then I click on OK button

    When I click on module Seguridad
    Then I validate all five card registro
    Then I click on Registros de auditoría card
    Then I click on Registros de auditoría tab
    Then I select filter in fecha field "Últimos 7 días" dropdown
    Then I select filter type "Nombre de usuario" in Tipo de Filtro field
    Then I enter filter description "Jagruti Chaudhari"
    Then I click on search icon
    Then I export the excel file of auditoría 

    Then I click on Registros de seguridad tab
    Then I select seguridad filter in fecha field "Últimos 7 días" dropdown
    Then I click on seguridad search icon
    Then I export the excel file of auditoría seguridad



  Scenario: Invalid URL - Failed scenario
    Given I am logged in to the poder website with email and password Invalid Url
    Then I am on home page of poder website of susuario
    When I click on module Seguridad
    Then I validate all five card







    




