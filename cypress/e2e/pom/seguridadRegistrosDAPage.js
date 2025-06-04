class SeguridadRegistrosDAPage {
    titleP = '¡Le damos la bienvenida!'
    card = '.card-title-card'
    tabRegistrosdeAuditoria = '#aTabAuditLogs'
    tabRegistrosdeSeguridad = '#aTabSeguridadLogs'
    seleccionarTiempo = '[data-id="filtroTiempo"]'
    filterRegistroSeguridad = '[data-id="filtroTiempoSeguridad"]'
    filterType = '[data-id="selectFilterType"]'
    resultTableSeguridad = '#tblAuditLogsSeguridad'
    resultTable = '#tblAuditLogs'

    searchIconR = '#applyFilterBtn'
    searchIconRSegu = '#applyFilterBtnSeguridad'

    titlePage() {
        // cy.wait(3000)
        cy.contains(this.titleP).should('be.visible')
    }

    moduleClick() {
        cy.contains('¡Le damos la bienvenida!').should('be.visible')
        cy.contains('.nav-item', 'Seguridad').scrollIntoView().click()
    }
    validateAllCard() {
        cy.wait(3000)
        cy.contains('Usuarios').should('be.visible')
        cy.contains('Perfiles de acceso').should('be.visible')
        cy.contains('Registros de auditoría').should('be.visible')
        cy.contains('Unidad operativa especializada').should('be.visible')
        cy.contains('Ayuda').should('be.visible')
    }

    clickModule() {
        cy.get(this.card).contains('Registros de auditoría').should('be.visible').click()
    }
    clickTabRegistrosdeAuditoria() {
        cy.get(this.tabRegistrosdeAuditoria).click()
    }
    selectFilterSeleccionarTiempo(data) {
        cy.get(this.seleccionarTiempo).click()
        cy.xpath('//*[@class="dropdown-menu show"]/div/ul/li/a/span[2][text()="' + data + '"]').click()
    }
    clickSearchIconR() {
        cy.get(this.searchIconR).click()
    }
    selectFromDate(date) {
        cy.get('#fromDate').type(date)
    }
    selectToDate(date) {
        cy.get('#toDate').type(date)
    }
    clickAplicarButton() {
        cy.contains('Aplicar').should('be.visible').click()
    }
    selectFilterType(data) {
        cy.get(this.filterType).should('be.visible').click()
        cy.xpath('//*[@class="dropdown-menu show"]/div/ul/li/a/span[2][text()="' + data + '"]').click()
    }
    enterFilterDescription(data) {
        cy.get('#filtroDescripcion').clear()
            .type(data)
    }
    clickTabRegistrosdeSeguridad() {
        cy.get(this.tabRegistrosdeSeguridad).click()
    }
    selectFilterRegistrosSeguridad(data) {
        cy.get(this.filterRegistroSeguridad).click()
        cy.xpath('//*[@class="dropdown-menu show"]/div/ul/li/a/span[2][text()="' + data + '"]').click()
    }
    clickSearchIconRSegu() {
        cy.get(this.searchIconRSegu).should('be.visible').click()
    }



}
export default new SeguridadRegistrosDAPage()