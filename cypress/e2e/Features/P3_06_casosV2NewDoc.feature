Feature: Go to Casos V2 module and Add documents

  Background: As a user/Admin I login poder website
    Given I am logged in to the poder website with email and password for casosv2nd

  # @casos_v2_new_doc @regression
  # Scenario Outline: I goto CasosV2 module and add documents for Demandante
  #   Then I am on home page of poder website casos v2
  #   Then I click on module "Casos V2" CasosV2
  #   Then I click on Plus Icon for new Case creation of cv2 module
  #   Then I select Tipo de identificación as "Cédula" of cv2 module
  #   Then I enter Identificación code "11111111111" of cv2 module
  #   Then I select new case file of cv2 module
  #   Then I select Materia as "CIVIL" of cv2 module
  #   Then I select Tribunal as "CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DE BARAHONA" of cv2 module
  #   Then I select Tipo de procedimiento "CONTENCIOSO" of cv2 module
  #   Then I select Asunto "DEMANDA CIVIL" of cv2 module
  #   Then I click Siguiente button of cv2 module
  #   Then I click on Registros Partes of cv2 module
  #   Then I select Tipo de Involucramiento as "<tipoInvo>" of cv2 module
  #   Then I select Tipo Calidad as "<typeC>" of cv2 module
  #   Then I select Preferencia de audiencia "Virtual"
  #   When I select Tipo de identificación "Cédula" for Parte
  #   Then I enter Identificación code "11111111111" for Parte
  #   Then I click on Guardar button casosv2nd
  #   Then I click Siguiente button of cv2 module
  #   Then I click on Nuevo Documento of Documentos Tab
  #   Then I enter Fecha de documento of Documentos Tab
  #   Then I select Tipo de documento of Documentos Tab
  #   Then I upload documento in Documentos tab
  #   Then I enter Nombre del documento "1"
  #   Then I select Condición del documento
  #   Then I select Devuelto al usuario
  #   Then I select Calidad del vinculado "<calidadVin>" in Documentos tab
  #   Then I select Vinculado "<typeVin>" in Documentos tab editor
  #   Then I select Es confidencial
  #   Then I enter Cantidad de páginas in Documentos tab "10"
  #   Then I click on Guardar button of Documentos tab
  #   Then I click Siguiente button of cv2 module
  #   Then I click on finalizar button documento

  #   Examples:
  #     | tipoInvo      | typeC                | calidadVin           | typeVin              |
  #     | Parte         | Parte no involucrada | Parte no involucrada | Parte no involucrada |
  # #     | Parte         | Solicitante          | Demandante           | Solicitante          |
  # #     | Parte         | Interdicto           | Demandado            | Interdicto           |
  # #     | Parte         | Testigo              | Participante         | Testigo              |
  # #     | Representante | Tutor                | Representante        | Tutor                |
  # #     | Parte         | Ministerio Público   | Componente Tribunal  | Ministerio Público   |
  #     # | Parte         | Testigo              | Tribunal             | Tribunal             |

  @casos_v2_new_doc_editar @regression
  Scenario Outline: I goto CasosV2 module and add documents and editor documents
    Then I am on home page of poder website casos v2
    Then I click on module "Casos V2" CasosV2
    Then I click on Plus Icon for new Case creation of cv2 module
    Then I select Tipo de identificación as "Cédula" of cv2 module
    Then I enter Identificación code "11111111111" of cv2 module
    Then I select new case file of cv2 module
    Then I select Materia as "CIVIL" of cv2 module
    Then I select Tribunal as "CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DE BARAHONA" of cv2 module
    Then I select Tipo de procedimiento "CONTENCIOSO" of cv2 module
    Then I select Asunto "DEMANDA CIVIL" of cv2 module
    Then I click Siguiente button of cv2 module
    Then I click on Registros Partes of cv2 module
    Then I select Tipo de Involucramiento as "<tipoInvo>" of cv2 module
    Then I select Tipo Calidad as "<typeC>" of cv2 module
    Then I select Preferencia de audiencia "Virtual"
    When I select Tipo de identificación "Cédula" for Parte
    Then I enter Identificación code "11111111111" for Parte
    Then I click on Guardar button casosv2nd
    Then I click Siguiente button of cv2 module
    Then I click on Nuevo Documento of Documentos Tab
    Then I enter Fecha de documento of Documentos Tab
    Then I select Tipo de documento of Documentos Tab
    Then I upload documento in Documentos tab
    Then I enter Nombre del documento "1"
    Then I select Condición del documento
    Then I select Devuelto al usuario
    Then I select Calidad del vinculado "<calidadVin>" in Documentos tab
    Then I select Vinculado "<typeVin>" in Documentos tab
    Then I select Es confidencial
    Then I enter Cantidad de páginas in Documentos tab "10"
    Then I click on Guardar button of Documentos tab
    Then I click on editor icon
    Then I click on delete documento icon
    Then I upload documento in Documentos tab
    Then I enter Nombre del documento "2"
    Then I select Vinculado "<typeVin>" in Documentos tab editor
    Then I enter Cantidad de páginas in Documentos tab "20"
    Then I click on Guardar button of Documentos tab
    Then I click Siguiente button of cv2 module
    Then I click on finalizar button documento

    Examples:
      | tipoInvo      | typeC                | calidadVin           | typeVin              |
      # | Parte         | Interdicto           | Demandado            | Interdicto           |
      # | Parte         | Solicitante          | Demandante           | Solicitante          |
      # | Parte         | Testigo              | Participante         | Testigo              |
      # | Representante | Tutor                | Representante        | Tutor                |
      # | Parte         | Parte no involucrada | Parte no involucrada | Parte no involucrada |
      # | Parte         | Ministerio Público   | Componente Tribunal  | Ministerio Público   |
      | Parte         | Testigo              | Tribunal             | Tribunal             |
