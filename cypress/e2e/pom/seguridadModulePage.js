class SeguridadModulePage {
    titleP = '¡Le damos la bienvenida!'
    asignarP = '//*[@id="DivDatoUsuario"]/div[1]/ul/li[1]/a'
    permisosA = '//*[@id="DivDatoUsuario"]/div[1]/ul/li[2]/a'

    perfile = '//*[@data-id="cbPerfil"]'
    sede = '//*[@data-id="cbSede"]'
    distrito = '//*[@data-id="cbDistritoJudicial"]'
    tribunal = '//*[@data-id="cbTribunal"]'
    sala = '//*[@data-id="cbSala"]'

    titlePage() {
        // cy.wait(3000)
        cy.contains(this.titleP).should('be.visible')
    }
    moduleClick() {
        cy.contains('.nav-item', 'Seguridad').scrollIntoView().click()
    }

    // usuariosCard() {
    //     cy.contains('Usuarios').should('be.visible').click()
    // }
    // userList() {
    //     cy.get('#tblUsuario').should('be.visible')
    // }
    // searchUser() {
    //     cy.get('#txtBuscarUsuarios').type('adrubio@poderjudicial.gob.do')
    // }

    // editIcon() {
    //     cy.get('#btnEditar').click()
    //     cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[1]/div[1]/div/label',{timeout:10000}).should('be.visible')
    // }

    // asignarPermisos() {
    //     cy.xpath(this.asignarP).click()
    //         .should('have.class', 'active')
    //         .and('be.visible')
    // }

    // permisosActuales() {
    //     cy.xpath(this.permisosA).click()
    //         .should('have.class', 'active')
    //         .and('be.visible')
    // }

    // validateAllCard() {
    //     // cy.wait(3000)
    //     cy.contains('Usuarios').should('be.visible')
    //     cy.contains('Perfiles de acceso').should('be.visible')
    //     cy.contains('Registros de auditoría').should('be.visible')
    //     cy.contains('Unidad operativa especializada').should('be.visible')
    //     cy.contains('Ayuda').should('be.visible')
    // }

    // guardarClick(){
    //     cy.xpath('//*[@onclick="AgregarrDatoUsuario()" and text()="GUARDAR"]').scrollIntoView().should('be.visible').click({force:true})
    //     cy.wait(4000)
    //     cy.xpath('/html/body/div[9]/div/div[6]/button[1]').should('be.visible').click()
    // }

    // selectPerfile(){
    //     cy.xpath(this.perfile).click()
    //     cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[1]/div[1]/div/div/div/div[2]/input').type('Perfil CAT')
    //     cy.contains('.dropdown-item.active','Perfil CAT').click()
    // }
    // selectSede(){
    //     cy.xpath(this.sede).click()
    //     cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[1]/div[2]/div/div/div/div[2]/input').type('EDIFICIO JUZGADO DE PAZ DE LAS YAYAS')
    //     cy.contains('.dropdown-item.active','EDIFICIO JUZGADO DE PAZ DE LAS YAYAS').click()
    // }
    // selectDistrito(){
    //     cy.xpath(this.distrito).click()
    //     cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[2]/div[1]/div/div/div/div[2]/input').type('DUARTE')
    //     cy.contains('.dropdown-item.active','DUARTE').click()
    // }
    // selectTribunal(){
    //     // cy.xpath(this.tribunal).click()
    //     // cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[2]/div[2]/div/div/div/div[2]/input').type('CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE')
    //     // cy.contains('.dropdown-item.active','CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE').click()
    //     // cy.wait(3000)
    //     // cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[2]/div[2]/div/div/div/div[1]/button').click()
    //     cy.get('#cbTribunal').select('CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE',{force:true})
    // }
    // selectSala(){
    //     // cy.xpath(this.sala).click()
    //     // cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[3]/div/div/div/div/div[2]/input').type('SEGUNDA SALA DE LA CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE')
    //     // cy.contains('.dropdown-item.active','SEGUNDA SALA DE LA CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE')
    //     // cy.wait(3000)
    //     // cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[3]/div/div/div/div/div[1]/button').click()
    //     cy.get('#cbSala').select('SEGUNDA SALA DE LA CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE',{force:true})
    // }

    // editOptionPermisosActual(){
    //     cy.contains('.d-flex.align-items-center','JUZGADO DE LA INSTRUCCION DE DUARTE').click()
    //     cy.wait(3000)
    //     cy.xpath('//span[text()=" - OFICINA JUDICIAL DE SERVICIOS DE ATENCION PERMANENTE DE DUARTE "]/../div/i[@class="la la-edit la-2x yellow"]').click({force:true})
    //     cy.wait(3000)
    //     cy.contains('.form-check-sign','Centro de Mediación').scrollIntoView().click()
    //     cy.wait(2000)
    //     cy.contains('.form-check-sign','Entrevistas').scrollIntoView().click()
    //     cy.wait(2000)
    //     cy.contains('.form-check-sign','Sorteo').scrollIntoView().click()
    //     cy.wait(2000)
    //     cy.contains('.form-check-sign','Implementaciones').scrollIntoView().click()
    //     cy.wait(2000)
    //     this.guardarClick()
    //     // cy.xpath('//*[@id="tribunal_224"]/li/div/i[1]').click()
    //     // cy.get('#tribunal_224 > .sala-item > .tools > .la-edit').click()
    //     // cy.get('#tribunal_248 > .sala-item > .tools > .la-edit').click()
    // }
    // deleteOptionPermisosActual(){
    //     cy.contains('.d-flex.align-items-center','JUZGADO DE TRABAJO DE LA VEGA').click()
    //     cy.wait(3000)
    //     cy.xpath('//span[text()=" - JUZGADO DE TRABAJO DE LA VEGA "]/../div/i[@class="la la-trash la-2x text-danger"]').click({force:true})
    //     // cy.wait(2000)
    //     // cy.contains('Inactivar').should('be.visible')
    //     cy.wait(2000)
    //     cy.get('.swal2-cancel').click({force:true})

    // }

    // searchPermisos(){
    //     cy.get('#searchPermisos').type('- OFICINA JUDICIAL DE SERVICIOS DE ATENCION PERMANENTE DE DUARTE')
    //     cy.contains('.d-flex.align-items-center','- OFICINA JUDICIAL DE SERVICIOS DE ATENCION PERMANENTE DE DUARTE').click()
    //     cy.wait(3000)
    //     cy.xpath('//*[text()="- OFICINA JUDICIAL DE SERVICIOS DE ATENCION PERMANENTE DE DUARTE"]/../../div/i[@class="la la-edit la-2x yellow"]').click({force:true})
    // } 
    usuariosCard() {
        cy.contains('Usuarios', { timeout: 20000 }).should('be.visible').click()
    }
    userList() {
        cy.get('#tblUsuario', { timeout: 20000 }).should('be.visible')
    }
    searchUser() {
        cy.get('#txtBuscarUsuarios', { timeout: 20000 }).should('be.visible').type('adrubio@poderjudicial.gob.do')
    }

    editIcon() {
        cy.get('#btnEditar').click()
        cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[1]/div[1]/div/label', { timeout: 10000 }).should('be.visible')
    }

    asignarPermisos() {
        cy.xpath(this.asignarP, { timeout: 20000 }).click().should('have.class', 'active')
    }

    permisosActuales() {
        cy.xpath(this.permisosA, { timeout: 20000 }).click().should('have.class', 'active')
    }

    validateAllCard() {
        // cy.wait(3000)
        cy.contains('Usuarios', { timeout: 20000 }).should('be.visible')
        cy.contains('Perfiles de acceso', { timeout: 20000 }).should('be.visible')
        cy.contains('Registros de auditoría', { timeout: 20000 }).should('be.visible')
        cy.contains('Unidad operativa especializada', { timeout: 20000 }).should('be.visible')
        cy.contains('Ayuda', { timeout: 20000 }).should('be.visible')
    }

    guardarClick() {
        cy.xpath('//*[@onclick="AgregarrDatoUsuario()" and text()="GUARDAR"]', { timeout: 20000 }).scrollIntoView().should('be.visible').click({ force: true })
        cy.xpath('/html/body/div[9]/div/div[6]/button[1]', { timeout: 30000 }).should('be.visible').click()
    }

    selectPerfile(data) {
        cy.xpath(this.perfile, { timeout: 20000 }).scrollIntoView().should('be.visible').click()
        cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[1]/div[1]/div/div/div/div[2]/input').type(data)
        cy.contains('.dropdown-item.active', data).click()
    }
    selectSede() {
        cy.xpath(this.sede, { timeout: 20000 }).should('be.visible').click()
        cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[1]/div[2]/div/div/div/div[2]/input').type('EDIFICIO JUZGADO DE PAZ DE LAS YAYAS')
        cy.contains('.dropdown-item.active', 'EDIFICIO JUZGADO DE PAZ DE LAS YAYAS').click()
    }
    selectDistrito() {
        cy.xpath(this.distrito, { timeout: 20000 }).should('be.visible').click()
        cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[2]/div[1]/div/div/div/div[2]/input').type('DUARTE')
        cy.contains('.dropdown-item.active', 'DUARTE').click()
    }
    selectTribunal() {
        cy.xpath(this.tribunal).click()
        cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[2]/div[2]/div/div/div/div[2]/input').type('CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE')
        cy.contains('.dropdown-item.active','CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE').click()
        cy.wait(3000)
        cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[2]/div[2]/div/div/div/div[1]/button').click()
        // cy.get('#cbTribunal').select('CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE', { force: true })
    }
    selectSala() {
        cy.xpath(this.sala).click()
        cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[3]/div/div/div/div/div[2]/input').type('SEGUNDA SALA DE LA CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE')
        cy.contains('.dropdown-item.active','SEGUNDA SALA DE LA CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE').click()
        cy.wait(3000)
        cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[3]/div/div/div/div/div[1]/button').click()
        // cy.get('#cbSala').select('SEGUNDA SALA DE LA CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE', { force: true })
    }

    editOptionPermisosActual() {

        cy.contains('.d-flex.align-items-center', 'CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE').click()
        cy.xpath('//span[contains( text(),"- SEGUNDA SALA DE LA CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE")]/../div/i[@class="la la-edit la-2x yellow"]').click({ force: true })
        cy.contains('.form-check-sign', 'Centro de Mediación').scrollIntoView().click()
        cy.contains('.form-check-sign', 'Entrevistas').scrollIntoView().click()
        cy.contains('.form-check-sign', 'Sorteo').scrollIntoView().click()
        cy.contains('.form-check-sign', 'Implementaciones').scrollIntoView().click()
        this.guardarClick()
        // cy.xpath('//*[@id="tribunal_224"]/li/div/i[1]').click()
        // cy.get('#tribunal_224 > .sala-item > .tools > .la-edit').click()
        // cy.get('#tribunal_248 > .sala-item > .tools > .la-edit').click()
    }
    deleteOptionPermisosActual() {

        cy.contains('.d-flex.align-items-center', 'CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE').click()
        // cy.wait(3000)
        cy.xpath('//span[contains( text(),"- SEGUNDA SALA DE LA CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE")]/../div/i[@class="la la-trash la-2x text-danger"]').click({ force: true })
        // cy.wait(2000)
        // cy.contains('Inactivar').should('be.visible')
        cy.xpath('//*[text()="Inactivar"]', { timeout: 20000 }).should('be.visible').click({ force: true })
        cy.xpath('//*[text()="OK"]', { timeout: 20000 }).should('be.visible').click({ force: true })
        // cy.contains('.d-flex.align-items-center', 'CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE', { timeout: 20000 }).should('not.be.visible')
        // cy.get('.swal2-cancel').click({ force: true })

    }

    searchPermisos() {
        cy.get('#searchPermisos').type('SEGUNDA SALA DE LA CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE')
        cy.contains('.highlight', 'SEGUNDA SALA DE LA CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE', { timeout: 20000 }).should('be.visible')
        cy.get('#searchPermisos').clear()
        // cy.xpath('//*[text()="- OFICINA JUDICIAL DE SERVICIOS DE ATENCION PERMANENTE DE DUARTE"]/../../div/i[@class="la la-edit la-2x yellow"]').click({ force: true })
    }

}
export default new SeguridadModulePage()