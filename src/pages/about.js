import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import { FaGulp } from "react-icons/fa"

import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/*<FaGulp />*/}
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="" 
      styleClass='about-background'

    />
    <Info />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {
    eq: "do-porao-02.jpg"
  }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage