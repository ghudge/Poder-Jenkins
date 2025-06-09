import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import casosV2RegistroDocPage from "../pom/casosV2RegistroDocPage";

let notificationOption = ''

Given(/^I am logged in to the poder website with email and password for casosv2rd$/, () => {
    // cy.fixture("loginData").then((data) => {
    //     cy.loginWebsite(data.email, data.password)
    // })
    cy.loginWebsite('nshah@poderjudicial.gob.do', 'AYtq&RhK3A,420011')
});

Then(/^I am on home page of poder website casos v2 RD$/, () => {
    casosV2RegistroDocPage.titlePage()
});

Then(/^I click on module "([^"]*)" CasosV2 RD$/, (moduleName) => {
    casosV2RegistroDocPage.moduleClick(moduleName)
});

Then(/^I search with NUC in CasosV2$/, () => {
    casosV2RegistroDocPage.searchwithNUC_CasosV2('2025-0000111')
});


Then(/^I click on ver tramite button CasosV2$/, () => {
    casosV2RegistroDocPage.clickVertramitesButton('2025-0000111')
});

Then(/^I click on Plus icon for registro de documento CasosV2 RD$/, () => {
    cy.wait(2000)
    casosV2RegistroDocPage.clickPlusIconRegistroDoc()
});

Then(/^I select Tipo de identificación as "([^"]*)" of cv2 module RD$/, (typeOfI) => {
    casosV2RegistroDocPage.clickTipoIdentification()
    cy.xpath('//*[@id="tagRecepcion"]/div/div[1]/div[2]/div/div/div/div/div[2]/input').type(typeOfI)
    casosV2RegistroDocPage.clickDropDownOption()
    cy.wait(3000)
});

Then(/^I enter Identificación code "([^"]*)" of cv2 module RD$/, (icode) => {
    casosV2RegistroDocPage.enterIdentificationCode(icode)
    cy.wait(3000)
});

Then(/^I select Materia as "([^"]*)" of cv2 module RD$/, (subjectD) => {
    casosV2RegistroDocPage.clickSubjectDrop()
    cy.xpath('//*[@id="tagRecepcion"]/div/div[2]/div/div/div[3]/div[1]/div/div/div/div/div[2]/input').type(subjectD)

    casosV2RegistroDocPage.clickDropDownOption()

    cy.wait(5000)
});

Then(/^I select Tribunal as "([^"]*)" of cv2 module RD$/, (tribunalD) => {
    casosV2RegistroDocPage.clickTribunalDrop()
    cy.xpath('//*[@id="tagRecepcion"]/div/div[2]/div/div/div[3]/div[2]/div/div/div/div/div[2]/input').type(tribunalD)
    casosV2RegistroDocPage.clickDropDownOption()
    cy.wait(3000)
    // cy.get('#cbTribunalTR').select(tribunalD, { force: true })
    // cy.wait(5000)
});

Then(/^I select Sala as "([^"]*)" of cv2 RD$/, (salaD) => {
    casosV2RegistroDocPage.clickSalaDrop()
    cy.xpath('//*[@id="tagRecepcion"]/div/div[2]/div/div/div[3]/div[3]/div/div/div/div/div[2]/input').type(salaD)
    casosV2RegistroDocPage.clickDropDownOption()
    cy.wait(3000)
});


Then(/^I select Tipo de procedimiento "([^"]*)" of cv2 module RD$/, (process) => {
    casosV2RegistroDocPage.clickTypeProcess()
    cy.xpath('//*[@id="tagRecepcion"]/div/div[2]/div/div/div[4]/div[1]/div/div/div/div/div[2]/input').type(process)
    casosV2RegistroDocPage.clickDropDownOption()
    cy.wait(3000)
});

Then(/^I select Asunto "([^"]*)" of cv2 module RD$/, (asuntoD) => {
    casosV2RegistroDocPage.clickAsuntos()
    cy.xpath('//*[@id="tagRecepcion"]/div/div[2]/div/div/div[4]/div[2]/div/div/div/div/div[2]/input').type(asuntoD)
    casosV2RegistroDocPage.clickDropDownOption()
    cy.wait(3000)
    // cy.get('#cbAsuntosTR').select(asuntoD, { force: true })
    // cy.wait(3000)
});

Then(/^I click Siguiente button of cv2 module RD$/, () => {
    casosV2RegistroDocPage.clickSiguienteButton()
    cy.wait(3000);
});

Then(/^I click on Registros Partes of cv2 module RD$/, () => {
    casosV2RegistroDocPage.clickRegistroPartes()
    cy.wait(3000)
});

Then(/^I select Tipo de Involucramiento as "([^"]*)" of cv2 module RD$/, (typeI) => {
    casosV2RegistroDocPage.clickInvaluCramiento()
    cy.xpath('//*[@id="parteForm"]/div/div[3]/div[1]/div/div/div/div/div[2]/input').type(typeI)
    casosV2RegistroDocPage.clickDropDownOption()
    cy.wait(3000)
});

Then(/^I select Tipo Calidad as "([^"]*)" of cv2 module RD$/, (typeC) => {
    notificationOption = typeC
    casosV2RegistroDocPage.clickTypeCalidad()
    cy.xpath('//*[@id="parteForm"]/div/div[3]/div[2]/div/div/div/div/div[2]/input').type(typeC)
    casosV2RegistroDocPage.clickDropDownOption()
    cy.wait(3000)
});

Then(/^I select Preferencia de audiencia "([^"]*)" RD$/, (type) => {
    casosV2RegistroDocPage.selectPreferenciadeaudiencia(type)
    cy.wait(3000)
});

When(/^I select Tipo de identificación "([^"]*)" for Parte RD$/, (typeI) => {
    casosV2RegistroDocPage.selectTipoDeIdentification(typeI)
    cy.wait(2000)
});

Then(/^I enter Identificación code "([^"]*)" for Parte RD$/, (Icode) => {
    casosV2RegistroDocPage.typeIdentiCodeparte(Icode)
    cy.xpath('//*[@id="pBloqueIdentificacion"]/div/label').click()
});

Then(/^I click on Guardar button casosv2rd$/, () => {
    casosV2RegistroDocPage.notification(notificationOption)
    casosV2RegistroDocPage.clickGuardarButton()
});

Then(/^I click on Nuevo Documento of Documentos Tab RD$/, () => {
    casosV2RegistroDocPage.clickNuevoDocumento()
});

Then(/^I enter Fecha de documento of Documentos Tab RD$/, () => {
    casosV2RegistroDocPage.enterDateDocument()
});

Then(/^I select Tipo de documento of Documentos Tab RD$/, () => {
    casosV2RegistroDocPage.selectTypeDocumento('Acta de denuncia')
});

Then(/^I upload documento in Documentos tab RD$/, () => {
    casosV2RegistroDocPage.uploadDocumento('4.pdf')
});

Then(/^I enter Nombre del documento "([^"]*)" RD$/, (number) => {
    casosV2RegistroDocPage.enterNombreDocumento(number)
});

Then(/^I select Condición del documento RD$/, () => {
    casosV2RegistroDocPage.selectCondicionDocumento('Original')
});

Then(/^I select Devuelto al usuario RD$/, () => {
    casosV2RegistroDocPage.selectDevueltoUsuario()
});

Then(/^I select Calidad del vinculado "([^"]*)" in Documentos tab RD$/, (typeC) => {
    casosV2RegistroDocPage.selectTipoCalidad(typeC)
});

Then(/^I select Vinculado "([^"]*)" in Documentos tab RD$/, (typeC) => {
    if (typeC === 'Tribunal') {
        casosV2RegistroDocPage.tribunalSubField()
        // casosV2RegistroDocPage.selectDistritoJudicial('AZUA')
        // casosV2RegistroDocPage.selectTribunal('JUZGADO DE PAZ DE AZUA')
    } else {
        casosV2RegistroDocPage.selectVinDepositantes(typeC)
    }
});

Then(/^I select Es confidencial RD$/, () => {
    casosV2RegistroDocPage.selectConfidencial()
});

Then(/^I enter Cantidad de páginas in Documentos tab "([^"]*)" RD$/, (page) => {
    casosV2RegistroDocPage.enterCantidadPagina(page)
});

Then(/^I click on Guardar button of Documentos tab RD$/, () => {
    casosV2RegistroDocPage.clickGuardarDocumentos()
    cy.wait(5000)
});

Then(/^I click on finalizar button documento RD$/, () => {
    casosV2RegistroDocPage.clickFinalizer()
});


Then(/^I click on editor icon RD$/, () => {
    casosV2RegistroDocPage.clickEditarDocumento()
});

Then(/^I click on delete documento icon RD$/, () => {
    casosV2RegistroDocPage.clickRemoveDocumento()
});

Then(/^I select Vinculado "([^"]*)" in Documentos tab editor RD$/, (typeC) => {
    if (typeC === 'Tribunal') {
        casosV2RegistroDocPage.tribunalSubField()
        // casosV2RegistroDocPage.selectTipoCalidad(typeC)
        casosV2RegistroDocPage.selectDistritoJudicial('AZUA')
        casosV2RegistroDocPage.selectTribunal('JUZGADO DE PAZ DE AZUA')
    } else {
        casosV2RegistroDocPage.selectVinDepositantes(typeC)
    }
});

