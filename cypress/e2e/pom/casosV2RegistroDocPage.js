import moment from "moment"
class CasosV2RDPage {
    titleP = '¡Le damos la bienvenida!'
    dropDownOption = '[class="dropdown-item active"]'
    tipoIdentification = '[data-id="cbTipoIdentificacionTR"]'
    identificationCode = '#txtIdentificacionTR'
    subjectDrop = '[data-id="cbMateriaTR"]'
    tribunalDrop = '[data-id="cbTribunalTR"]'
    typeProcess = '[data-id="cbTipoProcedimientoTR"]'
    asuntos = '[data-id="cbAsuntosTR"]'
    registroPartes = '#btnRegistrosPartes'
    siguiente = '#progress-next'
    invaluCramiento = '[data-id="pTipoInvolucramiento"]'
    typeCalidad = '[data-id="pCalidad"]'
    preferenciadeaudiencia = '[data-id="pPreferenciaAudiencia"]'
    guardarB = '#btnGuardarParte'
    typeDocumento = '[data-id="dTipoDocumento"]'
    condicionDoc = '[data-id="dCondicionDocumento"]'
    devueltoU = '[data-id="cbDevueltoUsuario"]'
    tipoC = '[data-id="dTipoCalidad"]'
    vincuDepo = '[data-id="dDepositantes"]'
    confiden = '[data-id="dConfidencial"]'
    editar = '#btnEditarDocumento'

    titlePage() {
        cy.wait(3000)
        cy.contains(this.titleP).should('be.visible')
    }

    moduleClick(moduleN) {
        cy.contains('.nav-item', moduleN).scrollIntoView().click()
    }
    searchwithNUC_CasosV2(data) {
        cy.xpath('//h2[text()="Consulta de Casos"]', { timeout: 10000 }).should('be.visible')
        cy.wait(5000)
        cy.get('#btnLimpiarfiltros').click()
        cy.wait(4000)
        cy.get('[data-id="cbCriterio"]').click({ force: true })
        cy.xpath('//*[@class="dropdown-item"]/span[text()="Número único de caso (NUC)"]').scrollIntoView().click()
        cy.wait(3000)
        cy.xpath('//*[@id="txtCriterioFiltro"]').scrollIntoView().type(data)
        cy.wait(2000)
        cy.get('#btnBuscarCasos').click()
    }
    clickVertramitesButton(data) {
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url;
            });
        });
        cy.xpath('//*[text()="' + data + '"]/../../../../td[4]/div/button', { timeout: 20000 }).should('be.visible').click()

    }
    clickPlusIconRegistroDoc() {
        cy.get('#BtnNuevotramite', { timeout: 10000 }).click()
    }
    clickTipoIdentification() {
        cy.get(this.tipoIdentification, { timeout: 10000 }).should('be.visible').click()
    }
    clickDropDownOption() {
        cy.get(this.dropDownOption).should('be.visible').click()
    }
    enterIdentificationCode(code) {
        cy.get(this.identificationCode, { timeout: 10000 }).should('be.visible').type(code)
        cy.xpath('//*[@id="tagRecepcion"]/div/div[1]/div[3]/div/label').click()
    }
    clickSubjectDrop() {
        cy.get(this.subjectDrop).should('be.visible').click()
    }
    clickTypeProcess() {
        cy.get(this.typeProcess).should('be.visible').click()
    }
    clickTribunalDrop() {
        cy.get(this.tribunalDrop, { timeout: 20000 }).should('be.visible').click()
    }
    clickSalaDrop() {
        cy.get('[data-id="cbSalaTR"]', { timeout: 20000 }).should('be.visible').click()
    }
    clickAsuntos() {
        cy.get(this.asuntos, { timeout: 20000 }).should('be.visible').click()
    }
    clickSiguienteButton() {
        cy.get(this.siguiente, { timeout: 20000 }).should('be.visible').and('be.enabled').click()
    }

    
    clickRegistroPartes() {
        cy.get(this.registroPartes, { timeout: 10000 }).should('be.visible').click()
    }

    clickInvaluCramiento() {
        cy.get(this.invaluCramiento).should('be.visible').click()
    }
    clickTypeCalidad() {
        cy.get(this.typeCalidad).should('be.visible').click()
    }
    selectPreferenciadeaudiencia(data) {
        cy.get(this.preferenciadeaudiencia).scrollIntoView().click()
        cy.contains('.dropdown-item', data).click()
    }
    selectTipoDeIdentification(typeI) {
        cy.get('[data-id="pTipoIdentificacion"]').scrollIntoView().click()
        cy.xpath('//*[@id="parteForm"]/div/div[8]/div[1]/div/div/div/div/div[2]/input').type(typeI)
        this.clickDropDownOption()
    }
    typeIdentiCodeparte(code) {
        cy.get('#pIdentificacion').type(code)
        cy.wait(4000)
    }
    notification(typeC) {
        if (typeC === 'Parte no involucrada') {
            cy.get('[data-id="pRecibirNotificaciones"]').scrollIntoView()
                .should('have.attr', 'aria-disabled')
        } else {
            cy.xpath('//*[@id="parteForm"]/div/div[12]/div[1]/div/label').scrollIntoView()
            cy.get('#pRecibirNotificaciones').select('Telemática', { force: true })
        }
    }
    clickGuardarButton() {
        cy.wait(3000)
        cy.get(this.guardarB, { timeout: 10000 }).should('be.visible').and('be.enabled').click({ force: true })
        cy.wait(3000)
        // cy.get(this.guardarB).should('be.visible').and('be.enabled').click({ force: true })
    }

    clickNuevoDocumento() {
        cy.get('#btnCrearNuevoDocumento').should('be.visible').click()
        cy.wait(2000)
    }
    enterDateDocument() {
        let date = moment()
        let d = date.format('DD/MM/YYYY')
        cy.get('#dFechaRecepcion').should('be.visible').click().type(d)
        cy.wait(2000)
    }
    selectTypeDocumento(doc) {
        cy.get(this.typeDocumento).should('be.visible').click()
        cy.contains('.dropdown-item', doc).scrollIntoView().should('be.visible').click()
        cy.wait(2000)
    }
    uploadDocumento(doc) {
        cy.get('#dDocumento').attachFile(doc, { force: true })
        cy.wait(2000)
    }
    enterNombreDocumento(docno) {
        cy.get('#dNombreDocumento').clear().should('be.visible').type(docno)
        cy.wait(2000)
    }
    selectCondicionDocumento(conDoc) {
        cy.get(this.condicionDoc).should('be.visible').click()
        cy.contains('.dropdown-item', conDoc).scrollIntoView().should('be.visible').click()
        cy.wait(2000)
    }
    selectDevueltoUsuario() {
        cy.get(this.devueltoU).should('be.visible').click()
        // cy.contains('.dropdown-item', 'Si').click({ force: true })
        cy.xpath('//*[@id="filaDocumento"]/div[3]/div/div/div/div/div[3]/ul/li[2]/a').click({ force: true })
        cy.wait(2000)
    }
    selectTipoCalidad(data) {
        cy.get(this.tipoC).should('be.visible').click()
        cy.xpath('//*[@id="documentoForm"]/div[2]/div[1]/div/div/div/div/div[2]/input').type(data)
        cy.xpath('//*[@data-id="dTipoCalidad"]/../div/div[3]/ul/li/a[@class="dropdown-item active" or @class="dropdown-item" ]/span[2][text()="' + data + '"]').click({ force: true })
        cy.wait(2000)

        // cy.get('#dTipoCalidad').select('Tribunal',{force:true})
    }
    tribunalSubField() {
        cy.get('#dropDownDistritoJudicial', { timeout: 10000 }).should('be.visible')
        cy.get('#dropDownTribunal', { timeout: 10000 }).should('be.visible')
        cy.get('#dropDownSala', { timeout: 10000 }).should('be.visible')
    }
    selectVinDepositantes(data) {
        cy.get(this.vincuDepo).should('be.visible').click({ force: true })
        // cy.contains('.dropdown-item', 'Parte no involucrada').click({force:true})
        cy.xpath('//*[@id="dropDownVinculado"]/div/div/div/div/div[2]/input').type(data)
        cy.xpath('//*[@class="dropdown-item active"]').click({ force: true })
        cy.wait(2000)
    }
    selectConfidencial() {
        cy.get(this.confiden).should('be.visible').click()
        // cy.contains('.dropdown-item', 'Si').click({ force: true })
        cy.xpath('//*[@id="documentoForm"]/div[2]/div[6]/div/div/div/div/div[3]/ul/li[2]/a').click({ force: true })
        cy.wait(2000)
    }
    enterCantidadPagina(page) {
        cy.get('#dCantidadPagina').clear().should('be.visible').type(page)
        cy.wait(2000)
    }
    clickGuardarDocumentos() {
        cy.get('#btnGuardarDocumentos').should('be.visible').click({ force: true })
        cy.wait(2000)
    }
    clickFinalizer() {
        cy.get('#BtnFinalizar', { timeout: 10000 }).click()
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
            });
        });
        cy.get('.swal2-confirm', { timeout: 10000 }).click()
        cy.get('#swal2-title', { timeout: 30000 }).should('be.visible')
    }
    clickEditarDocumento() {
        cy.get(this.editar).should('be.visible').click()
    }
    clickRemoveDocumento() {
        cy.get('#dRemoverDoc').should('be.visible').click()
    }
    selectTipoCalidad(data) {
        cy.get(this.tipoC).should('be.visible').click()
        cy.xpath('//*[@id="documentoForm"]/div[2]/div[1]/div/div/div/div/div[2]/input').type(data)
        cy.xpath('//*[@data-id="dTipoCalidad"]/../div/div[3]/ul/li/a[@class="dropdown-item active" or @class="dropdown-item" or @class="dropdown-item selected" ]/span[2][text()="' + data + '"]').click({ force: true })
        cy.wait(2000)

        // cy.get('#dTipoCalidad').select('Tribunal',{force:true})
    }
    selectDistritoJudicial(data){
        cy.get('[data-id="dDistritoJudicial"]',{timeout:20000}).click()
        cy.xpath('//*[@id="dropDownDistritoJudicial"]/div/div/div/div/div[2]/input').type(data)
        // this.clickDropDownOption()
        cy.xpath('//*[@class="dropdown-item active"]/span[2][text()="'+data+'"]').click()
        // cy.xpath('//*[@id="dropDownDistritoJudicial"]/div/div/div/div/div[3]/ul/li/a').click()
        cy.wait(2000)
    }
    selectTribunal(data){
        cy.get('[data-id="dTribunal"]',{timeout:20000}).click()
        cy.xpath('//*[@id="dropDownTribunal"]/div/div/div/div/div[2]/input').type(data)
        // this.clickDropDownOption()
        cy.xpath('//*[@class="dropdown-item active"]/span[2][text()="'+data+'"]').click()
        cy.wait(2000)
    }
}
export default new CasosV2RDPage()