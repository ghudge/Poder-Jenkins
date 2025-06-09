import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import seguridadModulePage from "../pom/seguridadModulePage";
import loginPage from "../pom/loginPage";

Given(/^I am logged in to the poder website with email and password susuario$/, () => {
    // cy.fixture("loginData").then((data) => {
    //     cy.loginWebsite(data.email, data.password)
    // })
    cy.loginWebsite('nshah@poderjudicial.gob.do', 'AYtq&RhK3A,420011')
});

Then(/^I am on home page of poder website of susuario$/, () => {
    seguridadModulePage.titlePage()
});

When(/^I click on module Seguridad$/, () => {
    seguridadModulePage.moduleClick()
    cy.addWait()
});

Given(/^I am logged in to the poder website with email and password Invalid Url$/, () => {
    loginPage.originPageInvalid()
    loginPage.enterEmail('nshah@poderjudicial.gob.do')
    cy.wait(1000)
    loginPage.yesButton()
    cy.wait(1000)
    loginPage.enterPassword('AYtq&RhK3A,420011')
    cy.wait(1000)
    loginPage.yesButton()
    cy.wait(1000)
    loginPage.yesButton()
});

Then(/^I add new user in usuario "([^"]*)"$/, (userU) => {
    cy.addWait()
    cy.get('#btnAgregarUsuario', { timeout: 20000 }).should('be.visible').click()
    // cy.xpath('//*[@id="mdlAddUserOption"]/div/div/div[2]/div/div[1]/div',{timeout:20000}).should('be.visible').click({force:true})
    cy.addWait()
    cy.get('#mdlAddUserOption > .modal-dialog > .modal-content > .modal-body > .row > :nth-child(1) > .card > .card-body').click({ force: true })
    cy.addWait()
    cy.get('#txtBuscar').type(userU)
    cy.addWait()
    cy.get('#btnBuscar').should('be.visible').click()
    cy.xpath('//*[@id="overlay"]/div', { timeout: 30000 }).should('not.be.visible')
});

Then(/^I goto seguridad and validate user is added or not$/, () => {
    cy.addWait()
    // cy.xpath('//*[text()="OK"]',{timeout:20000}).should('be.visible').click()

});

Then(/^I search new user by name "([^"]*)"$/, (sUser) => {
    cy.get('#txtBuscarUsuarios', { timeout: 20000 }).should('be.visible').type(sUser)
    cy.addWait()
    cy.wait(5000)
});

Then(/^I login with visor prfile user and check validation of module$/, () => {
    cy.loginWebsite('ainamdar@poderjudicial.gob.do', 'dar@poderjudicial7')
});

Then(/^I validate all modules of that user$/, () => {
    cy.get('#Historico', { timeout: 20000 }).should('be.visible')
    cy.get('#Firmas', { timeout: 20000 }).should('be.visible')
    cy.get('#GestionAudiencias', { timeout: 20000 }).should('be.visible')
    cy.get('#ServiciosSecretarialesV2', { timeout: 20000 }).should('be.visible')
    cy.get('#sgcCasos', { timeout: 20000 }).should('be.visible')
    cy.wait(3000)
});




Then(/^I validate all five card$/, () => {
    seguridadModulePage.validateAllCard()
    cy.addWait()
});

Then(/^I click on Usuario card$/, () => {
    seguridadModulePage.usuariosCard()
    cy.addWait()
});

Then(/^I validate users list$/, () => {
    cy.addWait()
    seguridadModulePage.userList()
});

Then(/^I search user by email$/, () => {
    seguridadModulePage.searchUser()
});

Then(/^I click on edit option$/, () => {
    cy.addWait()
    seguridadModulePage.editIcon()
});

Then(/^I validate Asignar Permisos Tab$/, () => {
    seguridadModulePage.asignarPermisos()
});

Then(/^I validate Permisos Actuales Tab$/, () => {
    seguridadModulePage.permisosActuales()
});


Then(/^I select mandatory fields usuarios$/, () => {
    seguridadModulePage.selectPerfile('Visor')
    cy.addWait()
    seguridadModulePage.selectSede()
    seguridadModulePage.selectDistrito()
    cy.addWait()
    seguridadModulePage.selectTribunal()
    cy.addWait()
    seguridadModulePage.selectSala()
});

Then(/^I click on Guardar usuario$/, () => {
    seguridadModulePage.guardarClick()
    cy.addWait()
});


Then(/^I goto Permisos Actuales tab$/, () => {
    seguridadModulePage.permisosActuales()
    cy.addWait()
});

Then(/^I click on edit option of Permisos$/, () => {
    seguridadModulePage.editOptionPermisosActual()
});

Then(/^I click on delete option of Permisos$/, () => {
    seguridadModulePage.deleteOptionPermisosActual()
});

Then(/^I search permission by name or sala$/, () => {
    seguridadModulePage.searchPermisos()
});





Then(/^wait for next scenario$/, () => {
    cy.wait(5000)
});






