// @ts-check
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://amoddhopavkar.com",
  trailingSlash: "ignore",
  build: {
    // Inline small stylesheets so the page renders in a single request.
    inlineStylesheets: "auto",
  },
})
