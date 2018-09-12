import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ data }) => (
  <Helmet
    title={data.site.siteMetadata.title}
    meta={[
      { name: 'description', content: 'Sample' },
      { name:"twitter:card", content: "summary" },
      { name:"twitter:site", content: "@username" },
      { name: "twitter:title", content: "title"},
      { name:"twitter:description", content:"description"},
      { name:"twitter:image", content: "img.com" },
      { name:"twitter:image:alt", content: "alt" },
    ]}
  >
    <script type="application/ld+json">
      {`
        "@context": "http://schema.org"
      `}
    </script>
    <html lang="en" />
  </Helmet>
)

export default Head
