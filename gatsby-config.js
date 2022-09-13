module.exports = {
  siteMetadata: {
    title: 'MathemaTIC',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'MathemaTIC',
        short_name: 'MTIC',
        background_color: `#2096ff`,
        theme_color: `#2096ff`,
        start_url: '/',
        icon: 'src/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/news/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 730,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    // `gatsby-plugin-netlify`,
    // `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [
          `String.prototype.startsWith`,
          `Object.entries`,
          `Array.prototype.includes`,
          `Array.prototype.findIndex`,
          `Set`,
          `Object.from`,
          `Promise`,
        ],
      },
    },
    // 'gatsby-plugin-offline',
    // I'm assuming the gatsby-plugin-offline was causing issues with loading cached old styles, so trying this plugin
    'gatsby-plugin-remove-serviceworker',
  ],
}
