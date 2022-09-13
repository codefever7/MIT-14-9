import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import theme from '../constants/theme'
// import Layout from '../components/Layout'
// import Header from '../components/Header'
import Para from '../components/Para'
import H2 from '../components/H2'
// import FeatureLink from '../components/FeatureLink'
import HeroTitle from '../components/HeroTitle'
import BG from '../components/BG'
import Section from '../components/Section'
import TeamMember from '../components/TeamMember'
// import PartnerLink from '../components/PartnerLink'
import PartnersSection from '../components/PartnersSection'
// import FeatureLink from '../components/FeatureLink'
import shortID from 'shortid'
import Img from 'gatsby-image'
import { FormattedMessage } from 'react-intl'
import { ThemeProvider } from 'emotion-theming'

const AwardImgWrap = styled('div')`
  ${theme.flexCenter()};
  margin-bottom: ${theme.margin.small};
  height: 240px;
`

export const query = graphql`
  query images {
    goldAward: file(
      relativePath: { eq: "about/awards/Gold-Learning-Award-2018.png" }
    ) {
      ...AwardImgFrag
    }
    eaaAward: file(relativePath: { eq: "about/awards/eaa-awards-logo.png" }) {
      ...AwardImgFrag
    }
    iecgAward: file(relativePath: { eq: "about/awards/IECG-Logo.png" }) {
      ...AwardImgFrag
    }

    Anand: file(relativePath: { eq: "team/Anand.jpg" }) {
      ...TeamMemberImage
    }
    Alexandra: file(relativePath: { eq: "team/Alexandra.jpg" }) {
      ...TeamMemberImage
    }
    Ali: file(relativePath: { eq: "team/ali-alavi.jpg" }) {
      ...TeamMemberImage
    }
    Angelica: file(relativePath: { eq: "team/Angelica.jpg" }) {
      ...TeamMemberImage
    }
    Amina: file(relativePath: { eq: "team/Amina_2.jpg" }) {
      ...TeamMemberImage
    }
    Arbana: file(relativePath: { eq: "team/Arbana.jpg" }) {
      ...TeamMemberImage
    }
    Catalina: file(relativePath: { eq: "team/Catalina.jpg" }) {
      ...TeamMemberImage
    }
    Charles: file(relativePath: { eq: "team/charles_anifowose.jpg" }) {
      ...TeamMemberImage
    }
    Christine: file(relativePath: { eq: "team/Christine_H.png" }) {
      ...TeamMemberImage
    }
    Filipe: file(relativePath: { eq: "team/filipe_lima.jpg" }) {
      ...TeamMemberImage
    }
    Francois: file(relativePath: { eq: "team/francois_thillen.jpg" }) {
      ...TeamMemberImage
    }
    Frauke: file(relativePath: { eq: "team/frauke_01.png" }) {
      ...TeamMemberImage
    }
    Carole: file(relativePath: { eq: "team/carole.jpg" }) {
      ...TeamMemberImage
    }
    Rachel: file(relativePath: { eq: "team/rachel-gomes.jpg" }) {
      ...TeamMemberImage
    }
    Tamer: file(relativePath: { eq: "team/Tamer_Alkamli.png" }) {
      ...TeamMemberImage
    }
    Thierry: file(relativePath: { eq: "team/Thierry.jpg" }) {
      ...TeamMemberImage
    }
    Yvan: file(relativePath: { eq: "team/yvan_kieffer.jpg" }) {
      ...TeamMemberImage
    }
    Zach: file(relativePath: { eq: "team/Zach.jpg" }) {
      ...TeamMemberImage
    }
    Avatar: file(relativePath: { eq: "team/avatar.jpg" }) {
      ...TeamMemberImage
    }
    Aaron_Ogunsanya: file(relativePath: { eq: "team/Aaron_Ogunsanya.jpg" }) {
      ...TeamMemberImage
    }
    Aarti_Motala: file(relativePath: { eq: "team/Aarti_Motala.jpg" }) {
      ...TeamMemberImage
    }
    david: file(relativePath: { eq: "team/david.jpg" }) {
      ...TeamMemberImage
    }
    Jelena_Vranic: file(relativePath: { eq: "team/Jelena_Vranic.jpg" }) {
      ...TeamMemberImage
    }
    Jeremy_Moshe: file(relativePath: { eq: "team/Jeremy_Moshe.jpg" }) {
      ...TeamMemberImage
    }
    laura_taunton: file(relativePath: { eq: "team/laura_taunton.jpg" }) {
      ...TeamMemberImage
    }
    Ljubisha_Avgustin: file(
      relativePath: { eq: "team/Ljubisha_Avgustin.jpg" }
    ) {
      ...TeamMemberImage
    }
    Lorand_Varga: file(relativePath: { eq: "team/Lorand_Varga.jpg" }) {
      ...TeamMemberImage
    }
    Pauline_Belot: file(relativePath: { eq: "team/Pauline_Belot.jpg" }) {
      ...TeamMemberImage
    }
    Sam_Alexander: file(relativePath: { eq: "team/Sam_Alexander.jpg" }) {
      ...TeamMemberImage
    }
    salehin_nobi: file(relativePath: { eq: "team/salehin_nobi.jpg" }) {
      ...TeamMemberImage
    }
    Igor_Trushevsky: file(relativePath: { eq: "team/Igor_Trushevsky.jpg" }) {
      ...TeamMemberImage
    }
    luc_weiss: file(relativePath: { eq: "team/luc_weiss.png" }) {
      ...TeamMemberImage
    }
    christian_lamy: file(relativePath: { eq: "team/christian_lamy.png" }) {
      ...TeamMemberImage
    }
    Ben_Cook: file(relativePath: { eq: "team/Ben_Cook.jpg" }) {
      ...TeamMemberImage
    }
    Aleksandar_Vozarevic: file(
      relativePath: { eq: "team/Aleksandar_Vozarevic.jpg" }
    ) {
      ...TeamMemberImage
    }
    Ryan_Schwarz: file(relativePath: { eq: "team/Ryan_Schwarz.jpg" }) {
      ...TeamMemberImage
    }
    Shahin_Talaei: file(relativePath: { eq: "team/Shahin_Talaei.png" }) {
      ...TeamMemberImage
    }
    Filip_Buduru: file(relativePath: { eq: "team/Filip_Buduru.jpg" }) {
      ...TeamMemberImage
    }
    Graham_Moss: file(relativePath: { eq: "team/Graham_Moss.jpg" }) {
      ...TeamMemberImage
    }
  }
`

export default function About({ data, pageContext: { locale } }) {
  const teamMembers = [
    {
      firstName: 'Anand',
      surname: 'Karat',
      company: 'VRETTA',
      imgUrl: data.Anand.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Alexandra ',
      surname: 'Reinert',
      company: 'SCRIPT',
      imgUrl: data.Alexandra.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Ali',
      surname: 'Alavi',
      company: 'VRETTA',
      imgUrl: data.Ali.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Angelica',
      surname: 'Mendaglio',
      company: 'VRETTA',
      imgUrl: data.Angelica.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Amina',
      surname: 'Afif',
      company: 'SCRIPT',
      imgUrl: data.Amina.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Arbana',
      surname: 'Miftari',
      company: 'VRETTA',
      imgUrl: data.Arbana.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Catalina',
      surname: 'Lomos',
      company: 'LISER',
      imgUrl: data.Catalina.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Charles',
      surname: 'Anifowose',
      company: 'VRETTA',
      imgUrl: data.Charles.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Christine',
      surname: 'Hèniqui',
      company: 'SCRIPT',
      imgUrl: data.Christine.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Filipe',
      surname: 'Lima Da Cunha',
      company: 'SCRIPT',
      imgUrl: data.Filipe.childImageSharp.resolutions.src,
    },
    {
      firstName: 'François',
      surname: 'Thillen',
      company: 'SCRIPT',
      imgUrl: data.Francois.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Frauke',
      surname: 'Kesting',
      company: 'SCRIPT',
      imgUrl: data.Frauke.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Carole',
      surname: 'Frieseisen',
      company: 'SCRIPT',
      imgUrl: data.Carole.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Rachel',
      surname: 'Gomes',
      company: 'VRETTA',
      imgUrl: data.Rachel.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Tamer',
      surname: 'Alkamli',
      company: 'VRETTA',
      imgUrl: data.Tamer.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Thierry',
      surname: 'Rocher',
      company: 'DEPP',
      imgUrl: data.Thierry.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Yvan',
      surname: 'Kieffer',
      company: 'SCRIPT',
      imgUrl: data.Yvan.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Zach',
      surname: 'Williams',
      company: 'VRETTA',
      imgUrl: data.Zach.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Sophie',
      surname: 'Mangen',
      company: 'SCRIPT',
      imgUrl: data.Avatar.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Claude',
      surname: 'Hinger',
      company: 'SCRIPT',
      imgUrl: data.Avatar.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Frank',
      surname: 'Rollinger',
      company: 'SCRIPT',
      imgUrl: data.Avatar.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Franck',
      surname: 'Salles',
      company: 'DEPP',
      imgUrl: data.Avatar.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Ben',
      surname: 'Cook',
      company: 'VRETTA',
      imgUrl: data.Ben_Cook.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Laura',
      surname: 'Taunton',
      company: 'VRETTA',
      imgUrl: data.laura_taunton.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Salehin',
      surname: 'Nobi',
      company: 'VRETTA',
      imgUrl: data.salehin_nobi.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Jelena',
      surname: 'Vranic',
      company: 'VRETTA',
      imgUrl: data.Jelena_Vranic.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Stefan',
      surname: 'Goldstein',
      company: 'VRETTA',
      imgUrl: data.Avatar.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Aarti',
      surname: 'Molata',
      company: 'VRETTA',
      imgUrl: data.Aarti_Motala.childImageSharp.resolutions.src,
    },
    {
      firstName: 'David',
      surname: 'Grenzowski',
      company: 'VRETTA',
      imgUrl: data.david.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Graham',
      surname: 'Moss',
      company: 'VRETTA',
      imgUrl: data.Graham_Moss.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Igor',
      surname: 'Trushevsky',
      company: 'VRETTA',
      imgUrl: data.Igor_Trushevsky.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Jeremy',
      surname: 'Moshe',
      company: 'VRETTA',
      imgUrl: data.Jeremy_Moshe.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Lorand',
      surname: 'Varga',
      company: 'VRETTA',
      imgUrl: data.Lorand_Varga.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Albash',
      surname: 'Bokhari',
      company: 'VRETTA',
      imgUrl: data.Avatar.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Ryan',
      surname: 'Schwarz',
      company: 'VRETTA',
      imgUrl: data.Ryan_Schwarz.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Sam',
      surname: 'Alexander',
      company: 'VRETTA',
      imgUrl: data.Sam_Alexander.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Shahin',
      surname: 'Talaei',
      company: 'VRETTA',
      imgUrl: data.Shahin_Talaei.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Aaron',
      surname: 'Ogunsanya',
      company: 'VRETTA',
      imgUrl: data.Aaron_Ogunsanya.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Ljubisa',
      surname: 'Avgustin',
      company: 'VRETTA',
      imgUrl: data.Ljubisha_Avgustin.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Bojan',
      surname: 'Vuletic',
      company: 'VRETTA',
      imgUrl: data.Avatar.childImageSharp.resolutions.src,
    },
    // {
    //   firstName: 'Lucija',
    //   surname: 'Bojkic',
    //   company: 'VRETTA',
    //   imgUrl: data.Avatar.childImageSharp.resolutions.src,
    // },
    {
      firstName: 'Aleksandar',
      surname: 'Kosanovic',
      company: 'VRETTA',
      imgUrl: data.Avatar.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Aleksandar',
      surname: 'Mihajlovic',
      company: 'VRETTA',
      imgUrl: data.Avatar.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Borislav',
      surname: 'Petrovic',
      company: 'VRETTA',
      imgUrl: data.Avatar.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Nikola',
      surname: 'Petic',
      company: 'VRETTA',
      imgUrl: data.Avatar.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Luc',
      surname: 'Weis',
      company: 'SCRIPT',
      imgUrl: data.luc_weiss.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Christian',
      surname: 'Lamy',
      company: 'SCRIPT',
      imgUrl: data.christian_lamy.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Rebecca',
      surname: 'Banfield',
      company: 'VRETTA',
      imgUrl: data.Avatar.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Aleksandar',
      surname: 'Vozarevic',
      company: 'VRETTA',
      imgUrl: data.Aleksandar_Vozarevic.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Natasha',
      surname: 'Radovanovic',
      company: 'VRETTA',
      imgUrl: data.Avatar.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Jacob',
      surname: 'Pucar',
      company: 'VRETTA',
      imgUrl: data.Avatar.childImageSharp.resolutions.src,
    },
    {
      firstName: 'Filip',
      surname: 'Buduru',
      company: 'VRETTA',
      imgUrl: data.Filip_Buduru.childImageSharp.resolutions.src,
    },
  ]

  const teamMembersSorted = teamMembers.sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  )

  const awards = [
    {
      img: data.eaaAward,
      titleID: 'award1Title',
      descriptionID: 'award1Blurb',
    },
    {
      img: data.goldAward,
      titleID: 'award2Title',
      descriptionID: 'award2Blurb',
    },
    {
      img: data.iecgAward,
      titleID: 'award3Title',
      descriptionID: 'award3Blurb',
    },
  ]

  return (
    <div>
      <ThemeProvider theme={theme.palette.blue}>
        <FormattedMessage id="about.blurb">
          {blurb => (
            <FormattedMessage id="about.title">
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
                <div className="col text-center">
                  <H2>
                    <FormattedMessage id="about.meetTheTeam" />
                  </H2>
                </div>
              </div>
              <div className="row">
                {teamMembersSorted.map(person => (
                  <div className="col-lg-3 col-sm-4 col-6" key={shortID()}>
                    <TeamMember
                      imgUrl={person.imgUrl}
                      firstName={person.firstName}
                      surname={person.surname}
                      company={person.company}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </BG>
      </ThemeProvider>
      <ThemeProvider theme={theme.palette.grey}>
        <BG>
          <Section>
            <div className="container">
              <div className="row">
                <div className="col">
                  <H2>
                    <FormattedMessage id="about.partners" />
                  </H2>
                </div>
              </div>
              <PartnersSection />
            </div>
          </Section>
        </BG>
      </ThemeProvider>
      <ThemeProvider theme={theme.palette.white}>
        <BG>
          <Section>
            <div className="container">
              <div className="row">
                <div className="col">
                  <H2>
                    <FormattedMessage id="about.awards" />
                  </H2>
                  <Para>
                    <FormattedMessage id="about.awardsBlurb" />
                  </Para>
                </div>
              </div>
              <div className="row">
                {awards.map(award => (
                  <div
                    className="col-md-4 col-sm-6"
                    key={shortID()}
                    style={{ marginBottom: theme.margin.small }}
                  >
                    <AwardImgWrap>
                      <Img fixed={award.img.childImageSharp.fixed} />
                    </AwardImgWrap>
                    <Para feat>
                      <FormattedMessage id={`about.${award.titleID}`} />
                    </Para>
                    <Para>
                      <FormattedMessage id={`about.${award.descriptionID}`} />
                    </Para>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </BG>
      </ThemeProvider>
    </div>
  )
}

export const TeamMemberImage = graphql`
  fragment TeamMemberImage on File {
    childImageSharp {
      resolutions(width: 255, quality: 90) {
        src
      }
    }
  }
`

export const AwardImgFrag = graphql`
  fragment AwardImgFrag on File {
    childImageSharp {
      fixed(width: 240, quality: 90) {
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
`
