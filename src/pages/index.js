import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/Header'
import About from '../components/About'
import Features from '../components/Features'
import Newsletter from '../components/Newsletter'
import Gallery from '../components/Gallery'

const IndexPage = ({ data }) => (
  <Layout>
    <Header />
    <About />
    <Features />
    <Newsletter />
    <Gallery data={data} />
  </Layout>
)

export default IndexPage

export const squareImage = graphql`
fragment gridImage on File {
  childImageSharp {
    sizes(
      maxWidth: 1000
      maxHeight: 700
      traceSVG: { color: "#beaade" }
    ) {
      ...GatsbyImageSharpSizes_tracedSVG
    }
  }
}
`;

export const query = graphql`
query {
  image1: file( relativePath: { regex: "/grid1.png/" } ) {
    ...gridImage
  }
  image2: file( relativePath: { regex: "/grid2.png/" } ) {
    ...gridImage
  }
  image3: file( relativePath: { regex: "/grid3.jpg/" } ) {
    ...gridImage
  }
  image4: file( relativePath: { regex: "/grid4.png/" } ) {
    ...gridImage
  }
  image5: file( relativePath: { regex: "/grid5.png/" } ) {
    ...gridImage
  }
  image6: file( relativePath: { regex: "/grid6.png/" } ) {
    ...gridImage
  }
  image7: file( relativePath: { regex: "/grid7.jpg/" } ) {
    ...gridImage
  }
  image8: file( relativePath: { regex: "/grid8.jpg/" } ) {
    ...gridImage
  }
  }
`;
