import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import theme from '../constants/theme'
import Para from './Para'
import { StaticQuery, graphql } from 'gatsby'
import appStoreSVG from '../images/svg/app_store.svg'
import googlePlaySVG from '../images/svg/google_play.svg'
import Link from '../components/Link'
import { FormattedMessage } from 'react-intl'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const Main = styled('div')`
    background-color: ${theme.colors.blackAlt};
    padding-top: ${theme.margin.mid};
    text-align: center;

    ${theme.mq[2]} {
      text-align: left;
    }
  `

  const SocialLink = styled(Link)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    font-size: ${theme.text.p};
    ${theme.flexCenter()};
    margin-bottom: ${theme.margin.small};

    & + & {
      margin-left: 8px;
    }

    &:hover,
    &:active,
    &:visited {
      color: ${theme.colors.white};
    }

    ${theme.mq[2]} {
      margin-bottom: 8px;
    }
  `

  const FooterPara = styled(Para)`
    color: ${props =>
      props.white ? theme.colors.white : theme.colors.greyMid};
    display: block;
    margin-bottom: 0px;
  `

  const FooterTextBlock = styled('div')`
    margin-bottom: ${theme.margin.small};
  `

  const BlackBar = styled('div')`
    background-color: ${theme.colors.black};
    /* ${theme.flexCenter()}; */
  `

  // const textLeft = [`govtGrandDuchy`, `ministryOfEducation`, `script`]

  // const textRight = [
  //   `Edupôle Walferdange`,
  //   `route de Diekirch`,
  //   `L-7220 Walferdange`,
  //   `Luxembourg`,
  //   `Tel: (+352) 247-75137`,
  //   `Fax: (+352) 247-85137`,
  // ]

  const FooterLink = styled(Link)`
    color: ${theme.colors.white};

    &:hover,
    &:visited {
      color: ${theme.colors.white};
    }
  `

  const IconBlock = styled('div')`
    display: flex;
    margin-bottom: ${theme.margin.small};
  `

  // const IconBlockIconWrap = styled('div')`
  //   color: ${theme.colors.white};
  //   font-size: ${theme.text.p};
  //   width: 16px;
  //   margin-right: -16px;
  //   ${theme.flexCenter()};

  //   ${theme.mq[2]} {
  //     margin-right: 12px;
  //   }
  // `

  const IconBlockTextStack = styled('div')`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `

  const AppStoreLink = styled(Link)`
    & + & {
      margin-left: 12px;
    }
  `

  const AppStoreLinkImg = styled('img')`
    width: 140px;
    height: 100%;

    ${theme.mq[2]} {
      width: 160px;
    }
  `

  return (
    <StaticQuery
      query={graphql`
        query footerQuery {
          vrettaLogo: file(relativePath: { eq: "vretta_logo_white.png" }) {
            ...FooterPartnerLogo
          }
          men: file(relativePath: { eq: "partners/men.png" }) {
            ...FooterPartnerLogo
          }
          zukunft: file(relativePath: { eq: "partners/zukunft.png" }) {
            ...FooterPartnerLogo
          }
          script: file(
            relativePath: { eq: "partners/script_transparent.png" }
          ) {
            ...FooterPartnerLogo
          }
        }
      `}
      render={data => {
        const partners = [
          {
            url: 'http://www.men.public.lu/home/index.html',
            img: data.men.childImageSharp.fixed.src,
          },
          {
            url:
              'http://www.men.public.lu/fr/actualites/articles/communiques-conference-presse/2016/09/14-rentree/index.html',
            img: data.zukunft.childImageSharp.fixed.src,
          },
          {
            url: 'https://portal.education.lu/script/',
            img: data.script.childImageSharp.fixed.src,
          },
        ]

        return (
          <>
            <Main>
              <div className="container">
                <div className="row">
                  <div className="col justify-content-md-start justify-content-center align-items-center d-flex">
                    <SocialLink to="https://www.instagram.com/mathematic_lux/">
                      <FaInstagram />
                    </SocialLink>
                    <SocialLink to="https://www.facebook.com/pages/MathemaTIC/484305371728189?">
                      <FaFacebook />
                    </SocialLink>
                    <SocialLink to="https://twitter.com/MathemaTIC_Lux?">
                      <FaTwitter />
                    </SocialLink>
                  </div>
                  <div className="col justify-content-md-end justify-content-center d-flex">
                    <AppStoreLink to="https://itunes.apple.com/ca/app/mathematic.lu/id1061078441?mt=8">
                      <AppStoreLinkImg src={appStoreSVG} alt=" " />
                    </AppStoreLink>
                    <AppStoreLink to="https://play.google.com/store/apps/details?id=com.vretta.mathematic">
                      <AppStoreLinkImg src={googlePlaySVG} alt=" " />
                    </AppStoreLink>
                  </div>
                </div>

                <hr
                  style={{
                    border: `1px solid ${theme.colors.black}`,
                    margin: '16px 0',
                  }}
                />
                <div>
                  <div className="row">
                    <div className="col-md-8">
                      <div
                        css={css`
                          padding-bottom: ${theme.margin.mid};
                        `}
                      >
                        <FooterTextBlock>
                          <FooterPara white>
                            <FormattedMessage id="footer.about" />
                          </FooterPara>
                        </FooterTextBlock>
                        <FooterTextBlock>
                          <FooterPara>
                            <FormattedMessage id="footer.aboutBlurb" />
                          </FooterPara>
                        </FooterTextBlock>

                        <FooterPara>
                          <FooterLink
                            to="https://d9d0y8p1n4328.cloudfront.net/mathematic_gatsby/pdf/MathemaTIC%20Information%20Brochure.pdf"
                            style={{ fontWeight: 'bold' }}
                          >
                            <FormattedMessage id="footer.downloadInfo" />
                          </FooterLink>
                        </FooterPara>
                      </div>
                    </div>
                    {/* <div className="col-md-4">
                    <FooterTextBlock>
                      {textLeft.map(textID => (
                        <FooterPara key={shortID()}>
                          <FormattedMessage id={`footer.${textID}`} />
                        </FooterPara>
                      ))}
                    </FooterTextBlock>
                    <FooterTextBlock>
                      {textRight.map(text => (
                        <FooterPara key={shortID()}>{text}</FooterPara>
                      ))}
                    </FooterTextBlock>
                    <FooterTextBlock>
                      <Link to="http://www.men.lu">
                        <FooterPara>www.men.lu</FooterPara>
                      </Link>
                    </FooterTextBlock>
                    <FooterTextBlock>
                      <Link to="/privacy_policy">
                        <FooterPara>
                          <FormattedMessage id="footer.privacyPolicy" />
                        </FooterPara>
                      </Link>
                      <Link to="/data_protection">
                        <FooterPara>
                          <FormattedMessage id="footer.dataProtection" />
                        </FooterPara>
                      </Link>
                    </FooterTextBlock>
                  </div> */}
                    <div className="col-md-4">
                      <div
                        css={css`
                          padding-bottom: ${theme.margin.mid};
                        `}
                      >
                        <IconBlock>
                          {/* <IconBlockIconWrap>
                          <FaEnvelope />
                        </IconBlockIconWrap> */}
                          <IconBlockTextStack>
                            <FooterPara
                              white
                              css={css`
                                display: inline-block !important;
                              `}
                            >
                              <FooterLink to="mailto:info@mathematic.com">
                                info@mathematic.org
                              </FooterLink>
                            </FooterPara>
                          </IconBlockTextStack>
                        </IconBlock>
                        <FooterLink to="/privacy_policy">
                          <FooterPara white style={{ fontWeight: 'bold' }}>
                            <FormattedMessage id="footer.privacyPolicy" />
                          </FooterPara>
                        </FooterLink>
                        <FooterLink to="/data_protection">
                          <FooterPara white style={{ fontWeight: 'bold' }}>
                            <FormattedMessage id="footer.dataProtection" />
                          </FooterPara>
                        </FooterLink>
                      </div>
                      {/* <IconBlock>
                      <IconBlockTextStack>
                        <FooterPara white feat>
                          Vretta
                      </FooterPara>
                      </IconBlockTextStack>
                    </IconBlock>
                    <IconBlock>
                      <IconBlockIconWrap>
                        <FaMapMarkerAlt />
                      </IconBlockIconWrap>
                      <IconBlockTextStack>
                        <FooterPara white>CANADA</FooterPara>
                        <FooterPara>120 Adelaide Street East</FooterPara>
                        <FooterPara>Toronto, ON M5C 1K9</FooterPara>
                      </IconBlockTextStack>
                    </IconBlock>

                    <IconBlock>
                      <IconBlockIconWrap />
                      <IconBlockTextStack>
                        <FooterPara white>LUXEMBOURG</FooterPara>
                        <FooterPara>6, rue Tubis</FooterPara>
                        <FooterPara>L-2629 Luxembourg</FooterPara>
                      </IconBlockTextStack>
                    </IconBlock>

                    <IconBlock>
                      <IconBlockIconWrap />
                      <IconBlockTextStack>
                        <FooterPara white>UNITED KINGDOM</FooterPara>
                        <FooterPara>20-22 Wenlock Road</FooterPara>
                        <FooterPara>London N1 7GU</FooterPara>
                      </IconBlockTextStack>
                    </IconBlock> */}
                    </div>
                  </div>
                </div>
              </div>
            </Main>
            <BlackBar>
              <div className="container">
                <div
                  css={css`
                    display: flex;
                    align-items: center;
                    /* min-height: 60px; */
                    flex-direction: column;
                    padding: ${theme.margin.small} 0;

                    & > * {
                      margin: 0 0 ${theme.margin.small};
                    }

                    ${theme.mq[1]} {
                      flex-direction: row;

                      & > * {
                        margin: 0 ${theme.margin.small} 0 0;
                      }
                    }
                  `}
                >
                  {partners.map(partner => (
                    <Link to={partner.url} key={partner.url + Math.random()}>
                      <img src={partner.img} alt=" " />
                    </Link>
                  ))}
                  <Link to="https://www.vretta.com">
                    <img
                      src={data.vrettaLogo.childImageSharp.fixed.src}
                      alt=" "
                    />
                  </Link>
                  <FooterPara
                    css={css`
                      color: #999;
                      font-size: ${theme.text.pSmall};
                    `}
                  >
                    © Vretta Inc. {new Date().getFullYear()}
                  </FooterPara>
                </div>
              </div>
            </BlackBar>
          </>
        )
      }}
    />
  )
}

export const AppStoreFrag = graphql`
  fragment AppStoreFrag on File {
    childImageSharp {
      resolutions(width: 160, quality: 90) {
        src
      }
    }
  }
`

export const FooterPartnerLogo = graphql`
  fragment FooterPartnerLogo on File {
    childImageSharp {
      fixed(width: 60, quality: 90) {
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
`
