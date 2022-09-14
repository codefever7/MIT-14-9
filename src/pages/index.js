import React from 'react'
import { graphql } from 'gatsby'
import Link from '../components/Link'
import theme from '../constants/theme'
import HeroMain from '../components/HeroMain/'
import Header from '../components/Header'
import Para from '../components/Para'
import H2 from '../components/H2'
import FeatureLink from '../components/FeatureLink'
import SlidingInfoCard from '../components/SlidingInfoCard'
// import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import shortID from 'shortid'
import workersIllustration from '../images/svg/home/people_working.svg'
import featureAdaptive from '../images/home/features/Adaptive.svg'
import featureCurriculumAlignment from '../images/home/features/CurriculumAlignment.svg'
import featureDashboard from '../images/home/features/Dashboard.svg'
import featureMultilingual from '../images/home/features/Multilingual.svg'
import BG from '../components/BG'
// import calculatorSVG from '../images/home/Curriculum/calculator.svg'
// import compassSVG from '../images/home/Curriculum/compass.svg'
// import eraserSVG from '../images/home/Curriculum/eraser.svg'
// import notepadSVG from '../images/home/Curriculum/notepad.svg'
// import PencilSVG from '../images/home/Curriculum/Pencil.svg'
// import protractorSVG from '../images/home/Curriculum/protractor.svg'
// import rulerSVG from '../images/home/Curriculum/ruler.svg'
import Section from '../components/Section'
import Consumer from '../components/ContactContext'
// import { FaUsers, FaChalkboardTeacher, FaSchool } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
// import { useSpring, animated } from 'react-spring/web.cjs'

const features = [
  {
    textID: 'curriculumAlignment',
    image: featureCurriculumAlignment,
  },
  {
    textID: 'multilingual',
    image: featureMultilingual,
  },
  {
    textID: 'adaptive',
    image: featureAdaptive,
  },
  {
    textID: 'dashboards',
    image: featureDashboard,
  },
]

const plcSection = [
  {
    headingID: `PLC`,
    textID: `PLCBlurb`,
    link: `https://www.mathematic.org/plc/index_en.html`,
  },
  {
    headingID: `community`,
    textID: `communityBlurb`,
    link: `/community`,
  },
]

// const decorativeIcons = [
//   calculatorSVG,
//   compassSVG,
//   eraserSVG,
//   notepadSVG,
//   PencilSVG,
//   protractorSVG,
//   rulerSVG,
// ]

// const StatPara = styled(Para)`
//   margin-bottom: 0;
// `

// const StatIcon = css`
//   margin-right: 8px;
// `

// const DecorativeIcon = styled(animated.img)`
//   position: absolute;
//   z-index: 0;
//   left: 50%;
//   top: 50%;
// `

export default function IndexPage({ data, pageContext }) {
  // const { num } = useSpring({
  //   from: { num: 0 },
  //   to: { num: 1 },
  //   config: { mass: 10, tension: 100, friction: 4 },
  // })

  // const transformFunc = i => num =>
  //   `translate(${(i % 2 === 0 ? i : -i) * num * 100}px, ${(i % 2 === 0
  //     ? -i
  //     : i) *
  //     num *
  //     20}px) rotate(${i * num * 10}deg)`

  const howItWorks = [
    {
      titleID: 'personalizedLearning',
      textID: 'studentsInteractWithResearchBacked',
      image: data.HiW_PersonalizedLearning1,
    },
    {
      titleID: 'differantiatedInstruction',
      textID: 'differantiatedInstructionBlurb',
      image: data.HiW_DifferentiatedInstructions1,
    },
    {
      titleID: 'actionableData',
      textID: 'actionableDataBlurb',
      image: data.HiW_ActionableData1,
    },
    {
      titleID: 'personalizedLearning',
      textID: 'studentsInteractWithResearchBacked',
      image: data.HiW_Meeting,
    },
    {
      titleID: 'differantiatedInstruction',
      textID: 'differantiatedInstructionBlurb',
      image: data.HiW_Idea,
    },
    {
      titleID: 'actionableData',
      textID: 'actionableDataBlurb',
      image: data.HiW_TeamWork,
    },
    // {
    //   titleID: 'actionableData',
    //   textID: 'actionableDataBlurb',
    //   image: data.HiW_Podium,
    // },
  ]

  const trainings = [
    {
      titleID: 'personalizedLearning',
      textID: 'studentsInteractWithResearchBacked',
      image: data.HiW_PersonalizedLearning,
    },
    {
      titleID: 'differantiatedInstruction',
      textID: 'differantiatedInstructionBlurb',
      image: data.HiW_DifferentiatedInstructions,
    },
    {
      titleID: 'actionableData',
      textID: 'actionableDataBlurb',
      image: data.HiW_ActionableData,
    },
  ]

  React.useEffect(() => {
    const { hash } = window.location
    // console.log('location ', window.location)
    if (hash.startsWith('#open_item_link')) {
      window.location.href = window.location.origin + '/app2/' + hash
    }
  })

  const brochureLink =
    pageContext.locale === 'pt'
      ? 'https://vrettamedia.s3.amazonaws.com/mathematic_gatsby/pdf/Brochure-WEB-V11-Portugese.pdf'
      : 'https://d9d0y8p1n4328.cloudfront.net/mathematic_gatsby/pdf/MathemaTIC%20Information%20Brochure.pdf'

  return (
    <div>
      <ThemeProvider theme={theme.palette.blue}>
        <HeroMain locale={pageContext.locale} training={howItWorks} />
      </ThemeProvider>
      <ThemeProvider theme={theme.palette.grey}>
        <BG>
          <div className="container">
            <Section
              css={css`
                padding-top: ${theme.margin.large};
              `}
            >
              <Header className="text-center">
                <FormattedMessage id="home.howItWorks" />
              </Header>
              <div className="row">
                {trainings.map(thing => (
                  <div className="col-sm-4" key={shortID()}>
                    <SlidingInfoCard
                      text={thing.textID}
                      title={thing.titleID}
                      image={thing.image}
                    />
                  </div>
                ))}
              </div>
            </Section>
            <Section>
              <H2>
                <FormattedMessage id="home.features" />
              </H2>
              <Para>
                <FormattedMessage id="home.featuresBlurb" />
              </Para>
              <div className="row" style={{ marginBottom: theme.margin.mid }}>
                {features.map(feature => (
                  <div className="col-md-3 col-6 text-center" key={shortID()}>
                    <div
                      css={css`
                        ${theme.flexCenter()};
                        flex-direction: column;
                      `}
                    >
                      <img
                        src={feature.image}
                        alt=" "
                        css={css`
                          width: 100%;
                          margin-bottom: ${theme.margin.small};
                        `}
                      />
                      <Para bold>
                        <FormattedMessage id={`home.${feature.textID}`} />
                      </Para>
                    </div>
                  </div>
                ))}
              </div>
              <div
                css={css`
                  ${theme.flexCenter()};
                  flex-wrap: word-wrap;
                  & > * {
                    margin: 0 6px 12px;
                  }
                `}
              >
                <FeatureLink to={brochureLink} color={theme.colors.blue}>
                  <FormattedMessage id="home.downloadInfo" />
                </FeatureLink>
                <FeatureLink to="/features" color={theme.colors.blue}>
                  <FormattedMessage id="home.viewDetails" />
                </FeatureLink>
              </div>
            </Section>
          </div>
        </BG>
      </ThemeProvider>
      <ThemeProvider theme={theme.palette.green}>
        <BG
          css={css`
            position: relative;
            padding-top: 0;
          `}
        >
          <div>
            {/* {decorativeIcons.map((icon, i) => (
              <DecorativeIcon
                src={icon}
                style={{ transform: num.interpolate(transformFunc(i)) }}
                key={'decIc' + i}
              />
            ))} */}
          </div>

          <Section
            css={css`
              position: relative;
              z-index: 2;
              padding-top: 48px;
            `}
          >
            <div className="container text-center">
              <H2>
                <FormattedMessage id="home.curriculum" />
              </H2>
              <Para>
                <FormattedMessage id="home.curriculumBlurb" />
              </Para>
              <FeatureLink to="/curriculum" color={theme.colors.white}>
                <FormattedMessage id="home.viewDetails" />
              </FeatureLink>
            </div>
          </Section>
        </BG>
      </ThemeProvider>
      <ThemeProvider theme={theme.palette.white}>
        <BG>
          <div className="container text-center">
            <Header>
              <FormattedMessage id="home.mathematicCommunity" />
            </Header>
            <div className="row">
              {plcSection.map(col => (
                <div className="col-md-6 text-left" key={shortID()}>
                  <H2 className="text-center">
                    <FormattedMessage id={`home.${col.headingID}`} />
                  </H2>
                  <Para>
                    <FormattedMessage id={`home.${col.textID}`} />
                  </Para>
                  <Link to={col.link}>
                    <Para
                      bold
                      feat
                      css={css`
                        color: ${theme.colors.blue};
                      `}
                    >
                      <FormattedMessage id="home.learnMore" />
                    </Para>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </BG>
      </ThemeProvider>
      <ThemeProvider theme={theme.palette.white}>
        <BG
          css={css`
            overflow: hidden;
          `}
        >
          <div
            css={css`
              object-fit: contain;
              width: 100%;
              max-height: 400px;
              text-align: center;
            `}
          >
            <img
              src={workersIllustration}
              css={css`
                object-fit: contain;
                width: 1920px;
                max-width: 100%;
              `}
              alt="illustration of people working"
            />
          </div>
          <div className="container">
            {/* <div className="row align-items-end justify-content-center justify-content-md-start">
                <div className="col-xs-12 col-md-3 text-center">
                  <H2
                    css={css`
                      ${theme.mq[2]} {
                        margin-bottom: 0px !important;
                      }
                    `}
                  >
                    Stats
                  </H2>
                </div>
                <div className="col-xs-12 col-md-3 text-center">
                  <StatPara feat>
                    <FaUsers className={StatIcon} />
                    <b>9880</b> students
                  </StatPara>
                </div>
                <div className="col-xs-12 col-md-3 text-center">
                  <StatPara feat>
                    <FaChalkboardTeacher className={StatIcon} />
                    <b>797</b> online classes
                  </StatPara>
                </div>
                <div className="col-xs-12 col-md-3 text-center">
                  <StatPara feat>
                    <FaSchool className={StatIcon} />
                    <b>192</b> schools
                  </StatPara>
                </div>
              </div> */}
            <div
              css={css`
                margin: ${theme.margin.mid} 0 ${theme.margin.small};
                text-align: center;
              `}
            >
              <Para feat>
                <FormattedMessage
                  id="home.learnAboutTheTeam"
                  values={{
                    learn: (
                      <Link to="/about">
                        <b>
                          <FormattedMessage id="home.learn" />
                        </b>
                      </Link>
                    ),
                  }}
                />
              </Para>
            </div>
          </div>
        </BG>
      </ThemeProvider>
      <ThemeProvider theme={theme.palette.blue}>
        <BG>
          <Section>
            <div className="container text-center">
              <Para
                feat
                css={css`
                  margin-bottom: ${theme.margin.mid};
                `}
              >
                <FormattedMessage id="home.requestAccessBlurb" />
              </Para>
              <Consumer>
                {context => (
                  <FeatureLink
                    color={theme.colors.blue}
                    fill={theme.colors.white}
                    onClick={context.toggleFunc}
                  >
                    <FormattedMessage id="home.requestAccess" />
                  </FeatureLink>
                )}
              </Consumer>
            </div>
          </Section>
        </BG>
      </ThemeProvider>
    </div>
  )
}

export const query = graphql`
  query {
    HiW_PersonalizedLearning: file(
      relativePath: { eq: "home/how_it_works/Personalized-Learning.png" }
    ) {
      ...howItWorksFrag
    }
    HiW_DifferentiatedInstructions: file(
      relativePath: { eq: "home/how_it_works/Differentiated-Instructions.png" }
    ) {
      ...howItWorksFrag
    }
    HiW_ActionableData: file(
      relativePath: { eq: "home/how_it_works/Actionable-Data.png" }
    ) {
      ...howItWorksFrag
    }

    HiW_PersonalizedLearning1: file(
      relativePath: { eq: "home/how_it_works/LiveEvent-StarterLevel.png" }
    ) {
      ...howItWorksFrag
    }
    HiW_DifferentiatedInstructions1: file(
      relativePath: { eq: "home/how_it_works/LiveEvent-Level1.png" }
    ) {
      ...howItWorksFrag
    }
    HiW_ActionableData1: file(
      relativePath: { eq: "home/how_it_works/LiveEvent-Level2.png" }
    ) {
      ...howItWorksFrag
    }
    HiW_Podium: file(relativePath: { eq: "home/how_it_works/Podium.png" }) {
      ...howItWorksFrag
    }
    HiW_Meeting: file(relativePath: { eq: "home/how_it_works/meeting.png" }) {
      ...howItWorksFrag
    }
    HiW_Idea: file(relativePath: { eq: "home/how_it_works/idea.png" }) {
      ...howItWorksFrag
    }
    HiW_TeamWork: file(relativePath: { eq: "home/how_it_works/team-work.png" }) {
      ...howItWorksFrag
    }
  }
`

export const howItWorks = graphql`
  fragment howItWorksFrag on File {
    childImageSharp {
      fluid(maxWidth: 400, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`
