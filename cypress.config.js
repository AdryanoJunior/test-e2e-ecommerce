const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9td5o6",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://demo.sylius.com/en_US/",
    //video: true,
  },
});
