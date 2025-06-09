import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import servicesPage from "../pom/servicesV2Page";
import moment from "moment";


Given(/^I am logged in to the poder website with email and password ssv2$/, () => {
    // cy.fixture("loginData").then((data) => {
    //     cy.loginWebsite(data.email, data.password)
    // })
    cy.loginWebsite('nshah@poderjudicial.gob.do','AYtq&RhK3A,420011')
});
Then(/^I am on home page of poder website ssv2$/, () => {
    servicesPage.titlePage()
});

Then(/^I click on module "([^"]*)" ssv2$/, (moduleName) => {
    servicesPage.moduleClick(moduleName)
});

Then(/^I search with NUC in ssv2$/, () => {
    servicesPage.searchwithNUC('2025-0000111')
});



Then(/^I click on search icon ssv2$/, () => {
    cy.get('#btnCriteroBusqueda').click()
    cy.wait(2000)
});

Then(/^I verify NUC number$/, () => {
    servicesPage.verifyNUC('2025-0000111')
    cy.wait(2000)
});

Then(/^I click on tramite icon ssv2$/, () => {
    servicesPage.clickTramiteIcon()
    cy.wait(3000)
});

Then(/^I click on Documentos tab$/, () => {
    servicesPage.clickOnDocumentos()
    cy.wait(3000)
});

Then(/^I click on cargar icon$/, () => {
    servicesPage.clickOnCargar()
    cy.wait(3000)
});

Then(/^I verify Cargar Documento page$/, () => {
    servicesPage.verifyCargarDocumentoPage()
    cy.wait(3000)
});

Then(/^I select Documento in Tipo de carga field$/, () => {
    servicesPage.selectTipoDeCarga()
    cy.wait(3000)
});

Then(/^I select one document from Tipo de documento field$/, () => {
    servicesPage.selectTipoDeDocumento()
    cy.wait(3000)

});

Then(/^I upload document in Cargar documento field$/, () => {
    cy.xpath('//*[@id="expediente-digital-entrada-documento-formulario-Archivo"]').selectFile('cypress/fixtures/4.pdf', { force: true })
    // cy.xpath('//*[@id="expediente-digital-entrada-documento-formulario-Archivo"]').attachFile('4.pdf',{force:true})
    cy.wait(2000)
});



Then(/^I select select date in Fecha del documento$/, () => {
    let date = moment()
    let d = date.format('YYYY-MM-DDThh:mm')
    cy.get('#expediente-digital-entrada-documento-formulario-FechaDocumento').click().type(d)
    cy.wait(2000)
});


Then(/^I select Tipo de Depositante as "([^"]*)"$/, (data) => {
    cy.get('#select2-expediente-digital-entrada-documento-formulario-IdTipoCalidad-container').click()
    servicesPage.searchCargerElement(data)
    cy.wait(2000)
});


Then(/^I select Depositante$/, () => {
    cy.xpath('//*[@id="cargar-depositante"]/div/span[1]/span[1]/span/ul/li/input').then(($ele) => {
        if ($ele.is(':visible')) {
            cy.xpath('//*[@id="cargar-depositante"]/div/span[1]/span[1]/span/ul/li/input').click()
            servicesPage.elementHilighted.click()
        }
        else{
            cy.get('#select2-expediente-digital-entrada-documento-formulario-IdDistritoJudicial-container').should('contain','DISTRITO NACIONAL').and('be.visible')
            cy.get('#select2-expediente-digital-entrada-documento-formulario-IdTribunal-container').should('contain','CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DEL DISTRITO NACIONAL').and('be.visible')
            cy.get('#select2-expediente-digital-entrada-documento-formulario-IdCargarSala-container').should('contain','PRIMERA SALA DE LA CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DEL DISTRITO NACIONAL').and('be.visible')

            cy.wait(5000)
            cy.get('#select2-expediente-digital-entrada-documento-formulario-IdDistritoJudicial-container').click()
            servicesPage.searchCargerElement('AZUA')
            cy.get('#select2-expediente-digital-entrada-documento-formulario-IdTribunal-container').click()
            cy.get('.select2-results__option').should('contain','AZUA').and('be.visible')
            servicesPage.searchCargerElement('JUZGADO DE PAZ DE AZUA')
        }
    })

    cy.wait(2000)
});

Then(/^I click on Guardar SSV2$/, () => {
    cy.xpath('//*[@id="expediente-digital-entrada-documento"]/div/div/div[3]/button[2]').click()
    cy.wait(10000)
    // cy.xpath('/html/body/div[27]/div/div[6]/button[1]').click()
    cy.get('.swal2-confirm').click()
    cy.wait(10000)
});





