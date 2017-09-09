module.exports = {
  siteMetadata: {
    title: `<repo>`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-105846113-1',
      },
    }
  ],
  pathPrefix: '/<repo>'
}
