Feature: Go to Casos V2 module and Registro Documentos

  Background: As a user/Admin I login poder website
    Given I am logged in to the poder website with email and password for casosv2rd

  @casos_v2_registro_doc @regression
  Scenario Outline: I goto CasosV2 module and Registro de documento
    Then I am on home page of poder website casos v2 RD
    Then I click on module "Casos V2" CasosV2 RD
    Then I search with NUC in CasosV2
    Then I click on ver tramite button CasosV2
    Then I click on Plus icon for registro de documento CasosV2 RD
    Then I select Tipo de identificación as "Cédula" of cv2 module RD
    Then I enter Identificación code "11111111111" of cv2 module RD
    Then I select Materia as "CIVIL" of cv2 module RD
    Then I select Tribunal as "CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DE BARAHONA" of cv2 module RD
    Then I select Sala as "CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DE BARAHONA" of cv2 RD
    Then I select Tipo de procedimiento "CONTENCIOSO" of cv2 module RD
    Then I select Asunto "DEMANDA CIVIL" of cv2 module RD
    Then I click Siguiente button of cv2 module RD
    Then I click on Registros Partes of cv2 module RD
    Then I select Tipo de Involucramiento as "<tipoInvo>" of cv2 module RD
    Then I select Tipo Calidad as "<typeC>" of cv2 module RD
    Then I select Preferencia de audiencia "Virtual" RD
    When I select Tipo de identificación "Cédula" for Parte RD
    Then I enter Identificación code "11111111111" for Parte RD
    Then I click on Guardar button casosv2rd
    Then I click Siguiente button of cv2 module RD
    Then I click on Nuevo Documento of Documentos Tab RD
    Then I enter Fecha de documento of Documentos Tab RD
    Then I select Tipo de documento of Documentos Tab RD
    Then I upload documento in Documentos tab RD
    Then I enter Nombre del documento "1" RD
    Then I select Condición del documento RD
    Then I select Devuelto al usuario RD
    Then I select Calidad del vinculado "<calidadVin>" in Documentos tab RD
    Then I select Vinculado "<typeVin>" in Documentos tab RD
    Then I select Es confidencial RD
    Then I enter Cantidad de páginas in Documentos tab "10" RD
    Then I click on Guardar button of Documentos tab RD
    Then I click Siguiente button of cv2 module RD
    Then I click on finalizar button documento RD

    Examples:
      | tipoInvo      | typeC                | calidadVin           | typeVin              |
      # | Parte         | Parte no involucrada | Parte no involucrada | Parte no involucrada |
      # | Parte         | Solicitante          | Demandante           | Solicitante          |
      # | Parte         | Interdicto           | Demandado            | Interdicto           |
      # | Parte         | Testigo              | Participante         | Testigo              |
      # | Representante | Tutor                | Representante        | Tutor                |
      # | Parte         | Ministerio Público   | Componente Tribunal  | Ministerio Público   |
      | Parte         | Testigo              | Tribunal             | Tribunal             |




@casos_v2_registro_doc_editar @regression
  Scenario Outline: I goto CasosV2 module and Registro de documento
    Then I am on home page of poder website casos v2 RD
    Then I click on module "Casos V2" CasosV2 RD
    Then I search with NUC in CasosV2
    Then I click on ver tramite button CasosV2
    Then I click on Plus icon for registro de documento CasosV2 RD
    Then I select Tipo de identificación as "Cédula" of cv2 module RD
    Then I enter Identificación code "11111111111" of cv2 module RD
    Then I select Materia as "CIVIL" of cv2 module RD
    Then I select Tribunal as "CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DE BARAHONA" of cv2 module RD
    Then I select Sala as "CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DE BARAHONA" of cv2 RD
    Then I select Tipo de procedimiento "CONTENCIOSO" of cv2 module RD
    Then I select Asunto "DEMANDA CIVIL" of cv2 module RD
    Then I click Siguiente button of cv2 module RD
    Then I click on Registros Partes of cv2 module RD
    Then I select Tipo de Involucramiento as "<tipoInvo>" of cv2 module RD
    Then I select Tipo Calidad as "<typeC>" of cv2 module RD
    Then I select Preferencia de audiencia "Virtual" RD
    When I select Tipo de identificación "Cédula" for Parte RD
    Then I enter Identificación code "11111111111" for Parte RD
    Then I click on Guardar button casosv2rd
    Then I click Siguiente button of cv2 module RD
    Then I click on Nuevo Documento of Documentos Tab RD
    Then I enter Fecha de documento of Documentos Tab RD
    Then I select Tipo de documento of Documentos Tab RD
    Then I upload documento in Documentos tab RD
    Then I enter Nombre del documento "1" RD
    Then I select Condición del documento RD
    Then I select Devuelto al usuario RD
    Then I select Calidad del vinculado "<calidadVin>" in Documentos tab RD
    Then I select Vinculado "<typeVin>" in Documentos tab RD
    Then I select Es confidencial RD
    Then I enter Cantidad de páginas in Documentos tab "10" RD
    Then I click on Guardar button of Documentos tab RD
    Then I click on editor icon RD
    Then I click on delete documento icon RD
    Then I upload documento in Documentos tab RD
    Then I enter Nombre del documento "2" RD
    Then I select Calidad del vinculado "<calidadVin>" in Documentos tab RD
    Then I select Vinculado "<typeVin>" in Documentos tab editor RD
    Then I enter Cantidad de páginas in Documentos tab "20" RD
    Then I click on Guardar button of Documentos tab RD
    Then I click Siguiente button of cv2 module RD
    Then I click on finalizar button documento RD

    Examples:
      | tipoInvo      | typeC                | calidadVin           | typeVin              |
      # | Parte         | Parte no involucrada | Parte no involucrada | Parte no involucrada |
      # | Parte         | Solicitante          | Demandante           | Solicitante          |
      # | Parte         | Interdicto           | Demandado            | Interdicto           |
      # | Parte         | Testigo              | Participante         | Testigo              |
      # | Representante | Tutor                | Representante        | Tutor                |
      # | Parte         | Ministerio Público   | Componente Tribunal  | Ministerio Público   |
      | Parte         | Testigo              | Tribunal             | Tribunal             |

