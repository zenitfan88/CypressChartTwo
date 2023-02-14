const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "u57h2u",
  e2e: {
    setupNodeEvents(on, config) {
    },
    "retries": 1,
    "baseUrl": "https://qamid.tmweb.ru/client/index.php",
  },
});
