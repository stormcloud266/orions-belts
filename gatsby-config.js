module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    siteUrl: 'https://www.orions-belt.netlify.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-robots-txt',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
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
          families: ['Nunito:300,400', 'Merriweather:700']
        }
      }
    },
    { resolve: 'gatsby-plugin-sitemap' },
    { resolve: 'gatsby-plugin-no-sourcemaps' },
    'gatsby-plugin-offline'
    // 'gatsby-plugin-netlify'
  ],
}
