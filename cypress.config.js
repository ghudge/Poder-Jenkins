const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");


module.exports = defineConfig({

  e2e: {
    baseUrl: 'https://sgcdev-s2.azurewebsites.net/',
    defaultCommandTimeout: 10000,
    // pageLoadTimeout:20000,

    experimentalModifyObstructiveThirdPartyCode: true,
    // viewportHeight:900,
    // viewportWidth:1400,
    // screenshotOnRunFailure:true,
    // video:true,
    // "trashAssetsBeforeRuns": true,  // Delete previous screenshots before each run
    

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // on("before:browser:launch", (browser, launchOptions) => {
      //   console.log(launchOptions.args);
      //   if (browser.name === "chrome") {
      //     launchOptions.args.push("--incognito");
      //     // launchOptions.args.push('--start-fullscreen')
      //   }
      //   return launchOptions;
      // })
    },
    specPattern: "cypress/e2e/Features/*.feature",


    chromeWebSecurity: false
  },
});

