class LoginPage {

  get email() { return cy.get('[name="loginfmt"]') }
  get password() { return cy.get('[name="passwd"]') }
  get yesB() { return cy.get('#idSIButton9') }

  originPageInvalid() {
    cy.viewport('macbook-16')
    cy.origin('https://login.microsoftonline.com/', () => {
      cy.visit('https://sgcdev-release.azurewebsites.net/')
    })
    cy.on('uncaught:exception', (e) => {
      // Return false for any exception
      return false;
    });

  }

  originPage() {
    cy.viewport('macbook-16')
    cy.origin('https://login.microsoftonline.com/', () => {
      cy.visit('http://sgcdev-s2.azurewebsites.net/')
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes("Cannot read properties of undefined")) {
          // return false to prevent test failure
          return false;
        }
      });
    })
    cy.on('uncaught:exception', (e) => {
      // Return false for any exception
      return false;
    });

  }
  titleHome() {
    cy.reload()
    cy.xpath('//p[text()="¡Le damos la bienvenida!"]').should('be.visible')
  }
  enterEmail(data) {
    this.email.type(data)
  }
  enterPassword(data) {
    this.password.type(data)
  }
  yesButton() {
    this.yesB.click()

  }

  clearDropdown() {
    cy.xpath('//*[@id="btnLimpiarfiltros"]').click()
  }

}
export default new LoginPage();