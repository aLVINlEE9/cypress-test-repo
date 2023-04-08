import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e-tests/**/*.cy.{js,jsx,ts,tsx}",
  },
  component: {
    specPattern: "cypress/component-tests/**/*.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
