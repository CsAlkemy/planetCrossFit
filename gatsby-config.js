module.exports = {
  siteMetadata: {
    title: "Box de CrossFit en Picanya (Valencia) - Planet crossfit",
    author: "Planet Cross Fit |Alkemy Hossain",
    imageUrl: "",
    description:
      "Landing page of Planet Cross Fit to display services and other informations ",
    keywords: `Planet Fitness, Planet Cross Fit, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
    twitter: "https://twitter.com/Planet_Crossfit",
    facebook: "https://www.facebook.com/planetcrossfitbox",
    instagram: "https://www.instagram.com/planet_crossfit/",
    siteUrl: `https://www.planetcrossfit.com/`,
  },
  plugins: [`gatsby-plugin-styled-components`],
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Planet CrossFit",
        short_name: "Planet CrossFit",
        start_url: "/",
        background_color: "#2980b9",
        theme_color: "#2980b9",
        display: "standalone",
        icon: "src/images/My-icon.png",
        orientation: "portrait",
      },
    },
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Lucida Grande`,
          `Lucida Sans Unicode`,
          `Trebuchet MS`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },

    {
      resolve: 'gatsby-source-googlemaps-geocoding',
      options: {
        key: 'AIzaSyDXlNM4ZePi7xLfF7QjmTEqkqxwOfc0R3Y',
        address: 'Carrer Barranc de Xiva 6-9 Polígono, Avinguda Alqueria de Moret, 46210, Valencia'
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXXXXX-X",
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true,
      },
    },

    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
