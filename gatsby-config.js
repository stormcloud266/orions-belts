module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-robots-txt',

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui'
        // icon: '', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Nunito:300', 'Merriweather:700']
        }
      }
    },
    { resolve: 'gatsby-plugin-sitemap' },
    { resolve: 'gatsby-plugin-no-sourcemaps' },
    'gatsby-plugin-offline'
    // 'gatsby-plugin-netlify'
  ],
}
