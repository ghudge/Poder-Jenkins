import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pom/loginPage";

Given(/^Login page is Displayed$/, () => {
    loginPage.originPage()
    // cy.screenshot('Login page is Displayed')
});

Then(/^enter email "([^"]*)"$/, (email) => {
    cy.xpath('//*[@id="loginHeader"]/div').should('be.visible')
    loginPage.enterEmail(email)
    cy.wait(2000)

});

When(/^click on next button$/, () => {
    loginPage.yesButton()
    cy.wait(2000)
    // cy.screenshot('click on next button')
});

Then(/^enter password "([^"]*)"$/, (password) => {
    cy.xpath('//*[@id="loginHeader"]/div').should('be.visible')
    loginPage.enterPassword(password)
    cy.wait(2000)
});

Then(/^click on sign in button$/, () => {
    loginPage.yesButton()
    cy.wait(2000)
});

When(/^click on yes button$/, () => {
    loginPage.yesButton()
    cy.wait(2000)
    // cy.xpath('//*[@id="lightbox"]/div[3]/div/div[2]/div/div[1]').should('be.visible')
    // loginPage.yesButton()
    // cy.wait(2000)
});

Then(/^I validate home page title$/, () => {
    loginPage.titleHome()
});



Then(/^I goto module$/, () => {

    // cy.contains('.nav-item', 'Casos V2').scrollIntoView().click()
    // cy.xpath('//*[@id="BtnNuevoCaso"]').click()
    // cy.get('[data-id="cbTipoIdentificacionTR"]').click()
    // cy.xpath('//*[@id="tagRecepcion"]/div/div[1]/div[2]/div/div/div/div/div[3]/ul/li[3]/a/span[2]').click()
    // cy.get('#txtIdentificacionTR').type('11111111111')
    // cy.get('[data-id="rEsNuevo"]').click()
    // cy.wait(3000)
    // cy.get('[data-id="rEsNuevo"]').click()
    // cy.xpath('//*[@id="tagRecepcion"]/div/div[2]/div/div/div[2]/div[1]/div/div/div/div/div[3]/ul/li[2]/a/span[2]').click()
    // cy.get('[data-id="cbMateriaTR"]').click()
    // cy.wait(3000)
    // cy.xpath('//*[@id="tagRecepcion"]/div/div[2]/div/div/div[5]/div[1]/div/div/div/div/div[3]/ul/li[5]/a/span[2]').click()
    // cy.wait(3000)
    // cy.get('[data-id="cbTribunalTR"]').click()


    // cy.contains('.nav-item', 'Servicios Secretariales v2').scrollIntoView().click()
    // cy.xpath('/html/body/div[1]/div[2]/div/div/div[1]/div[1]/div[1]/div[2]/div/div/div/div/div/button').click()
    // cy.wait(5000)

    // // cy.visit('https://sgcdev-s2.azurewebsites.net/')
    // cy.contains('.nav-item', 'Audiencias v2').scrollIntoView().click()
    // cy.wait(5000)
    // cy.get('#cbFiltroBusqueda').select('NUC')
    // cy.wait(5000)
    // cy.get('#txtBuscarAudiencia').type('2025-0161897')
    // cy.wait(5000)
    // cy.get('#btnBuscar').click()
    // cy.wait(5000)
    // // cy.visit('https://sgcdev-s2.azurewebsites.net/GestionAudiencias')
    // cy.get('#btnVerResultadoGestionAudiencia').click()
    // cy.xpath('(//*[@class="font-bold dark:text-black"])[1]').should('be.visible')
    // cy.wait(5000)
});


Then(/^I delete all borradores disponibles$/, () => {
    cy.get('#lkbBorradores').click()

    for (let i = 0; i < 10; i++) {
        cy.xpath('(//*[@id="btnEliminarBorrador"])[1]').click()
        cy.wait(1000)
        cy.xpath('//*[@class="swal2-confirm swal2-styled"]').click()
        cy.wait(3000)
    }
});

