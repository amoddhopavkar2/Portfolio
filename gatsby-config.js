module.exports = {
  siteMetadata: {
    title: `Amod Dhopavkar`,
    description: `Amod Dhopavkar is a software engineer at Goldman Sachs building backend and platform systems with Java, Spring Boot and Kubernetes.`,
    author: `Amod Dhopavkar`,
    siteUrl: `https://amoddhopavkar.com`,
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        "icon": "src/img/logo/logo.png"
      }
    },
    `gatsby-plugin-sass`,
  ],
}
