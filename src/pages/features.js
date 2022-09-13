import React from 'react'
import theme from '../constants/theme'
import { arrSum } from '../constants/utility'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { Waypoint } from 'react-waypoint'
import Header from '../components/Header'
import Para from '../components/Para'
// import FeatureLink from '../components/FeatureLink'
import HeroTitle from '../components/HeroTitle'
import BG from '../components/BG'
import Section from '../components/Section'
import { FormattedMessage } from 'react-intl'

// multilingual images
import multiGlobe from '../images/features/multi/globe.svg'
import multiBubbleEN from '../images/features/multi/bubble-en.svg'
import multiBubbleDE from '../images/features/multi/bubble-de.svg'
import multiBubblePT from '../images/features/multi/bubble-pt.svg'
import multiBubbleFR from '../images/features/multi/bubble-fr.svg'
import avatarEN from '../images/features/multi/english.svg'
import avatarDE from '../images/features/multi/german.svg'
import avatarFR from '../images/features/multi/french.svg'
import avatarPT from '../images/features/multi/portuguese.svg'

// dashboard images
import dashboardBase from '../images/features/dashboard1.svg'
import dashboardRow from '../images/features/dashboard2.svg'
import dashboardSidebarTop from '../images/features/dashboard3.svg'
import dashboardSidebarBottom from '../images/features/dashboard5.svg'
import dashboardSelection from '../images/features/dashboard4.svg'

// adaptive images
import adaptiveCharacter from '../images/features/adaptive/Adaptive1Character.svg'
import adaptiveBG from '../images/features/adaptive/Adaptive2_BG.svg'
import adaptiveLesson1 from '../images/features/adaptive/Adaptive3lesson1.svg'
import adaptiveLesson2 from '../images/features/adaptive/Adaptive4lesson2.svg'
import adaptiveLesson3 from '../images/features/adaptive/Adaptive5lesson3.svg'
import adaptiveLesson4 from '../images/features/adaptive/Adaptive6lesson4.svg'

// curriculum images
import curriculumShadows from '../images/features/curriculum/Curriculum-shadows.svg'
import curriculum3a from '../images/features/curriculum/CurriculumBottomLeft.svg'
import curriculum3b from '../images/features/curriculum/CurriculumBottomRight.svg'
import curriculum2a from '../images/features/curriculum/CurriculumMiddleLeft.svg'
import curriculum2b from '../images/features/curriculum/CurriculumMiddleRight.svg'
import curriculum1a from '../images/features/curriculum/CurriculumTopLeft.svg'
import curriculum1b from '../images/features/curriculum/CurriculumTopRight.svg'

const ImagePositioner = styled('div')`
  position: relative;
  width: 100%;
`

const TextLayer = styled('div')`
  z-index: 2;
  margin-bottom: -30px;

  ${theme.mq[2]} {
    margin-bottom: auto;
  }
`

const AdaptiveP = styled(Para)`
  margin-bottom: ${theme.margin.small};
`

const AdaptiveP1 = styled(AdaptiveP)`
  ${theme.mq[2]} {
    margin-bottom: 92px;
    text-align: center;
  }
`

const AdaptiveP2 = styled(AdaptiveP)`
  ${theme.mq[2]} {
    margin-bottom: 48px;
  }
`
const AdaptiveP3 = styled(AdaptiveP)`
  ${theme.mq[2]} {
    margin-bottom: 64px;
  }
`

const fadeInDurr = 0.5

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeIn = props => css`
  animation: ${fadeInAnimation} 0.5s ease-in-out forwards;
  animation-delay: ${props.delay || fadeInDurr * 100}ms;
  opacity: 0;
`

const FeatureImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const DropShadow = css`
  box-shadow: 0 0 12px 6px rgba(0, 0, 0, 0.08);
`

const SlideDelay = 0.3
const SlideAnimation = keyframes`
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`

// Wrapper element for sliding elements into place. Just need to use the pass it the x and y coordinates into the 'from' property
// animates to (0, 0)
const SliderWrap = styled.div`
  height: 100%;
  opacity: 0;

  /* only do this animated if in 'animated' class */
  .animated & {
    animation: ${SlideAnimation} 0.5s ease-in-out forwards;
    animation-delay: ${SlideDelay}s;
    transform: translate(${props => props.from});
  }
`

// const SliderWrap = props => (
//   <div
//     css={css`
//       height: 100%;
//       opacity: 0;

//       /* only do this animated if in 'animated' class */
//       .animated & {
//         animation: ${SlideAnimation} 0.5s ease-in-out forwards;
//         animation-delay: ${SlideDelay}s;
//         transform: translate(${props.from});
//       }
//     `}
//     {...props}
//   />
// )

const DashboardBaseImg = styled.img``

const DashboardBaseWrap = styled.div`
  width: 62%;
  position: absolute;
  display: inline-block;
  left: 50%;
  top: 50%;
  transform: translate(-30%, -50%);
`
const DashboardRowImg = styled.img`
  position: absolute;
  top: 47.5%;
  width: 108%;
  right: -3%;
  ${DropShadow};

  .animated & {
    ${fadeIn};
  }
`
const DashboardSidebarTopImgWrap = styled.div`
  position: absolute;
  width: 40%;
  right: 95%;
  top: -30%;
  ${DropShadow};

  .animated & {
    ${fadeIn};
  }
`

const DashboardSidebarTopImg = styled.img``
const DashboardSidebarBottomImg = styled.img`
  position: absolute;
  width: 40%;
  right: 95%;
  bottom: -5%;
  ${DropShadow};

  .animated & {
    ${fadeIn};
  }
`

const DashboardSelectionImg = styled.img`
  position: absolute;
  width: 37%;
  left: 4%;
  top: 46%;
  ${fadeIn};
`

const MultiWrap = styled.div`
  width: 58%;
  height: 58%;
  position: absolute;
  display: inline-block;
  left: 50%;
  top: 50%;
  transform: translate(-30%, -50%);

  & > * {
    position: absolute;
  }
`

const MultiGlobe = styled.img`
  position: relative;
`

const Bubble = styled.img`
  width: 75%;
  padding: 4px;
`

const Avatar = styled.img``

const AvatarWrap = styled.div`
  width: 76%;
  align-items: center;

  .animated & {
    ${fadeIn};
  }
`

const AdaptiveWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 10%;

  .animated & {
    ${fadeIn};
  }

  ${theme.mq[2]} {
    top: -5%;
    margin-top: 0%;
  }
`

const AdaptiveCharWrap = styled.div`
  width: 68%;
  height: 68%;
`

const AdaptiveChar = styled.img`
  transform: translate(0, 30%);
  width: 100%;
  height: 100%;
`

const AdaptiveSlidesPerspectiveWrap = styled.div`
  position: absolute;
  left: 5%;
  top: -5%;
  width: 55%;
  perspective: 670px;
  transform: skewX(-10deg);
`

const adaptiveSlideOffset = 10
const adptiveAnimationDuration = 1
const BaseAdapativeTransformation = multiplier =>
  `rotateY(11deg) skewY(11deg) translate(${adaptiveSlideOffset *
    multiplier}px, -${adaptiveSlideOffset * multiplier}px)`

const AdaptiveBG = styled.img`
  transform: ${BaseAdapativeTransformation(0)};
  ${DropShadow};
  border-radius: 5px;
`

const AdaptiveSlideAnimation = to => keyframes`
  /* 0% {
    transform: ${BaseAdapativeTransformation(1)};
    z-index: 2;
  }
  25% {
    transform: ${BaseAdapativeTransformation(2)};
    z-index: 3;
  }
  50% {
    ${BaseAdapativeTransformation(3)};
    z-index: 4;
  }
  75% {
    transform: ${BaseAdapativeTransformation(4)};
    z-index: 5;
  }
  80% {
    z-index: 1;
  } */

  to {
    transform: ${BaseAdapativeTransformation(to)};
  }
`

const AdaptiveSlide = styled.img`
  left: 0;
  bottom: 0;
  position: absolute;
  transform: ${BaseAdapativeTransformation(0)};
  ${DropShadow};
  border-radius: 5px;
  width: 100%;
  /* animation-delay: ${props =>
    (adptiveAnimationDuration / 4) * props.order}s; */
  

  .animated & {
    animation: ${props => AdaptiveSlideAnimation(props.order)}
    ${adptiveAnimationDuration}s ease-in-out forwards;

    animation-delay: 0.5s;
  }
`

const CurriculumWrap = styled.div`
  width: 100%;
  padding-top: 40%;
  position: relative;
`

const CurriculumShadows = styled.img`
  position: absolute;
  bottom: 0;
  width: 80%;
  ${theme.transformCenterX()};

  .animated & {
    ${fadeIn};
  }
`

// array of dashboard animation durations
const dashboardDelays = [800, 700, 300, 200]
const multilingualDelays = [800, 700, 500, 400]
const curriculumDelays = [0, 800, 800]
const currAnimationDurationTotal = arrSum(curriculumDelays) + fadeInDurr * 1000

// console.log('currAnimationDurationTotal', currAnimationDurationTotal)

const curr1Animation = keyframes`
  0% { opacity: 0; }
  ${(arrSum(curriculumDelays.slice(0, 2)) / currAnimationDurationTotal) *
    100}% { opacity: 0; }
  ${(arrSum(curriculumDelays.slice(0, 3)) / currAnimationDurationTotal) *
    100}% { opacity: 0; }
  100% { opacity: 1; }
`

const curr2Animation = keyframes`
  0% { opacity: 0; }
  ${(arrSum(curriculumDelays.slice(0, 2)) / currAnimationDurationTotal) *
    100}% { opacity: 0; }
  ${(arrSum(curriculumDelays.slice(0, 3)) / currAnimationDurationTotal) *
    100}% { opacity: 1; }
  100% { opacity: 0.5; }
`

const curr3Animation = keyframes`
  0% { opacity: 0; }
  ${(arrSum(curriculumDelays.slice(0, 2)) / currAnimationDurationTotal) *
    100}% { opacity: 1; }
  ${(arrSum(curriculumDelays.slice(0, 3)) / currAnimationDurationTotal) *
    100}% { opacity: 0.5; }
  100% { opacity: 0.3; }
`

const Curriculum1 = styled.img`
  position: absolute;
  width: 30%;
  top: 5%;

  .animated & {
    animation-name: ${curr1Animation};
    animation-duration: ${currAnimationDurationTotal}ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
`

const Curriculum2 = styled(Curriculum1)`
  .animated & {
    animation-name: ${curr2Animation};
  }
`

const Curriculum3 = styled(Curriculum1)`
  .animated & {
    animation-name: ${curr3Animation};
  }
`

const getDelay = (array, index) => arrSum(array.slice(0, index + 1))

export default function Features() {
  const [adaptive, setAdaptive] = React.useState(false)
  const [multilingual, setMultilingual] = React.useState(false)
  const [dashboard, setDashboard] = React.useState(false)
  const [curriculum, setCurriculum] = React.useState(false)

  return (
    <div>
      <ThemeProvider theme={theme.palette.blue}>
        <FormattedMessage id="features.blurb">
          {blurb => (
            <FormattedMessage id="features.title">
              {text => (
                <HeroTitle
                  title={text}
                  description={[blurb]}
                  includeScrollChevron
                />
              )}
            </FormattedMessage>
          )}
        </FormattedMessage>
      </ThemeProvider>
      <ThemeProvider theme={theme.palette.grey}>
        <BG>
          <Section>
            <div className="container">
              <ImagePositioner>
                <TextLayer>
                  <div className="row">
                    <div className="col text-center">
                      <Header>
                        <FormattedMessage id="features.adaptive" />
                      </Header>
                    </div>
                  </div>
                  <div className="row justify-content-md-center">
                    <div className="col-sm-6">
                      <AdaptiveP1>
                        <FormattedMessage id="features.adaptiveBlurb1" />
                      </AdaptiveP1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="row">
                        <div className="col-md-10">
                          <AdaptiveP2>
                            <FormattedMessage id="features.adaptiveBlurb2" />
                          </AdaptiveP2>
                        </div>
                        <div className="col-md-10 offset-md-2">
                          <AdaptiveP3>
                            <FormattedMessage id="features.adaptiveBlurb3" />
                          </AdaptiveP3>
                        </div>
                      </div>
                    </div>
                    <div className={'col-md-7 ' + (adaptive ? 'animated' : '')}>
                      <Waypoint onEnter={() => setAdaptive(true)}>
                        <SliderWrap from={'0, 30px'}>
                          <AdaptiveWrap>
                            <AdaptiveCharWrap>
                              <AdaptiveSlidesPerspectiveWrap>
                                <AdaptiveBG src={adaptiveBG} />
                                <AdaptiveSlide
                                  order={1}
                                  src={adaptiveLesson4}
                                />
                                <AdaptiveSlide
                                  order={2}
                                  src={adaptiveLesson3}
                                />
                                <AdaptiveSlide
                                  order={3}
                                  src={adaptiveLesson2}
                                />
                                <AdaptiveSlide
                                  order={4}
                                  src={adaptiveLesson1}
                                />
                              </AdaptiveSlidesPerspectiveWrap>
                              <AdaptiveChar src={adaptiveCharacter} />
                            </AdaptiveCharWrap>
                          </AdaptiveWrap>
                        </SliderWrap>
                      </Waypoint>
                    </div>
                  </div>
                </TextLayer>
              </ImagePositioner>
            </div>
          </Section>
        </BG>
      </ThemeProvider>
      <ThemeProvider theme={theme.palette.white}>
        <BG>
          <Section>
            <div className="container">
              <div className="row">
                <div className="col-md-6 order-md-2 order-2 order-md-1">
                  <Waypoint onEnter={() => setMultilingual(true)}>
                    <FeatureImageWrap
                      className={multilingual ? 'animated' : ''}
                    >
                      <SliderWrap
                        from={'0, 30px'}
                        style={{ overflow: 'hidden' }}
                      >
                        <MultiGlobe src={multiGlobe} style={{ opacity: 0 }} />
                        <MultiWrap>
                          <MultiGlobe src={multiGlobe} />
                          <AvatarWrap
                            className="d-flex"
                            style={{
                              right: '77.5%',
                              top: '46%',
                            }}
                            delay={getDelay(multilingualDelays, 0)}
                          >
                            <Bubble src={multiBubbleEN} />
                            <Avatar src={avatarEN} style={{ width: '25%' }} />
                          </AvatarWrap>
                          <AvatarWrap
                            className="d-flex"
                            style={{
                              right: '18.6%',
                              top: '20%',
                            }}
                            delay={getDelay(multilingualDelays, 1)}
                          >
                            <Bubble src={multiBubbleDE} />
                            <Avatar src={avatarDE} style={{ width: '20%' }} />
                          </AvatarWrap>
                          <AvatarWrap
                            className="d-flex"
                            style={{
                              right: '-12%',
                              top: '45%',
                            }}
                            delay={getDelay(multilingualDelays, 2)}
                          >
                            <Avatar src={avatarPT} style={{ width: '28%' }} />
                            <Bubble src={multiBubblePT} />
                          </AvatarWrap>
                          <AvatarWrap
                            className="d-flex flex-column"
                            style={{
                              right: '-27%',
                              top: '-23%',
                            }}
                            delay={getDelay(multilingualDelays, 3)}
                          >
                            <Bubble
                              src={multiBubbleFR}
                              style={{ maxHeight: 92 }}
                            />
                            <Avatar
                              src={avatarFR}
                              style={{ width: '15%', height: '15%' }}
                            />
                          </AvatarWrap>
                        </MultiWrap>
                      </SliderWrap>
                    </FeatureImageWrap>
                  </Waypoint>
                </div>
                <div className="col-md-5 col-md-offset-1 order-1 order-md-2">
                  <div className="row">
                    <div className="col">
                      <Header>
                        <FormattedMessage id="features.multilingual" />
                      </Header>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Para>
                        <FormattedMessage id="features.multilingualBlurb1" />
                      </Para>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8 offset-md-4">
                      <Para>
                        <FormattedMessage id="features.multilingualBlurb2" />
                      </Para>
                    </div>
                  </div>
                </div>
                <Header />
              </div>
            </div>
          </Section>
          <Section>
            <div className="container">
              <div className="row">
                <div className="col">
                  <Header>
                    <FormattedMessage id="features.dashboards" />
                  </Header>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col">
                      <Para>
                        <FormattedMessage id="features.dashboardsBlurb1" />
                      </Para>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10">
                      <Para>
                        <FormattedMessage id="features.dashboardsBlurb2" />
                      </Para>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Para>
                        <FormattedMessage id="features.dashboardsBlurb3" />
                      </Para>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <Waypoint onEnter={() => setDashboard(true)}>
                    <FeatureImageWrap>
                      <DashboardBaseImg
                        src={dashboardBase}
                        style={{ opacity: 0 }}
                      />
                      <DashboardBaseWrap
                        className={dashboard ? 'animated' : ''}
                      >
                        <SliderWrap from={'0, 30px'}>
                          <DashboardBaseImg src={dashboardBase} />
                          <DashboardRowImg
                            src={dashboardRow}
                            delay={getDelay(dashboardDelays, 0)}
                          />
                          <DashboardSidebarTopImgWrap
                            delay={getDelay(dashboardDelays, 1)}
                          >
                            <DashboardSidebarTopImg src={dashboardSidebarTop} />
                            <DashboardSelectionImg
                              src={dashboardSelection}
                              delay={getDelay(dashboardDelays, 2)}
                            />
                          </DashboardSidebarTopImgWrap>
                          <DashboardSidebarBottomImg
                            src={dashboardSidebarBottom}
                            delay={getDelay(dashboardDelays, 3)}
                          />
                        </SliderWrap>
                      </DashboardBaseWrap>
                    </FeatureImageWrap>
                  </Waypoint>
                </div>
              </div>
            </div>
          </Section>
        </BG>
      </ThemeProvider>
      <ThemeProvider theme={theme.palette.grey}>
        <BG>
          <Section>
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <Header>
                    <FormattedMessage id="features.curriculumAlignment" />
                  </Header>
                </div>
              </div>
              <div
                className="row"
                style={{ marginBottom: `${theme.margin.mid}` }}
              >
                <div className="col">
                  <Para>
                    <FormattedMessage id="features.curriculumAlignmentBlurb1" />
                  </Para>
                  <Para>
                    <FormattedMessage id="features.curriculumAlignmentBlurb2" />
                  </Para>
                  <Para>
                    <FormattedMessage id="features.curriculumAlignmentBlurb3" />
                  </Para>
                </div>
              </div>
              <Waypoint onEnter={() => setCurriculum(true)}>
                <div className={curriculum ? 'animated' : null}>
                  <SliderWrap from={'0, 30px'}>
                    <CurriculumWrap>
                      <CurriculumShadows
                        src={curriculumShadows}
                        delay={getDelay(curriculumDelays, 0)}
                      />
                      <Curriculum3
                        style={{ left: '5%' }}
                        src={curriculum3a}
                        delay={getDelay(curriculumDelays, 0)}
                      />
                      <Curriculum2
                        style={{ left: '5%' }}
                        src={curriculum2a}
                        delay={getDelay(curriculumDelays, 1)}
                      />
                      <Curriculum1
                        style={{ left: '5%' }}
                        src={curriculum1a}
                        delay={getDelay(curriculumDelays, 2)}
                      />
                      <Curriculum3
                        style={{ right: '5%' }}
                        src={curriculum3b}
                        delay={getDelay(curriculumDelays, 0)}
                      />
                      <Curriculum2
                        style={{ right: '5%' }}
                        src={curriculum2b}
                        delay={getDelay(curriculumDelays, 1)}
                      />
                      <Curriculum1
                        style={{ right: '5%' }}
                        src={curriculum1b}
                        delay={getDelay(curriculumDelays, 2)}
                      />
                    </CurriculumWrap>
                  </SliderWrap>
                </div>
              </Waypoint>
            </div>
          </Section>
        </BG>
      </ThemeProvider>
    </div>
  )
}
