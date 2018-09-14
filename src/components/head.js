import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ data }) => (
  <Helmet
    title={data.site.siteMetadata.title}
    meta={[
      { name: 'description', content: 'Belts that are out of this world.' },
      { name:"twitter:card", content: "summary" },
      { name:"twitter:site", content: "@TA_coding" },
      { name: "twitter:title", content: "Orion's Belts"},
      { name:"twitter:description", content:"Belts that are out of this world."},
      { name:"twitter:image", content: "img.com" },
      { name:"twitter:image:alt", content: "Orion's Logo" },
    ]}
  >
    <html lang="en" />
  </Helmet>
)

export default Head
