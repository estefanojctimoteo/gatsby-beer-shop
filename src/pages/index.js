import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import { FaGulp } from 'react-icons/fa'

import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'
import Menu from '../components/Home/Menu'
import Products from '../components/Home/Products'
import Contact from '../components/Home/Contact'

const IndexPage = ({ data }) => {
  let backroundImage = [
    `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))`,
    data.img.childImageSharp.fluid
  ]  
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`,`application`,`react`]} />
      {/* <FaGulp /> */}
      <BackgroundSection 
        img={backroundImage} 
        title=""
        styleClass="default-background"
      />
      {/*<Info />*/}
      <Menu items={data.menu} />
      <Products />
      <Contact />
    </Layout>
  )
}
export const query = graphql`
{
  img: file(relativePath: {eq: "IMG_3935_5.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu: allContentfulCofeeItem ( filter: {node_locale: {eq: "en-US"}} ){
    edges {
      node {
        id
        title
        description {
          description
        }
        price
        category
        image {
          fixed(
            width: 50,
            height: 50
          ) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }  
}
`
export default IndexPage