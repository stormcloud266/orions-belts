import React from 'react'

import Layout from '../components/layout'
import Header from '../components/Header'
import About from '../components/About'
import Features from '../components/Features'
import Newsletter from '../components/Newsletter'

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Features />
    <Newsletter />
  </Layout>
)

export default IndexPage
