import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import casosV2NewDocPage from "../pom/casosV2NewDocPage";

let notificationOption = ''

Given(/^I am logged in to the poder website with email and password for casosv2nd$/, () => {
    // cy.fixture("loginData").then((data) => {
    //     cy.loginWebsite(data.email, data.password)
    // })
    cy.loginWebsite('nshah@poderjudicial.gob.do', 'AYtq&RhK3A,42001')
});

Then(/^I am on home page of poder website casos v2$/, () => {
    casosV2NewDocPage.titlePage()
});

Then(/^I click on module "([^"]*)" CasosV2$/, (moduleName) => {
    casosV2NewDocPage.moduleClick(moduleName)
});

Then(/^I click on Plus Icon for new Case creation of cv2 module$/, () => {
    cy.contains(casosV2NewDocPage.titleCV2, 'Consulta de Casos', { timeout: 10000 }).should('be.visible')
    casosV2NewDocPage.clickNewCaseButton()
    cy.wait(3000)
});

Then(/^I select Tipo de identificación as "([^"]*)" of cv2 module$/, (typeOfI) => {
    casosV2NewDocPage.clickTipoIdentification()
    cy.xpath('//*[@id="tagRecepcion"]/div/div[1]/div[2]/div/div/div/div/div[2]/input').type(typeOfI)
    casosV2NewDocPage.clickDropDownOption()
    cy.wait(3000)
});

Then(/^I enter Identificación code "([^"]*)" of cv2 module$/, (icode) => {
    casosV2NewDocPage.enterIdentificationCode(icode)
    cy.wait(3000)
});

Then(/^I select new case file of cv2 module$/, () => {
    casosV2NewDocPage.clickNewCaseDrop()
    cy.xpath('//*[@id="tagRecepcion"]/div/div[2]/div/div/div[2]/div[1]/div/div/div/div/div[2]/input').type('Si')
    casosV2NewDocPage.clickDropDownOption()
    cy.wait(3000)
});

Then(/^I select Materia as "([^"]*)" of cv2 module$/, (subjectD) => {
    casosV2NewDocPage.clickSubjectDrop()
    cy.xpath('//*[@id="tagRecepcion"]/div/div[2]/div/div/div[5]/div[1]/div/div/div/div/div[2]/input').type(subjectD)
    casosV2NewDocPage.clickDropDownOption()
    cy.wait(3000)
    
    // casosV2NewDocPage.clickSubjectDrop()
    // cy.xpath('//*[@id="tagRecepcion"]/div/div[2]/div/div/div[5]/div[1]/div/div/div/div/div[2]/input').type(subjectD)
    // casosV2NewDocPage.clickDropDownOption()
    // cy.wait(5000)
});

Then(/^I select Tribunal as "([^"]*)" of cv2 module$/, (tribunalD) => {
    casosV2NewDocPage.clickTribunalDrop()
    cy.xpath('//*[@id="tagRecepcion"]/div/div[2]/div/div/div[5]/div[2]/div/div/div/div/div[2]/input').type(tribunalD)
    casosV2NewDocPage.clickDropDownOption()
    cy.wait(3000)
    // cy.get('#cbTribunalTR').select(tribunalD, { force: true })
    // cy.wait(5000)
});

Then(/^I select Tipo de procedimiento "([^"]*)" of cv2 module$/, (process) => {
    casosV2NewDocPage.clickTypeProcess()
    cy.xpath('//*[@id="tagRecepcion"]/div/div[2]/div/div/div[6]/div[1]/div/div/div/div/div[2]/input').type(process)
    casosV2NewDocPage.clickDropDownOption()
    cy.wait(3000)
});

Then(/^I select Asunto "([^"]*)" of cv2 module$/, (asuntoD) => {
    casosV2NewDocPage.clickAsuntos()
    cy.xpath('//*[@id="tagRecepcion"]/div/div[2]/div/div/div[6]/div[2]/div/div/div/div/div[2]/input').type(asuntoD)
    casosV2NewDocPage.clickDropDownOption()
    cy.wait(3000)
    // cy.get('#cbAsuntosTR').select(asuntoD, { force: true })
    // cy.wait(3000)
});

Then(/^I click Siguiente button of cv2 module$/, () => {
    casosV2NewDocPage.clickSiguienteButton()
    cy.wait(3000)
});

Then(/^I click on Registros Partes of cv2 module$/, () => {
    casosV2NewDocPage.clickRegistroPartes()
    cy.wait(3000)
});

Then(/^I select Tipo de Involucramiento as "([^"]*)" of cv2 module$/, (typeI) => {
    casosV2NewDocPage.clickInvaluCramiento()
    cy.xpath('//*[@id="parteForm"]/div/div[3]/div[1]/div/div/div/div/div[2]/input').type(typeI)
    casosV2NewDocPage.clickDropDownOption()
    cy.wait(3000)
});


Then(/^I select Tipo Calidad as "([^"]*)" of cv2 module$/, (typeC) => {
    notificationOption = typeC
    casosV2NewDocPage.clickTypeCalidad()
    cy.xpath('//*[@id="parteForm"]/div/div[3]/div[2]/div/div/div/div/div[2]/input').type(typeC)
    casosV2NewDocPage.clickDropDownOption()
    cy.wait(3000)


});
Then(/^I select Preferencia de audiencia "([^"]*)"$/, (type) => {
    casosV2NewDocPage.selectPreferenciadeaudiencia(type)
    cy.wait(3000)
});



When(/^I select Tipo de identificación "([^"]*)" for Parte$/, (typeI) => {
    casosV2NewDocPage.selectTipoDeIdentification(typeI)
    cy.wait(2000)
});

Then(/^I enter Identificación code "([^"]*)" for Parte$/, (Icode) => {
    casosV2NewDocPage.typeIdentiCodeparte(Icode)
});


Then(/^I click on Guardar button casosv2nd$/, () => {
    cy.get('#pBloqueIdentificacion > .inputWrap > .font-semibold').click()
    casosV2NewDocPage.notification(notificationOption)
    casosV2NewDocPage.clickGuardarButton()
});


Then(/^I click on Nuevo Documento of Documentos Tab$/, () => {
    casosV2NewDocPage.clickNuevoDocumento()
});

Then(/^I enter Fecha de documento of Documentos Tab$/, () => {
    casosV2NewDocPage.enterDateDocument()
});

Then(/^I select Tipo de documento of Documentos Tab$/, () => {
    casosV2NewDocPage.selectTypeDocumento('Acta de denuncia')
});

Then(/^I upload documento in Documentos tab$/, () => {
    casosV2NewDocPage.uploadDocumento('4.pdf')
});

Then(/^I enter Nombre del documento "([^"]*)"$/, (number) => {
    casosV2NewDocPage.enterNombreDocumento(number)
});


Then(/^I select Condición del documento$/, () => {
    casosV2NewDocPage.selectCondicionDocumento('Original')
});

Then(/^I select Devuelto al usuario$/, () => {
    casosV2NewDocPage.selectDevueltoUsuario()
});

Then(/^I select Calidad del vinculado "([^"]*)" in Documentos tab$/, (typeC) => {
    casosV2NewDocPage.selectTipoCalidad(typeC)
});

Then(/^I select Vinculado "([^"]*)" in Documentos tab$/, (typeC) => {
    if (typeC === 'Tribunal') {
        casosV2NewDocPage.tribunalSubField()
    } else {
        casosV2NewDocPage.selectVinDepositantes(typeC)
    }
});

Then(/^I select Vinculado "([^"]*)" in Documentos tab editor$/, (typeC) => {
	if (typeC === 'Tribunal') {
        casosV2NewDocPage.selectTipoCalidad(typeC)
        casosV2NewDocPage.selectDistritoJudicial('AZUA')
        casosV2NewDocPage.selectTribunal('JUZGADO DE PAZ DE AZUA')
    } else {
        // casosV2NewDocPage.selectVinDepositantes(typeC)
    }
});



Then(/^I select Es confidencial$/, () => {
    casosV2NewDocPage.selectConfidencial()
});


Then(/^I enter Cantidad de páginas in Documentos tab "([^"]*)"$/, (page) => {
    casosV2NewDocPage.enterCantidadPagina(page)
});


Then(/^I click on Guardar button of Documentos tab$/, () => {
    casosV2NewDocPage.clickGuardarDocumentos()
    cy.wait(5000)
});


Then(/^I click on editor icon$/, () => {
    casosV2NewDocPage.clickEditarDocumento()
});

Then(/^I click on delete documento icon$/, () => {
    casosV2NewDocPage.clickRemoveDocumento()
});

Then(/^I click on finalizar button documento$/, () => {
    casosV2NewDocPage.clickFinalizer()

});





