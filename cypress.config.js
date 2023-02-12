const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "retries": 1,
    "baseUrl": "https://qamid.tmweb.ru/client/index.php",
  },
});
