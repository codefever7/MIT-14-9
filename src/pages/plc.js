import React, { useState, useEffect } from 'react'
import theme from '../constants/theme'
import styled from '@emotion/styled'
import ReCAPTCHA from "react-google-recaptcha";
// import { css, keyframes } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import Header from '../components/Header'
import Para from '../components/Para'
import Slider from 'react-slick'
// import FeatureLink from '../components/FeatureLink'
import HeroTitle from '../components/HeroTitlePLC'
import BG from '../components/BG'
import Section from '../components/Section'
import { FormattedMessage, useIntl } from 'react-intl'

// multilingual images
import why from '../images/why.svg'
import how from '../images/how.svg'
import who from '../images/who.svg'
import videoThumb from '../images/video-thumb.png'
import avatar1 from '../images/avatar1.svg'
import avatar2 from '../images/avatar2.svg'
import avatar3 from '../images/avatar3.svg'
import avatar4 from '../images/avatar4.svg'
import Collaborators1 from '../images/Collaborators1.svg'
import Collaborators2 from '../images/Collaborators2.svg'
import Collaborators3 from '../images/Collaborators3.svg'
import Collaborators4 from '../images/Collaborators4.svg'
import arrow from '../images/next-arrow.svg'

import condition from '../images/condition-ic.svg'
import organization from '../images/organization-ic.svg'
import target from '../images/target-ic.svg'
import lengthic from '../images/length-ic.svg'
import location from '../images/location-ic.svg'

import plcbg2 from '../images/plc-bg2.svg'

import goals from '../images/goals.svg'
import content from '../images/content.svg'
import skills from '../images/skills-ac.svg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const ImagePositioner = styled('div')`
  position: relative;
  width: 100%;
`

const TextLayer = styled('div')`
  z-index: 2;
  margin-bottom: -30px;
  h3,
  h2 {
    font-size: 36px;
  }
  p {
    font-size: 20px;
    font-weight: 300;
    color: #444b56;
  }

  ${theme.mq[2]} {
    margin-bottom: auto;
  }
`
const Form = styled('form')`
  * + * + * {
    margin-top: ${theme.margin.small};
  }
`

const FormInput = styled('input')`
  border-radius: ${theme.borderRadius.small};
  background-color: ${theme.colors.white};
  width: 100%;
  border: none;
  font-size: ${theme.text.p};
  height: calc(${theme.text.p} * 2.5);
  padding-left: 12px;

  &:focus {
    outline: 0;
  }
`
const ReviewBox = styled('div')`
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 60px 60px;
  margin-bottom: -150px;
  .slick-prev {
    transform: translateY(-50%);
    top: 50%;
    width: 70px;
    height: 70px;
    transform-origin: center;
    left: -80px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    img {
      transform: rotate(180deg);
    }
  }
  .slick-next {
    transform: translateY(-50%);
    top: 50%;
    width: 70px;
    height: 70px;
    transform-origin: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 50%;

    right: -80px;
  }
  .slick-prev: before, .slick-next: before {
    display: none;
  }
`
const VideoBoxes = styled('div')`
  .slick-prev {
    transform: translateY(-50%);
    top: 50%;
    width: 70px;
    height: 70px;
    transform-origin: center;
    left: -80px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    img {
      transform: rotate(180deg);
    }
  }
  .slick-next {
    transform: translateY(-50%);
    top: 50%;
    width: 70px;
    height: 70px;
    transform-origin: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 50%;

    right: -80px;
  }
  .slick-prev: before, .slick-next: before {
    display: none;
  }
`

const Hiw = styled('div')`
  padding: 200px 0 300px;
  position: relative;
  bottom: 0;
  h3 {
    font-size: 36px;
    margin: 0;
  }
  ul {
    margin-top: 20px;
  }
  ul > li {
    font-size: 20px;
    font-weight: light;
    color: #444b56;
  }
`
const SessionInfo = styled('div')`
  padding: 100px 0;
  position: relative;
  background-color: #e9f0f3;
  .hide-mobile {
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  .main-tabs {
    > .react-tabs__tab-list {
      display: flex;
      padding: 2px;
      background: white;
      border: none;
      border-radius: 10px;
      @media only screen and (max-width: 768px) {
        display: block;
        white-space: nowrap;
        overflow: auto;
      }
      .react-tabs__tab {
        font-size: 18px;
        color: #666;
        text-transform: uppercase;
        flex: 1;
        text-align: center;
        background: white;
        border: none;
        margin: 2px;
        border-radius: 10px;
        padding: 10px;
      }

      .react-tabs__tab--selected {
        background: #2096ff;
        color: white;
      }
    }
    .react-tabs__tab-panel {
      background: white;
      border-radius: 10px;
      padding: 30px;

      .react-tabs__tab-list {
        display: flex;
        padding: 0;
        border: none;
        border-radius: 10px;
        justify-content: center;
        border-top: 2px solid #e9f0f3;
        border-radius: 0;
        margin-top: 30px;
        @media only screen and (max-width: 768px) {
          display: block;
          white-space: nowrap;
          overflow: auto;
        }
        .react-tabs__tab {
          font-size: 18px;
          color: #666;
          text-transform: uppercase;
          text-align: center;
          background: white;
          border: none;
          margin: 0px 20px;
          border-radius: 0;
          padding: 10px;
          border-top: 5px solid #fff;
          min-width: 150px;
          img {
            margin-right: 10px;
          }
          @media only screen and (max-width: 768px) {
            min-width: initial;
            margin: 0px 10px;
            img {
              margin: 0;
            }
          }
        }

        .react-tabs__tab--selected {
          border-top: 5px solid #2096ff;
        }
      }

      h2 {
        color: #2096ff;
        text-align: center;
      }
    }
  }
`
const ContactForm = styled('div')`
  padding: 30px;
  background: #2096ff;
  border-radius: 10px;
  h4 {
    color: white;
    text-align: Center;
    font-size: 20px;
  }
  input {
    border-radius: 5px;
    background-color: #fff;
    width: 100%;
    border: none;
    font-size: 18px;
    padding: 10px 12px;
    margin-bottom: 15px;
  }
  .spam-filter-container{
    display:flex;
    justify-content: center;
    margin:10px
  }
  button:disabled,button[disabled]{
    background-color: #cccccc
  }
  button {
    background-color: #18eadf;
    font-size: 24px;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    padding: 8px 22px;
    -webkit-transition: 0.5s ease-in-out all;
    transition: 0.5s ease-in-out all;

    position: relative;
  }
`

const PlcBG2 = styled('div')`
  position: absolute;
  z-index: -1;
  position: absolute;
  bottom: 0;
  max-width: 1400px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  img {
    width: 100%;
  }
`
const BioModal = styled('div')`
  background-color: #2096ff;
  color: white;
  padding: 40px;
  border-radius: 15px;
  width: 100%;
  max-width: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  h4 {
    font-size: 22px;
  }
  .close {
    color:white;
    text-align-right;    position: absolute;
    right: 20px;
    top: 20px;
    cursor:pointer
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <img src={arrow} alt="" />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <img src={arrow} alt="" />
    </div>
  )
}
export default function Features({ pageContext }) {
  const [bio, setBio] = useState({ open: false, title: '', desc: '' })
  const [token, setToken] = useState(null);
  const [disable, setDisable] = useState(true);
  // const {pageContext} = pageContext
  const recaptchaRef = React.createRef();
  const onCaptchaChange = ()=>{
    setToken(recaptchaRef.current.getValue())
  };

  useEffect(()=>{
    if(token){
      setDisable(false);
    }
  },[token]);

  const videos = [videoThumb]
  const reviews = [0, 1, 2, 3, 4, 5, 6]
  const sections = [0, 1, 2, 3, 4, 5, 6]

  const videos_eng1 = ['https://beta.mathematic.org/PLC-for-MathemaTIC-en.mp4']
  const videos_eng2 = [
    'https://d9d0y8p1n4328.cloudfront.net/PLC/lu/PLC-MathemaTIC-Programmstructure2-en.mp4',
  ]

  const videos_lux1 = [
    'https://d9d0y8p1n4328.cloudfront.net/PLC/lu/PLC-for-MathemaTIC-lu.mp4',
    'https://d9d0y8p1n4328.cloudfront.net/PLC/lu/1.1_Why%20this%20training.MP4.mp4',
  ]
  const videos_lux2 = [
    'https://beta.mathematic.org/PLC-programmstruktur-2018-lu.mp4',
    'https://s3.amazonaws.com/vrettamedia/mathematic_gatsby/plc/Tape+7+Carole_cleaned+-23+LUFS-lu.mp4',
  ]

  const videos1 = pageContext.locale === 'en' ? videos_eng1 : videos_lux1
  const videos2 = pageContext.locale === 'en' ? videos_eng2 : videos_lux2

  const trainers = [
    {
      image: avatar1,
    },
    {
      image: avatar2,
    },
    {
      image: avatar3,
    },
    { image: avatar4 },
  ]
  const collaborators = [
    { image: Collaborators1, name: 'Michaela Zuniga' },
    { image: Collaborators2, name: 'Laura Bertelli' },
    { image: Collaborators3, name: 'Undine Seineke' },
    { image: Collaborators4, name: 'Dianne Marie Petrov' },
  ]
  const settings = {
    // dots: true,
    navigation: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  
  return (
    <div>
      <ThemeProvider theme={theme.palette.blue}>
        <FormattedMessage id="plc.blurb">
          {blurb => (
            <FormattedMessage id="plc.title">
              {text => (
                <>
                  <HeroTitle
                    title={text}
                    description={[blurb]}
                    link={true}
                    linkText={'Sign Up'}
                    link="#signup"
                    includeScrollChevron
                  />
                </>
              )}
            </FormattedMessage>
          )}
        </FormattedMessage>
      </ThemeProvider>
      <ThemeProvider theme={theme.palette.white}>
        <BG>
          <Section>
            <div className="container">
              <ImagePositioner>
                <TextLayer>
                  <div className="row">
                    <div className="col text-center">
                      <Header>
                        <FormattedMessage id="plc.therogram" />
                      </Header>
                    </div>
                  </div>
                  <div className="row justify-content-md-center">
                    {/* <div className="col-sm-8">
                      <AdaptiveP1>
                        <FormattedMessage id="plc.therogramdesc" />
                      </AdaptiveP1>
                    </div> */}
                  </div>
                  <div className="row justify-content-md-center text-center">
                    <div className="col-sm-4">
                      <img src={why} alt="" />'
                      <h2 className="text-center">
                        <FormattedMessage id="plc.why" />
                      </h2>
                      <p>
                        <FormattedMessage id="plc.whyblurb" />
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <img src={how} alt="" />{' '}
                      <h2 className="text-center">
                        <FormattedMessage id="plc.how" />
                      </h2>
                      <p>
                        <FormattedMessage id="plc.howblurb" />
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <img src={who} alt="" />{' '}
                      <h2 className="text-center">
                        <FormattedMessage id="plc.who" />
                      </h2>{' '}
                      <p>
                        <FormattedMessage id="plc.whoblurb1" />{' '}
                        <a target="_blank" href="http://www.liser.lu/">
                          LISER
                        </a>{' '}
                        <FormattedMessage id="plc.whoblurb2" />{' '}
                        <a target="_blank" href="https://mathematic.lu/">
                          MathemaTIC
                        </a>{' '}
                        <FormattedMessage id="plc.whoblurb3" />{' '}
                        <a target="_blank" href="http://www.script.lu/">
                          SCRIPT
                        </a>{' '}
                        <FormattedMessage id="plc.whoblurb4" />{' '}
                        <a target="_blank" href="http://www.ifen.lu/">
                          IFEN
                        </a>{' '}
                        <FormattedMessage id="plc.whoblurb5" />{' '}
                        <a
                          target="_blank"
                          href="http://portal.education.lu/script/"
                        >
                          DPAV vum SCRIPT
                        </a>{' '}
                        <FormattedMessage id="plc.whoblurb6" />
                        {/* PLC for MathemaTIC is developed by A
                        <a target="_blank" href="http://www.liser.lu/">
                          {' '}
                          LISER
                        </a>{' '}
                        in collaboration with the MathemaTIC team and{' '}
                        <a target="_blank" href="http://www.script.lu">
                          SCRIPT
                        </a>
                        , and includes research, policy-making, and applied
                        innovative practice. The training is offered through{' '}
                        <a target="_blank" href="http://www.ifen.lu/">
                          IFEN
                        </a>{' '}
                        and was developed with the technical support of DPAV –
                        SCRIPT. */}
                      </p>
                    </div>
                  </div>
                </TextLayer>
              </ImagePositioner>
            </div>

            <div className="mt-5 pt-lg-5 container">
              <TextLayer>
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <VideoBoxes>
                      <Slider {...settings}>
                        {videos1.map((item, index) => (
                          <div>
                            <div className="row align-items-center">
                              <div className="col-md-6">
                                <video
                                  className="centerHorizonal plcVideo"
                                  controls={true}
                                  style={{ width: `100%` }}
                                >
                                  <source src={item} type="video/mp4" />
                                </video>
                              </div>
                              <div className="col-md-6">
                                <h2>
                                  <FormattedMessage id={`plc.video${index}`} />
                                </h2>
                                <p>
                                  <FormattedMessage
                                    id={`plc.videoblurb${index}`}
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </VideoBoxes>
                  </div>
                </div>
              </TextLayer>
            </div>
          </Section>
        </BG>
      </ThemeProvider>
      {bio.open && (
        <BioModal className="">
          <div
            onClick={() => setBio({ open: false, index: 0 })}
            className="close"
          >
            X
          </div>
          <h4>
            <FormattedMessage id={`${bio.title}`} />
          </h4>
          <div>
            <FormattedMessage id={`${bio.desc}`} />
          </div>
        </BioModal>
      )}
      <div style={{ marginTop: `-100px` }}>
        <ThemeProvider theme={theme.palette.grey}>
          <BG>
            <Section>
              <div className="container pt-5">
                <TextLayer>
                  <div className="  text-center">
                    <Header>
                      <FormattedMessage id="plc.about" />
                    </Header>
                  </div>
                  <div className="row justify-content-md-center">
                    <p className="col-sm-8 text-center">
                      <FormattedMessage id="plc.aboutdesc" />
                    </p>
                  </div>
                  <div className="text-center mt-5">
                    <h2>
                      <FormattedMessage id="plc.trainines" />
                    </h2>
                    <div className="row">
                      {trainers.map((item, index) => (
                        <div className="col-md-3 col-sm-6 ">
                          <img src={item?.image} alt=" " />
                          <h4 style={{ fontSize: 24 }} className="mt-3">
                            <FormattedMessage id={`plc.about${index}`} />
                          </h4>
                          <p
                            onClick={() =>
                              setBio({
                                open: true,
                                title: `plc.about${index}`,
                                desc: `plc.about${index}blurb`,
                              })
                            }
                            style={{
                              fontSize: `20px`,
                              color: '#2096ff',
                              cursor: 'pointer',
                            }}
                          >
                            Bio
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center mt-5">
                    <h2>
                      <FormattedMessage id="plc.collaborators" />
                    </h2>
                    <div className="row">
                      {collaborators.map((item, index) => (
                        <div className="col-md-3 col-sm-6 ">
                          <img src={item?.image} alt=" " />

                          <h4 style={{ fontSize: 24 }} className="mt-3">
                            <FormattedMessage id={`plc.collab${index}`} />
                          </h4>
                          <p
                            onClick={() =>
                              setBio({
                                open: true,
                                title: `plc.collab${index}`,
                                desc: `plc.collab${index}blurb`,
                              })
                            }
                            style={{
                              fontSize: `20px`,
                              color: '#2096ff',
                              cursor: 'pointer',
                            }}
                          >
                            Bio
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center pt-5">
                    <h1 className="mt-5 pt-5 mb-5">
                      <FormattedMessage id="plc.reviewproject" />
                    </h1>
                    <p className="mb-5">
                      <FormattedMessage id="plc.reviewprojectblurb" />
                    </p>
                    <ReviewBox>
                      <Slider {...settings}>
                        {reviews.map((item, index) => (
                          <div>
                            <h4 style={{ fontSize: 22 }}>
                              <strong>
                                <FormattedMessage id={`plc.review${index}`} />
                              </strong>
                            </h4>
                            {/* <p>
                              (Teacher, who participated in the PLC for
                              MathemaTIC Pilot-Project 2018)
                            </p> */}
                          </div>
                        ))}
                      </Slider>
                    </ReviewBox>
                  </div>
                </TextLayer>
              </div>
            </Section>
          </BG>
        </ThemeProvider>
        <Hiw>
          <ThemeProvider theme={theme.palette.white}>
            <div className="container">
              <div className="text-center">
                <Header>
                  <FormattedMessage id="plc.hiw" />
                </Header>
              </div>
              <div className="row">
                <div className="col-md-6 mb-5">
                  <div className="d-flex align-items-center">
                    <img src={location} alt="" />{' '}
                    <h3 className="ml-2">
                      <FormattedMessage id="plc.location" />
                    </h3>
                  </div>
                  <ul>
                    <li>
                      {' '}
                      <FormattedMessage id="plc.location1" />
                    </li>
                    <li>
                      <FormattedMessage id="plc.location2" />
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="d-flex align-items-center">
                    <img src={lengthic} alt="" />{' '}
                    <h3 className="ml-2">
                      <FormattedMessage id="plc.length" />
                    </h3>
                  </div>
                  <ul>
                    <li>
                      <FormattedMessage id="plc.length1" />
                    </li>
                    <li>
                      <FormattedMessage id="plc.length2" />
                    </li>
                    <li>
                      <FormattedMessage id="plc.length3" />
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-5">
                  <div className="d-flex align-items-center">
                    <img src={target} alt="" />{' '}
                    <h3 className="ml-2">
                      <FormattedMessage id="plc.targetgroup" />
                    </h3>
                  </div>
                  <ul>
                    <li>
                      {' '}
                      <FormattedMessage id="plc.targetgroup1" />
                    </li>
                    <li>
                      <FormattedMessage id="plc.targetgroup2" />
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-5">
                  <div className="d-flex align-items-center">
                    <img src={organization} alt="" />{' '}
                    <h3 className="ml-2">
                      <FormattedMessage id="plc.organization" />
                    </h3>
                  </div>
                  <ul>
                    <li>
                      <FormattedMessage id="plc.organization1" />
                    </li>
                    <li>
                      <FormattedMessage id="plc.organization2" />
                    </li>
                    <li>
                      <FormattedMessage id="plc.organization3" />
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-5">
                  <div className="d-flex align-items-center">
                    <img src={condition} alt="" />{' '}
                    <h3 className="ml-2">
                      <FormattedMessage id="plc.conditions" />
                    </h3>
                  </div>
                  <p
                    style={{
                      marginBottom: 0,
                      marginTop: '15px',
                      fontSize: '20px',
                    }}
                  >
                    <FormattedMessage id="plc.conditionsblurb" />
                  </p>
                  <ul style={{ marginTop: 0 }}>
                    <li>
                      <FormattedMessage id="plc.conditions1" />
                    </li>
                    <li>
                      <FormattedMessage id="plc.conditions2" />
                    </li>
                    <li>
                      <FormattedMessage id="plc.conditions3" />{' '}
                      <FormattedMessage id="plc.conditions4" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <PlcBG2>
              <img src={plcbg2} alt="" />
            </PlcBG2>
          </ThemeProvider>
        </Hiw>
        <div className="py-3 container">
          <TextLayer>
            <div className="row justify-content-center">
              <div className="col-md-9">
                <VideoBoxes>
                  <Slider {...settings}>
                    {videos2.map((item, index) => (
                      <div>
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <video
                              className="centerHorizonal plcVideo"
                              controls={true}
                              style={{ width: `100%` }}
                            >
                              <source src={item} type="video/mp4" />
                            </video>
                          </div>
                          <div className="col-md-6">
                            <h2>
                              <FormattedMessage id={`plc.video${index}`} />
                            </h2>
                            <p>
                              <FormattedMessage id={`plc.videoblurb${index}`} />
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </VideoBoxes>
              </div>
            </div>
          </TextLayer>
        </div>
        <SessionInfo>
          <div className="container">
            <div className="text-center">
              <Header>
                <FormattedMessage id="plc.sessioninfo" />
              </Header>
            </div>
            <Tabs className="main-tabs">
              <TabList>
                <Tab>Session 1</Tab>
                <Tab>Session 2</Tab>
                <Tab>Session 3</Tab>
                <Tab>Session 4</Tab>
                <Tab>Session 5</Tab>
                <Tab>Session 6</Tab>
              </TabList>
              {sections.map((item, index) => (
                <TabPanel>
                  <h2>
                    <FormattedMessage id={`plc.sec${index + 1}`} />
                  </h2>
                  <Tabs className="text-center">
                    <TabList>
                      <Tab>
                        <img src={goals} alt="" />{' '}
                        <span className="hide-mobile">
                          <FormattedMessage id={`plc.goals`} />
                        </span>
                      </Tab>
                      <Tab>
                        <img src={content} alt="" />{' '}
                        <span className="hide-mobile">
                          <FormattedMessage id={`plc.content`} />
                        </span>
                      </Tab>
                      <Tab>
                        <img src={skills} alt="" />{' '}
                        <span className="hide-mobile">
                          <FormattedMessage id={`plc.skill`} />
                        </span>
                      </Tab>
                    </TabList>
                    <TabPanel>
                      {Array(3)
                        .fill('')
                        .map((el, i) => (
                          <p>
                            <FormattedMessage
                              id={`plc.${index + 1}goal${i + 1}`}
                            />
                          </p>
                        ))}
                    </TabPanel>
                    <TabPanel>
                      {Array(3)
                        .fill('')
                        .map((el, i) => (
                          <p>
                            <FormattedMessage
                              id={`plc.${index + 1}content${i + 1}`}
                            />
                          </p>
                        ))}
                    </TabPanel>
                    <TabPanel>
                      {Array(3)
                        .fill('')
                        .map((el, i) => (
                          <p>
                            <FormattedMessage
                              id={`plc.${index + 1}skill${i + 1}`}
                            />
                          </p>
                        ))}
                    </TabPanel>
                  </Tabs>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </SessionInfo>
        <ThemeProvider theme={theme.palette.white}>
          <div className="container py-5" id="#signup">
            <div className="text-center">
              <Header>
                <FormattedMessage id="plc.signup" />
              </Header>
              <p>
                <FormattedMessage id="plc.signup-desc1" />
                <br />
                <br />
                <FormattedMessage id="plc.signup-desc2" />
                <br />
                <br />
                <FormattedMessage id="plc.signup-desc3" />
                <br />
                <br />
                <FormattedMessage id="plc.signup-desc4" />{' '}
                <a href="mailto:info@plc.mathematic.lu">
                  info@plc.mathematic.lu
                </a>
                <br />
                <br />
                <FormattedMessage id="plc.signup-desc5" />
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <ContactForm>
                  <h4>
                    <FormattedMessage id="plc.form-title" />
                  </h4>
                  <form
                    name="plc"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    data-netlify-recaptcha="true"
                  >
                    <input type="hidden" name="form-name" value="plc" />
                    <FormattedMessage id="plc.form-placeholder1">
                      {msg => (
                        <input
                          type="text"
                          placeholder={msg}
                          name="School Name"
                          required
                        />
                      )}
                    </FormattedMessage>
                    <FormattedMessage id="plc.form-placeholder2">
                      {msg => (
                        <input
                          type="text"
                          placeholder={msg}
                          name="address"
                          required
                        />
                      )}
                    </FormattedMessage>
                    <FormattedMessage id="plc.form-placeholder3">
                      {msg => (
                        <input type="text" placeholder={msg} name="cycle" />
                      )}
                    </FormattedMessage>
                    <FormattedMessage id="plc.form-placeholder4">
                      {msg => (
                        <input
                          type="text"
                          placeholder={msg}
                          name="participants"
                        />
                      )}
                    </FormattedMessage>
                    <FormattedMessage id="plc.form-placeholder5">
                      {msg => (
                        <input
                          type="email"
                          placeholder={msg}
                          name="email"
                          required
                        />
                      )}
                    </FormattedMessage>
                    <div className="spam-filter-container">
                      <ReCAPTCHA sitekey="6LfvueEdAAAAAOPPWnnx1FfSGSZfz4Bj0oeBA98i" size="normal" onChange={onCaptchaChange} ref={recaptchaRef} type="image"/>
                    </div>
                    <div className="text-center">                      
                      <button type="submit" disabled={disable}>Request</button>
                    </div>
                  </form>
                </ContactForm>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </div>
    </div>
  )
}
