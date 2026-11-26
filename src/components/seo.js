import * as React from "react"

const seoData = {
  "title": "Amod Dhopavkar | Software Engineer",
  "description": "Amod Dhopavkar is a software engineer at Goldman Sachs building backend and platform systems with Java, Spring Boot and Kubernetes.",
  "author": "Amod Dhopavkar",
  "siteUrl": "https://amoddhopavkar.com",
  "image": "/og-image.png",
  "imageAlt": "Amod Dhopavkar, Software Engineer: Java, Spring Boot, Kubernetes, Distributed Systems",
}

const imageUrl = `${seoData.siteUrl}${seoData.image}`

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <link rel="canonical" href={`${seoData.siteUrl}/`} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${seoData.siteUrl}/`} />
    <meta property="og:site_name" content={seoData.author} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:secure_url" content={imageUrl} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content={seoData.imageAlt} />
    <meta name="author" content={seoData.author} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
    <meta name="twitter:image" content={imageUrl} />
    <meta name="twitter:image:alt" content={seoData.imageAlt} />
  </>
)

export default Seo
