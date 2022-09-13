import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import shortID from 'shortid'
import { TweenMax, ScrollToPlugin } from 'gsap/all'
import theme from '../../constants/theme'
import H2 from '../H2'
import PartnersSection from '../PartnersSection'
import HeroNews from '../HeroNews'
import DemoOverlay from '../DemoOverlay'
import ScrollDownChevron from '../ScrollDownChevron'

import videoThumbnailTeal from '../../images/home/video/Video_Thumbnail_teal.png'
import mascotSVG from '../../images/home/video/Mascot.svg'
import Consumer from '../ContactContext'
import Illustration, { startAnimationDuration } from './Illustration'
import { fadeIn } from '../animationComponents/'
import { FormattedMessage } from 'react-intl'

const gsapPlugins = [ScrollToPlugin]

const Wrap = styled('div')``

const BlueWrap = styled('div')`
  color: ${({ theme }) => theme.color};
  background-color: ${props => props.theme.bg};
`

const FullPageOverflowWrap = styled.div`
  overflow: hidden;
`

const FullPage = styled('div')`
  ${theme.flexCenter()};
  min-height: 100vh;
  align-items: flex-end;
  position: relative;
  transition: 0.12s ease-in-out all;
`

const ConnectLinkNavbar = styled('div')`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.small};
  color: ${theme.colors.blueLight};
  padding: 6px 24px;
  font-size: 24px;
  text-transform: uppercase;
  display: block;
  margin: 30px auto;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:hover,
  &:focus {
    color: ${theme.colors.blueLight};
  }

  ${theme.mq[2]} {
  }
`
const ContentWrap = styled('div')`
  position: absolute;
  flex-direction: column;
  ${theme.transformCenterX()};
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  bottom: 0;
  padding-bottom: 100px;
`

const HeadersWrap = styled.div`
  width: 100%;
  text-align: center;
  z-index: 2;
  order: 2;
  position: relative;
  ${fadeIn}

  ${theme.mq[2]} {
    width: 50%;
    order: 1;
  }
`

export const HeroHeader = styled('img')`
  width: 80%;
  margin-bottom: ${theme.margin.small};
`

const HeroSubheader = styled('h2')`
  font-size: 24px;
  text-align: center;
  font-weight: 100;
  z-index: 2;
  margin: 12px 0;
  line-height: 1.1em;

  ${theme.mq[1]} {
    font-size: 36px;
  }

  ${theme.mq[2]} {
    margin: 0;
  }
`

const BannerLinks = styled('div')`
  ${theme.flexCenter()};
  flex-wrap: wrap;
  z-index: 2;
  margin-bottom: ${theme.margin.small};
  ${fadeIn}
  justify-content:flex-start;
  margin-bottom: -20px;
  order: 3;
`
const BannerLink = styled(Link)`
  background: ${theme.colors.teal};
  width: 260px;
  height: 50px;
  font-size: ${theme.text.pFeat};
  color: ${theme.colors.white};
  ${theme.flexCenter()};
  margin: 4px 10px 0 0;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 8px 5px rgba(0, 0, 0, 0.05);
  }

  ${theme.mq[2]} {
    height: 60px;
    font-size: 24px;
  }
`

const BannerLinkButton = BannerLink.withComponent('div')

const PartnerLinks = styled('div')`
  margin-bottom: ${theme.margin.large};
  padding-top: ${theme.margin.small};
`

const Para = styled('p')`
  color: ${({ theme }) => theme.color};
`

const VideoWrap = styled('div')`
  position: relative;
  // height: auto;
  margin-bottom: ${theme.margin.small};

  ${theme.mq[3]} {
    height: 40px;
  }
`

const VideoBorderWrap = styled('div')`
  border-radius: ${theme.borderRadius.big};
  overflow: hidden;
  font-size: 0;
`

const VideoWrapForMascot = styled('div')`
  position: relative;
`

const VideoMascot = styled('img')`
  display: none;
  position: absolute;
  pointer-events: none;
  left: 0;
  bottom: 0;
  transform: translate(-66px, 56px);
  width: 140px;
  transition: 0.12s ease-in opacity;

  ${theme.mq[2]} {
    display: block;
  }
`

const HeroMain = ({ locale, training }) => {
  const [mascotVisible, setMascotVisible] = React.useState(true)
  const [demo, setDemo] = React.useState(false)
  const scrollTarget = React.useRef(null)

  const scrollFunc = () => {
    TweenMax.to(window, 1, {
      scrollTo: {
        y: scrollTarget.current,
        offsetY: parseInt(theme.nav.height),
      },
    })
  }

  const vidUrl =
    locale === 'pt'
      ? `https://vrettamedia.s3.amazonaws.com/mathematic_gatsby/Mathematic+Demo+-+Pt-1(1).m4v`
      : `https://d9d0y8p1n4328.cloudfront.net/mathematic_gatsby/mathematic.lu.mp4`

  return (
    <Wrap>
      <BlueWrap>
        <FullPageOverflowWrap>
          <div className="container">
            <FullPage>
              <ContentWrap>
                <HeadersWrap delay={startAnimationDuration}>
                  <HeroSubheader>
                    <FormattedMessage id="home.personalizedLearningEnvironment" />
                  </HeroSubheader>
                </HeadersWrap>
                <Illustration />

                <ScrollDownChevron onClick={() => scrollFunc()} delay={1500} />
              </ContentWrap>

              {demo && <DemoOverlay hideFunc={() => setDemo(false)} />}
              <ConnectLinkNavbar
                onClick={e => {
                  e.preventDefault()
                  if (window.location.host === 'mathematic.org') {
                    window.open('https://mathematic.org/app2')
                  } else {
                    window.open('https://mathematic.lu/app2')
                  }
                }}
                bold="true"
              >
                <FormattedMessage id="navbar.connect" />
              </ConnectLinkNavbar>
            </FullPage>
          </div>
        </FullPageOverflowWrap>

        <div className="container" ref={scrollTarget}>
          <div className="row">
            {training.map((thing, index) => (
              <div className={`col-md-4`} key={shortID()}>
                <HeroNews
                  text={thing.textID}
                  title={`training.${index}title`}
                  image={thing.image}
                  index={index}
                />
              </div>
            ))}
          </div>

          <PartnerLinks>
            <PartnersSection slider />
          </PartnerLinks>

          <div className="row">
            <div className="col-md-5">
              <VideoWrap>
                <VideoWrapForMascot>
                  <VideoBorderWrap
                    onPointerOver={() => setMascotVisible(false)}
                    onPointerOut={() => setMascotVisible(true)}
                  >
                    <video
                      controls
                      style={{ maxWidth: '100%' }}
                      poster={videoThumbnailTeal}
                      onPlay={() => setMascotVisible(false)}
                      onEnded={() => setMascotVisible(true)}
                      preload="none"
                    >
                      <source src={vidUrl} type="video/mp4" />
                    </video>
                  </VideoBorderWrap>
                  <VideoMascot
                    src={mascotSVG}
                    alt=" "
                    style={{ opacity: mascotVisible ? 1 : 0 }}
                  />
                </VideoWrapForMascot>
              </VideoWrap>
            </div>
            <div className="col-md-7">
              <H2
                css={css`
                  margin-bottom: ${theme.margin.small};

                  ${theme.mq[2]} {
                    margin-bottom: 0;
                  }
                `}
              >
                <FormattedMessage id="home.learningWithMathematic" />
              </H2>
              <Para
                css={css`
                  margin-bottom: 28px;
                `}
              >
                <FormattedMessage id="home.personalizedLearningBlurb" />
              </Para>
              <BannerLinks delay={startAnimationDuration}>
                <BannerLinkButton
                  onClick={() => setDemo(true)}
                  style={{ cursor: 'pointer' }}
                >
                  <FormattedMessage id="home.onlinePreview" />
                </BannerLinkButton>
                <Consumer>
                  {context => (
                    <BannerLinkButton onClick={context.toggleFunc}>
                      <FormattedMessage id="home.getAccess" />
                    </BannerLinkButton>
                  )}
                </Consumer>
              </BannerLinks>
            </div>
          </div>
        </div>
      </BlueWrap>
    </Wrap>
  )
}

export default HeroMain
