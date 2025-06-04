
class SeguridadPerfilesDAPage{
    titleP = '¡Le damos la bienvenida!'
    agregarPerfil='#btnAddProfile'
    profileName='#profileAddName'
    profileDescription='#profileDescription'
    guardar='#btnSaveProfile'
    searchP='#txtBuscarPerfill'
    adiciondeUsuariosMasivos='#aTabAddProfileUsers'
    searchPerfilDA='//*[@id="addProfileUsers"]/div[1]/div[2]/div[3]/div/div/div/div[2]/input'

    titlePage() {
        cy.wait(3000)
        cy.contains(this.titleP).should('be.visible')
    }
    moduleClick() {
        cy.contains('.nav-item', 'Seguridad').scrollIntoView().click()
    }
    // validateAllCard() {
    //     cy.wait(3000)
    //     cy.contains('Usuarios').should('be.visible')
    //     cy.contains('Perfiles de acceso').should('be.visible')
    //     cy.contains('Registros de auditoría').should('be.visible')
    //     cy.contains('Unidad operativa especializada').should('be.visible')
    //     cy.contains('Ayuda').should('be.visible')
    // }
                    
    // clickPerfilesDeAccesso(){
    //     cy.contains('Perfiles de acceso').should('be.visible').click()
    // }
    // clickAgregarperfil(){
    //     cy.wait(2000)
    //     cy.get(this.agregarPerfil).should('be.visible').click()
    // }
    // enterProfileName(){
    //     cy.get(this.profileName).type('Adarleny')
    // }
    // enterProfileDescription(){
    //     cy.get(this.profileDescription).type('This is Adarleny profile')
    // }
    // selectModules(){
    //     cy.contains('.form-check-sign','Depósitos').click()
    //     cy.wait(2000)
    //     cy.contains('.form-check-sign','Registrar').click()
    //     cy.wait(2000)
    //     cy.contains('.form-check-sign','Presencial').click()
    //     cy.wait(2000)
    // }
    // clickGuardar(){
    //     cy.get(this.guardar).should('be.visible').click()
    // }
    // searchProfile(profile){
    //     cy.wait(2000)
    //     cy.get(this.searchP).clear().type(profile)
    // }
    // clickViewDetails(profile){
    //     cy.wait(2000)
    //     cy.xpath('//*[text()="'+profile+'"]/../td[2]/i[@class="btn_accion la la-eye la-2x cursor-pointer"]').click()
    // }
    // clickEditProfile(profile){
    //     cy.wait(2000)
    //     cy.xpath('//*[text()="'+profile+'"]/../td[2]/i[@class="btn_accion la la-edit la-2x cursor-pointer"]').click()
    // }
    // clickEditProfileGuardar(){
    //     cy.get('#btnSaveEditProfile').click()
    // }
    // clickDeleteProfile(profile){
    //     cy.wait(2000)
    //     // cy.get('.delete-container').click()
    //     cy.xpath('//*[text()="'+profile+'"]/../td[2]/span/i[@class="btn_accion_del la la-trash la-2x cursor-pointer"]').click()
    // }
    // desactivarButton(){
    //     cy.wait(2000)
    //     cy.contains('Desactivar').should('be.visible').click() 
    // }
    // okButton(){
    //     cy.wait(2000)
    //     cy.contains('OK',{timeout:10000}).should('be.visible').click()
    // }
    // cancelButton(){
    //     cy.wait(2000)
    //     cy.contains('Cancel').should('be.visible').click()
    // }
    // clickAdiciondeUsuariosMasivos(){
    //     cy.get(this.adiciondeUsuariosMasivos).click()
    //     cy.wait(2000)
    // }
    // selectMandatoryFieldPerfilDA(){
    //     cy.get('[data-id="cbDistritoJudicial2"]').click()
    //     // cy.xpath(this.searchPerfilDA).type('AZUA',{force: true})
    //     // cy.xpath('//*[@class="dropdown-menu inner show"]/li/a/span[text()="AZUA"]').click()
    //     cy.xpath('//*[@class="dropdown-item"]/span[text()="AZUA"]').click()
    //     cy.wait(3000)

    //     // cy.get('[data-id="cbTribunal2"]').click()
    //     // cy.xpath(this.searchPerfilDA).type('JUZGADO DE PAZ DE AZUA',{force: true})
    //     // cy.xpath('//*[@class="dropdown-item active"]/span[text()="JUZGADO DE PAZ DE AZUA"]').click()
    //     // // cy.xpath('//*[@class="dropdown-menu inner show"]/li/a/span[text()="JUZGADO DE PAZ DE AZUA"]').click()
    //     // cy.get(this.adiciondeUsuariosMasivos).click()
    //     // cy.wait(3000)
    //     cy.get('#cbTribunal2').select('JUZGADO DE PAZ DE AZUA',{force:true})
    //     cy.wait(3000)

    //     // cy.get('[data-id="cbSala2"]').click()
    //     // cy.xpath(this.searchPerfilDA).type('JUZGADO DE PAZ DE AZUA',{force: true} )
    //     // cy.xpath('//*[@class="dropdown-item active"]/span[text()="JUZGADO DE PAZ DE AZUA"]').click()
    //     // // cy.xpath('//a[@class="dropdown-item"]//span[@class="text"][normalize-space()="JUZGADO DE PAZ DE AZUA"]').click()
    //     // cy.get(this.adiciondeUsuariosMasivos).click() 
    //     cy.get('#cbSala2').select('JUZGADO DE PAZ DE AZUA',{force:true})
    //     cy.wait(3000)
    // }

    // uploadFile(){
    //     cy.get('#fileInput').attachFile('UserName.xlsx')
    // }
    validateAllCard() {
        cy.wait(3000)
        cy.contains('Usuarios', { timeout: 20000 }).should('be.visible')
        cy.contains('Perfiles de acceso', { timeout: 20000 }).should('be.visible')
        cy.contains('Registros de auditoría', { timeout: 20000 }).should('be.visible')
        cy.contains('Unidad operativa especializada', { timeout: 20000 }).should('be.visible')
        cy.contains('Ayuda', { timeout: 20000 }).should('be.visible')
    }
                    
    clickPerfilesDeAccesso(){
        cy.contains('Perfiles de acceso', { timeout: 20000 }).should('be.visible').click()
    }
    clickAgregarperfil(){
        cy.wait(2000)
        cy.get(this.agregarPerfil, { timeout: 20000 }).should('be.visible').click()
    }
    
    enterProfileName(data){
        cy.get(this.profileName).type(data)
    
    }
    enterProfileDescription(){
        cy.get(this.profileDescription).type('This is Adarleny profile')
    }
    selectModules(){
        cy.contains('.form-check-sign','Depósitos').click()
        cy.contains('.form-check-sign','Registrar').click()
        cy.contains('.form-check-sign','Presencial').click()
    }
    clickGuardar(){
        cy.get(this.guardar, { timeout: 20000 }).should('be.visible').click()
        cy.xpath('//*[text()="OK"]', { timeout: 20000 }).should('be.visible').click({ force: true })
    }
    searchProfile(profile){
        cy.get(this.searchP).clear().type(profile)
    }
    clickViewDetails(profile){
        cy.xpath('//*[text()="'+profile+'"]/../td[2]/i[@class="btn_accion la la-eye la-2x cursor-pointer"]').click()
    }
    clickEditProfile(profile){
        cy.xpath('//*[text()="'+profile+'"]/../td[2]/i[@class="btn_accion la la-edit la-2x cursor-pointer"]').click()
    }
    clickEditProfileGuardar(){
        cy.get('#btnSaveEditProfile').click()
    }
    clickDeleteProfile(profile){
        cy.xpath('//*[text()="'+profile+'"]/../td[2]/span/i[@class="btn_accion_del la la-trash la-2x cursor-pointer"]').click()
    }
    desactivarButton(){
        cy.contains('Desactivar', { timeout: 20000 }).should('be.visible').click() 
    }
    okButton(){
        cy.addWait()
        cy.contains('OK',{timeout:10000}).click()
        
    }
    cancelButton(){
        cy.contains('Cancel', { timeout: 20000 }).should('be.visible').click()
    }
    clickAdiciondeUsuariosMasivos(){
        cy.get(this.adiciondeUsuariosMasivos).click()
    }
    selectMandatoryFieldPerfilDA(){
        cy.get('[data-id="cbDistritoJudicial2"]').click()
        cy.xpath('//*[@class="dropdown-item"]/span[text()="AZUA"]').click()
        cy.get('#cbTribunal2').select('JUZGADO DE PAZ DE AZUA',{force:true})
        cy.get('#cbSala2').select('JUZGADO DE PAZ DE AZUA',{force:true})
    }

    uploadFile(){
        cy.get('#fileInput').attachFile('ValidFile.xlsx')
    }
}
export default new SeguridadPerfilesDAPage()