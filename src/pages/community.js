import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import theme from '../constants/theme'
import Para from '../components/Para'
import H2 from '../components/H2'
import HeroTitle from '../components/HeroTitle'
import BG from '../components/BG'
import Section from '../components/Section'
import EventCard from '../components/EventCard'
import Img from 'gatsby-image'
import { ThemeProvider } from 'emotion-theming'
import Link from '../components/Link'
import { FormattedMessage } from 'react-intl'

const FeaturedBlogLink = styled(Link)`
  position: relative;
  display: block;
  height: 100%;
  img {
    width: 100%;
    position: relative;
  }
`

const FeaturedBlogLinkTitle = styled(Para)`
  position: absolute;
  /* font-size: ${theme.text.h2}; */
  color: ${theme.colors.blackAlt};
  left:0;
  bottom: 0;
  background-color: ${theme.colors.white};
  margin-bottom: 0;
  max-width: 90%;
  padding: 24px 18px;
  border-top-right-radius: 12px;
`

// const dates = [new Date(2018, 12, 1), new Date(2018, 12, 5)]
export default class Community extends React.Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    const {
      data,
      // pageContext: { locale },
    } = this.props
    return (
      <div>
        <ThemeProvider theme={theme.palette.blue}>
          <FormattedMessage id="community.blurb">
            {blurb => (
              <FormattedMessage id="community.title">
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
        <ThemeProvider theme={theme.palette.white}>
          <BG>
            <Section>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <H2>
                      <FormattedMessage id="community.featured" />
                    </H2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <FeaturedBlogLink to="/news/post11" noIntl>
                      <Img
                        fluid={data.featuredBlogImg.childImageSharp.fluid}
                        alt=" "
                      />
                      <FeaturedBlogLinkTitle feat bold>
                        MATHEMATIC WINS THE APP-BASED GAME AWARD
                      </FeaturedBlogLinkTitle>
                    </FeaturedBlogLink>
                  </div>
                  <div className="col-md-4">
                    <Para>
                      <FormattedMessage id="community.featuredBlurb" />
                    </Para>
                  </div>
                </div>
              </div>
            </Section>
            <Section>
              <div className="container">
                <hr />
                <div className="row">
                  <div className="col">
                    <H2>
                      <FormattedMessage id="community.upcomingEvents" />
                    </H2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <EventCard
                      imgObject={data.aeaLogo.childImageSharp.fixed}
                      title={
                        '21st Association for Educational Assessment - Europe Conference'
                      }
                      description={
                        'Assessment for Changing Times: Opportunities and Challenges'
                      }
                      logisticInfo={[
                        'November 4th to the 7th',
                        'Dublin, Ireland',
                      ]}
                    />
                    <EventCard
                      imgObject={data.techLogo.childImageSharp.fixed}
                      title={'TECH 2018 Conference'}
                      description={'Educational Technology'}
                      logisticInfo={[
                        'November 15th to 17th',
                        'Visakhapatnam, India',
                      ]}
                      imageBG={theme.colors.blackAlt}
                    />
                    {/* <EventCard
                      imgObject={data.amatycLogo.childImageSharp.fixed}
                      title={'44th AMATYC Annual Conference'}
                      description={'The Main Attraction'}
                      logisticInfo={['November 15-18', 'Orlando, Florida']}
                    /> */}
                  </div>
                  <div className="col-md-4">
                    {/* <Calendar value={this.state.date} selectRange={false} /> */}
                  </div>
                </div>
              </div>
            </Section>
          </BG>
        </ThemeProvider>
      </div>
    )
  }
}

export const query = graphql`
  query {
    aeaLogo: file(relativePath: { eq: "community/events/aea.jpg" }) {
      ...AwardLogo
    }
    techLogo: file(relativePath: { eq: "community/events/tech.png" }) {
      ...AwardLogo
    }
    amatycLogo: file(relativePath: { eq: "community/events/amatyc.png" }) {
      ...AwardLogo
    }

    featuredBlogImg: file(relativePath: { eq: "community/featured_blog.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 730, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const awardLogoFrag = graphql`
  fragment AwardLogo on File {
    childImageSharp {
      fixed(width: 150, quality: 90) {
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
`
