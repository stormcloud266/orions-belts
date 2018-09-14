module.exports = {
  siteMetadata: {
    title: 'Orion\'s Belts',
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
        name: 'Orion\'s Belts',
        short_name: 'Orion\'s Belts',
        start_url: '/',
        background_color: '#210626',
        theme_color: '#210626',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png'
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
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify'
  ],
}
