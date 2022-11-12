const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'm22spq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})