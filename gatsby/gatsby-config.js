const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-top-layout',
    'gatsby-plugin-react-helmet',
    // If you want to use styled components you should add the plugin here.
    'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        "projectId": "ic0flphp",
        "dataset": "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      }
    }
  ],
  siteMetadata: {
    title: 'My Portfolio',
    siteUrl: `https://www.kaimingliu.com`,
    description: `MasterKai's Personal portfolio`,
    twitter: `@masterkai919`
  },
};
