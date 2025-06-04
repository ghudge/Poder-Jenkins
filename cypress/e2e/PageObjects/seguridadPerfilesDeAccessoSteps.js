import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import seguridadPerfilesDAPage from "../pom/seguridadPerfilesDAPage";

var Profile = ''

// Given(/^I am logged in to the poder website with email and password$/, () => {
//     // cy.fixture("loginData").then((data) => {
//     //     cy.loginWebsite(data.email, data.password)
//     // })
// 	cy.loginWebsite('nshah@poderjudicial.gob.do','AYtq&RhK3A,42001')
// });

Then(/^I am on home page of poder website of sperfildeacces module$/, () => {
    seguridadPerfilesDAPage.titlePage()
});

When(/^I click on module Seguridad in perfilaccess$/, () => {
	seguridadPerfilesDAPage.moduleClick()
	cy.addWait()
});

Then(/^I validate all five card in perfilaccess$/, () => {
	seguridadPerfilesDAPage.validateAllCard()
	// cy.wait(2000)
});

Then(/^I click on Perfiles De Accesso card$/, () => {
	seguridadPerfilesDAPage.clickPerfilesDeAccesso()
	cy.addWait()
});

Then(/^I click on Agregar perfil button$/, () => {
	seguridadPerfilesDAPage.clickAgregarperfil()
	cy.addWait()
});

Then(/^I enter name into Nombre del perfil field$/, () => {
	seguridadPerfilesDAPage.enterProfileName("Aderlay")
	cy.addWait()
});

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


Then(/^I enter name into Nombre del perfil field "([^"]*)"$/, (pName) => {
	
	seguridadPerfilesDAPage.enterProfileName(pName+generateString(2))
	// seguridadPerfilesDAPage.enterProfileName(pName)
	cy.addWait()
});


Then(/^I enter discription into Descripción del perfil field$/, () => {
	seguridadPerfilesDAPage.enterProfileDescription()
	cy.addWait()
});

Then(/^I select 3 modules$/, () => {
	seguridadPerfilesDAPage.selectModules()
	cy.addWait()
});

Then(/^I click on Guardar perfil$/, () => {
	seguridadPerfilesDAPage.clickGuardar()
	// cy.wait(2000)
});

Then(/^I search profile by name "([^"]*)"$/, (profile) => {
	Profile = profile
	seguridadPerfilesDAPage.searchProfile(profile)
	cy.addWait()
});


Then(/^I click on view details button of profile$/, () => {
	seguridadPerfilesDAPage.clickViewDetails(Profile)
	cy.addWait()
	cy.xpath('//*[@id="mdlVerPerfil"]/div/div/div[1]/button/span').click()
	// cy.wait(2000)
});

Then(/^I click on edit profile option$/, () => {
	seguridadPerfilesDAPage.clickEditProfile(Profile)
	cy.addWait()
	// cy.wait(2000)
});

Then(/^I edit info - select 2 module$/, () => {
	// cy.wait(2000)
	// cy.contains('.form-check-sign','Sorteo').click({force:true})
	// cy.xpath('//*[@class="form-check-sign" and text()="Sorteo"]',{timeout:20000}).click()
	// cy.xpath('//*[@class="form-check-sign" and text()="Casos"]',{timeout:20000}).click()
	// cy.wait(2000)
	// cy.contains('.form-check-sign','Casos').click({force:true})
});

Then(/^I click on Gestionar Usuarios Tab$/, () => {
	cy.get('#aTabEditProfileUsers', { timeout: 20000 }).click()
	cy.addWait()
	cy.xpath('//*[@id="tblUsers"]/thead/tr/th[text()="Nombre de usuario "]', { timeout: 20000 }).should('be.visible')
	cy.xpath('//*[@id="tblUsers"]/thead/tr/th[text()="Correo"]', { timeout: 20000 }).should('be.visible')
	cy.addWait()
});


Then(/^I click on Guardar edit profile$/, () => {
	seguridadPerfilesDAPage.clickEditProfileGuardar()
	// cy.wait(2000)
});

Then(/^I click on delete profile icon$/, () => {
	seguridadPerfilesDAPage.clickDeleteProfile(Profile)
	cy.addWait()
});

Then(/^I click on Desactivar button$/, () => {
	seguridadPerfilesDAPage.desactivarButton()
	seguridadPerfilesDAPage.okButton()
});


Then(/^I click on OK button$/, () => {
	if (Profile === "Administrador") {
		seguridadPerfilesDAPage.okButton()
	} else {
		// cy.contains('Desactivar',{timeout:10000}).click()
		seguridadPerfilesDAPage.okButton()
	}
});


Then(/^I click on Adición de usuarios masivos tab$/, () => {
	seguridadPerfilesDAPage.clickAdiciondeUsuariosMasivos()
	cy.addWait()
});

Then(/^I click on guardar masivos user$/, () => {
	cy.get('#guardarButton', { timeout: 20000 }).should('be.visible').click()
	cy.addWait()
});

Then(/^I validate error message of masivos user$/, () => {
	cy.contains('.error-message.text-danger', 'Por favor seleccione Distrito Judicial').should('be.visible')
	cy.contains('.error-message.text-danger', 'Por favor seleccione un archivo').should('be.visible')
	cy.addWait()
});



Then(/^I select mandatory fields Perfil de Accesso$/, () => {
	seguridadPerfilesDAPage.selectMandatoryFieldPerfilDA()
});

Then(/^I upload Invalid excel file in Archivo field$/, () => {
	cy.get('#fileInput').attachFile('InvalidFile.xlsx')
});

Then(/^I validate error popup masivos user$/, () => {
	cy.xpath('//*[text()="OK"]', { timeout: 20000 }).should('be.visible').click({ force: true })
});



Then(/^I upload valid excel file in Archivo field$/, () => {
	seguridadPerfilesDAPage.uploadFile()
	cy.addWait()
});


Then(/^I validate uploading sheet of usuarios$/, () => {
	cy.wait(1000)
	cy.get('#floatingProgressContainer', { timeout: 20000 }).should('be.visible').click()
	cy.get('#detailedProgressContainer', { timeout: 100000 }).should('not.be.visible')
	cy.addWait()
	cy.get('#swal2-title').should('be.visible')
	cy.xpath('//div[contains(text(),"Total")]', { timeout: 20000 }).should('be.visible')
	cy.xpath('//div[contains(text(),"Éxito")]', { timeout: 20000 }).should('be.visible')
	cy.xpath('//div[contains(text(),"Fallido")]', { timeout: 20000 }).should('be.visible')
	cy.addWait()
	cy.xpath('//*[text()="Aceptar"]', { timeout: 20000 }).should('be.visible').click()
	cy.addWait()

});


Then(/^I validate history of sheet uploaded with ratio$/, () => {
	cy.get('#btnHistoryProfile', { timeout: 20000 }).should('be.visible').click()
	cy.addWait()
	cy.xpath('(//*[@id="tblHistory"]/tbody/tr/td[1])[1]', { timeout: 20000 }).should('be.visible')
	cy.xpath('(//*[@id="tblHistory"]/tbody/tr/td[2])[1]', { timeout: 20000 }).should('be.visible')
	cy.addWait()
	cy.xpath('(//*[@id="tblHistory"]/tbody/tr/td[3])[1]/button', { timeout: 20000 }).should('be.visible').click()
	cy.addWait()
	cy.xpath('//*[contains(text(),"Registros totales")]', { timeout: 20000 }).should('be.visible').click()
	cy.xpath('//*[contains(text(),"Registros de éxito")]', { timeout: 20000 }).should('be.visible').click()
	cy.addWait()
	cy.xpath('//*[contains(text(),"Registros fallidos")]', { timeout: 20000 }).should('be.visible').click()
	cy.addWait()
	cy.xpath('//*[@id="mdlHistoryDetail"]/div/div/div[1]/button/span', { timeout: 20000 }).click()
	cy.wait(3000)
	cy.xpath('//*[@id="mdlHistorialPerfil"]/div/div/div[1]/button/span', { timeout: 20000 }).click()


});










