const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2ie27g",
  e2e: {
    setupNodeEvents(on, config) {
    },
    "retries": 1,
    "baseUrl": "https://qamid.tmweb.ru/client/index.php",
  },
});
