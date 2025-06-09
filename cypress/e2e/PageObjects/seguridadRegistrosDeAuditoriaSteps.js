import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import seguridadRegistrosDAPage from "../pom/seguridadRegistrosDAPage";

Given(/^I am logged in to the poder website with email and password registro$/, () => {
    // cy.fixture("loginData").then((data) => {
    //     cy.loginWebsite(data.email, data.password)
    // })
    cy.loginWebsite('nshah@poderjudicial.gob.do','AYtq&RhK3A,420011')
});

Then(/^I am on home page of poder website registro$/, () => {
    seguridadRegistrosDAPage.titlePage()
});

When(/^I click on module Seguridad registro$/, () => {
    seguridadRegistrosDAPage.moduleClick()
    cy.wait(1000)
});

Then(/^I validate all five card registro$/, () => {
    seguridadRegistrosDAPage.validateAllCard()
    cy.addWait()
});


Then(/^I click on Registros de auditoría card$/, () => {
	seguridadRegistrosDAPage.clickModule()
    cy.addWait()
});

Then(/^I click on Registros de auditoría tab$/, () => {
	seguridadRegistrosDAPage.clickTabRegistrosdeAuditoria()
});

Then(/^I select filter in fecha field "([^"]*)" dropdown$/, (filter) => {
	seguridadRegistrosDAPage.selectFilterSeleccionarTiempo(filter)
    cy.addWait()
});


Then(/^I click on search icon$/, () => {
	seguridadRegistrosDAPage.clickSearchIconR()
    cy.xpath('(//*[@class="cv-spinner"])[1]',{timeout:180000}).should('not.be.visible')
    // cy.wait(2000)
    cy.get(seguridadRegistrosDAPage.resultTable).should('be.visible')
    cy.addWait()
});


Then(/^I select from "([^"]*)" date$/, (fromDate) => {
	// const e=fromDate.split("-")
    // cy.log(e[0])
    // cy.log(e[1])
    // cy.log(e[2])
    seguridadRegistrosDAPage.selectFromDate(fromDate)
});

Then(/^I select to "([^"]*)" date$/, (toDate) => {
	// const e=toDate.split("-")
    // cy.log(e[0])
    // cy.log(e[1])
    // cy.log(e[2])
    seguridadRegistrosDAPage.selectToDate(toDate)
});

Then(/^I click on Aplicar button$/, () => {
	seguridadRegistrosDAPage.clickAplicarButton()
});

Then(/^I select filter type "([^"]*)" in Tipo de Filtro field$/, (filterT) => {
	seguridadRegistrosDAPage.selectFilterType(filterT)
});


Then(/^I enter filter description "([^"]*)"$/, (desc) => {
	seguridadRegistrosDAPage.enterFilterDescription(desc)
});


Then(/^I click on Registros de seguridad tab$/, () => {
	seguridadRegistrosDAPage.clickTabRegistrosdeSeguridad()
    
});

Then(/^I select seguridad filter in fecha field "([^"]*)" dropdown$/, (filter) => {
	seguridadRegistrosDAPage.selectFilterRegistrosSeguridad(filter)

    cy.addWait()
});

Then(/^I click on seguridad search icon$/, () => {
	seguridadRegistrosDAPage.clickSearchIconRSegu()
    cy.xpath('(//*[@class="cv-spinner"])[1]',{timeout:180000}).should('not.be.visible')
    // cy.wait(2000)
    cy.get(seguridadRegistrosDAPage.resultTableSeguridad).should('be.visible')
    cy.addWait()
});


Then(/^I export the excel file of auditoría$/, () => {
	cy.get('#btnDownloadCSV').click()
    cy.wait(3000)
});

Then(/^I export the excel file of auditoría seguridad$/, () => {
	cy.get('#btnDownloadCSVSeguridad').click()
    cy.wait(3000)
});




