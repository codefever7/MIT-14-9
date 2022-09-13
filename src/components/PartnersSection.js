import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'

import styled from '@emotion/styled'
import theme from '../constants/theme'
import shortID from 'shortid'

const PartnersWrap = styled('div')`
  ${theme.flexCenter};
  flex-wrap: wrap;
  user-select: none;
`

const LinkWrap = styled('a')`
  width: 100%;
  margin-bottom: ${props => (props.slider ? 0 : theme.margin.small)};
  height: 60px;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.small};
  display: inline-block;
  box-shadow: 2px 8px 5px rgba(0, 0, 0, 0.05);
  ${theme.flexCenter()};
  position: relative;
  ${theme.transformCenterX()};

  .slick-slider & {
    width: 90%;
  }

  img {
    max-width: 80%;
    max-height: 80%;
    flex: 0 0 auto;
  }
`

const PartnerLink = ({ url, img, slider }) => {
  return (
    <LinkWrap href={url} slider={slider} target="_blank">
      <img src={img} alt=" " />
    </LinkWrap>
  )
}

function PartnersSectionReal({ data, slider }) {
  const partners = [
    {
      url: 'http://www.men.public.lu/fr/index_de.html',
      img: data.men.childImageSharp.resolutions.src,
    },
    {
      url: 'https://portal.education.lu/script/',
      img: data.script.childImageSharp.resolutions.src,
    },
    {
      url: 'http://vretta.com/',
      img: data.vretta.childImageSharp.resolutions.src,
    },
    {
      url: 'http://www.education.gouv.fr/',
      img: data.educationGouv.childImageSharp.resolutions.src,
    },
    {
      url: 'http://wwwen.uni.lu/',
      img: data.udl.childImageSharp.resolutions.src,
    },
    {
      url:
        'http://wwwen.uni.lu/recherche/flshase/luxembourg_centre_for_educational_testing_lucet',
      img: data.lucet.childImageSharp.resolutions.src,
    },
    {
      url: 'https://www.liser.lu/',
      img: data.liser.childImageSharp.resolutions.src,
    },
    {
      url: 'http://portal.education.lu/cgie/Accueil.aspx',
      img: data.cgi.childImageSharp.resolutions.src,
    },
    // {
    //   url: 'http://www.iave.pt/',
    //   img: data.iave.childImageSharp.resolutions.src,
    // },
  ]

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: 'unslick', // destroys slick
      },
    ],
  }

  return (
    <>
      {!slider && (
        <div className="row">
          {partners.map(partner => (
            <div className="col-6 col-md-3" key={shortID()}>
              <PartnerLink url={partner.url} img={partner.img} />
            </div>
          ))}
        </div>
      )}
      {slider && (
        <PartnersWrap>
          <div className="container">
            <div className="row">
              <div className="col">
                <Slider {...settings}>
                  {partners.map(partner => (
                    <PartnerLink
                      slider={slider}
                      key={shortID()}
                      url={partner.url}
                      img={partner.img}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </PartnersWrap>
      )}
    </>
  )
}

export default function PartnersSection({ slider }) {
  return (
    <StaticQuery
      query={graphql`
        query PartnersQuery {
          men: file(relativePath: { eq: "partners/1.png" }) {
            ...PartnerLogo
          }
          script: file(relativePath: { eq: "partners/2.png" }) {
            ...PartnerLogo
          }
          vretta: file(relativePath: { eq: "partners/3.png" }) {
            ...PartnerLogo
          }
          educationGouv: file(relativePath: { eq: "partners/4.png" }) {
            ...PartnerLogo
          }
          udl: file(relativePath: { eq: "partners/5.png" }) {
            ...PartnerLogo
          }
          lucet: file(relativePath: { eq: "partners/6.png" }) {
            ...PartnerLogo
          }
          liser: file(relativePath: { eq: "partners/7.png" }) {
            ...PartnerLogo
          }
          cgi: file(relativePath: { eq: "partners/8.png" }) {
            ...PartnerLogo
          }
          iave: file(relativePath: { eq: "partners/9.png" }) {
            ...PartnerLogo
          }
        }
      `}
      render={data => <PartnersSectionReal data={data} slider={slider} />}
    />
  )
}

export const PartnerLogo = graphql`
  fragment PartnerLogo on File {
    childImageSharp {
      resolutions(width: 200, quality: 90) {
        src
      }
    }
  }
`
