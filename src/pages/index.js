import React from "react"
import { Link } from "gatsby"
import Layout from "../Layout/Layout"
import SEO from "../components/seo"
import TopicList from "../components/TopicList"
import Sponsors from "../components/Sponsors"
import Intro from "../components/Intro"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <Intro />
    <TopicList />
    <Sponsors />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
