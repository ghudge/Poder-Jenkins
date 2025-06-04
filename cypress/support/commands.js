// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import loginPage from "../e2e/pom/loginPage"

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginWebsite', (email, password) => {
  cy.clearCookies()
  loginPage.originPage()
  loginPage.enterEmail(email)
  cy.wait(1000)
  loginPage.yesButton()
  cy.wait(1000)
  loginPage.enterPassword(password)
  cy.wait(1000)
  loginPage.yesButton()
  cy.wait(1000)
  loginPage.yesButton()
  //  cy.wait(2000)
  //  loginPage.yesButton()
  //  cy.wait(2000)
  loginPage.titleHome()
})




Cypress.Commands.add('addWait', () => {
  cy.wait(2000)
})

// Cypress.on('uncaught:exception', (err) => {
//    // Ignore errors related to 'focus' or other known errors
//    if (err.message.includes('Cannot read properties of undefined') && err.message.includes('focus')) {
//      return false; // Prevent the test from failing
//    }
//    else if(err.message.includes('imprimirMensaje is not defined') || err.message.includes('Cannot read properties of null') || err.message.includes('Things went bad')){
//     return false
//    }
//    return true; // Allow other errors to cause failure
//  });
Cypress.on('uncaught:exception', (e) => {
  // Return false for any exception
  return false;
});



Cypress.Commands.add('urlRedirect', () => {
  cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url) => {
      win.location.href = url;
    });
  });

})


// cypress/support/index.ts

// let isTestFailed = false;

// // Listen for test failures globally
// Cypress.on('fail', (error, runnable) => {
//    console.log('Test failed, skipping subsequent tests:', error);
//    isTestFailed = true; // Set the flag to indicate failure
//    return false;  // Prevent Cypress from terminating immediately
// });

// Before each test, check if a failure has occurred, and skip the test if necessary
// beforeEach(function () {
//   if (isTestFailed) {
//     // Skip the current test if a previous test failed
//     this.skip();
//   }
// });


// Reset the failure flag after all tests have run
// afterEach(() => {
//    //   isTestFailed = false;
//    if (isTestFailed) {
//       // Skip the current test if a previous test failed
//       this.skip();
//       // this.fail()

//    }
// });
// import './commands';

// // Automatically take a screenshot after each test step (both pass and fail)
// afterEach(function () {
//   // Capture a screenshot after each step
//   const testName = this.currentTest.title;
//   const result = this.currentTest.state;

//   // Save screenshot with a custom filename (using test name and result)
//   cy.screenshot(`${testName} - ${result}`, {
//     capture: 'runner', // 'runner' captures the whole browser window
//   });
// });
// // Automatically take screenshots after each test step (pass or fail)
// afterEach(function () {
//   // Get the current test name and its result (pass/fail)
//   const testName = this.currentTest.title; // The current test step name
//   const result = this.currentTest.state; // Test result: 'passed' or 'failed'

//   // Custom screenshot filename
//   const scenarioName = this.currentTest.parent.title; // The parent scenario name
//   const screenshotName = `${scenarioName} - ${testName} - ${result}`;

//   // Take a screenshot with the custom name
//   cy.screenshot(screenshotName, {
//     capture: 'runner', // Capture the entire browser window
//   });
// });
