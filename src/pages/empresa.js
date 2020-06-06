import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import { FaGulp } from "react-icons/fa"

import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'
import Contact from '../components/Home/Contact'

const AboutPage = ({ data }) => {
  let backroundImage = [
    `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5))`,
    data.img.childImageSharp.fluid
  ]
  return (

  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/*<FaGulp />*/}
    <BackgroundSection
      img={backroundImage}
      title="" 
      styleClass='about-background'
    >
    <div className='prContainer'>
      <p className='text-white text-left paperFont paperFont-title'>a cervejaria</p>
      <p className='text-left paperFont '>a confraria do porão nasceu em 2019 no bairro dom bosco, em belo horizonte.</p>
      <p className='text-left paperFont '>com capacidade de produção de cerca de 3.000 litros por mês, a nanocervejaria <span className="text-white">aposta em rótulos criativos</span> e tem a ideia de transformar a experiência das cervejas artesanais em algo ao alcance de todos.</p>
      <p className='text-left paperFont '>como o nosso nome diz, a ideia é reunir amigos ao redor de uma mesa e aproveitar o que as nossas cervejas têm de melhor: <span className="text-white">alta drinkability e muita personalidade.</span></p>
      <p className='text-left paperFont '>sempre atentos à qualidade e buscando inovação, seguimos dando passos firmes para levar experiências cada vez mais marcantes aos nossos clientes.</p>
      <p className='text-left paperFont text-white'>seja bem-vindo ao nosso porão! saúde!</p>
    </div>
    </BackgroundSection>
    {/*<Info />*/}
    <Contact />
  </Layout>
)

}
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