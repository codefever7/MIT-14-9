import React from 'react'
// import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import theme from '../constants/theme'
import Header from '../components/Header'
import HeroSmall from '../components/HeroSmall'
import { FormattedMessage } from 'react-intl'
// import { ThemeProvider } from 'emotion-theming'

const BlogPageWrap = styled.div`
  position: relative;
  /* top: ${theme.nav.height}; */
  padding-bottom: 128px;
  overflow: hidden;
  width: 100%;
`
const TrainingWrap = styled.div`
  position: relative;
  padding: 50px 0;
  background: #2096ff;
  color: white;
`
const FontItalic = styled.p`
  font-style: italic;
`

const ReadMoreWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default function Trainings({}) {
  const data = [1, 2, 3, 4, 5, 6]
  // const arr = [
  //   'http://edulink.lu/0w2q',
  //   'http://edulink.lu/g2x1',
  //   'http://edulink.lu/4xpw',
  //   'http://edulink.lu/i5u0',
  // ]

  const videoArr0 = ['https://player.vimeo.com/video/603743867?h=d855dd3954']
  const videoArr1 = [
    'https://player.vimeo.com/video/651140639?h=785972c038',
    'https://player.vimeo.com/video/647194906?h=bcc9dcca1a'
  ]
  const videoArr2 = [
    'https://player.vimeo.com/video/651141150?h=8d99e44996',
    'https://player.vimeo.com/video/648640658?h=931046be66',
  ]
  const videoArr3 = [
    'https://player.vimeo.com/video/651128456?h=b2c2c6daaa',
    'https://player.vimeo.com/video/647381067?h=7e3461356a',
  ]

  const link = [
    "http://www.edulink.lu/g179",
    "http://www.edulink.lu/srsz",
    "http://www.edulink.lu/fbyz",
    "http://www.edulink.lu/hv6i",
    "http://www.edulink.lu/vnih",
    "https://mathematic.lu/plc",
  ];

  return (
    <>
      <HeroSmall>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <Header
                m0
                css={css`
                  padding: 0 0 ${theme.margin.mid};
                `}
              >
                <FormattedMessage id="navbar.training" />
              </Header>
            </div>
          </div>
        </div>
        {/* <SVGRects src={svgRects} /> */}
      </HeroSmall>
      <TrainingWrap>
        <div className="container">
          <div className="row ">
            {data.map((item, index) => (
              <div className="col-md-4" style={{ marginBottom: '30px' }}>
                <h3>
                  <FormattedMessage id={`training.${index}title`} />
                </h3>
                <FontItalic>
                  <a href={link[index]} target={"_blanck"} >
                  <FormattedMessage id={`training.${index}sub`} /> {link[index]}
                  </a>
                </FontItalic>
                <p style={{ marginBottom: 0 }}>
                  <FormattedMessage id={`training.${index}desc`} />
                </p>
                {/* <a
                  target="_blank"
                  style={{ color: 'white', textDecoration: 'underline', marginBottom: '20px'}}
                  href={arr[index]}
                >
                  {arr[index]}
                </a>  */}
                {index === 0 &&
                  videoArr0.map(item => (
                    <iframe
                      src={item}
                      width="320"
                      height="180"
                      style={{ marginTop: '20px' }}
                      frameborder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  ))}
                {index === 1 &&
                  videoArr1.map(item => (
                    <iframe
                      src={item}
                      width="320"
                      height="180"
                      style={{ marginTop: '20px' }}
                      frameborder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  ))}
                {index === 2 &&
                  videoArr2.map(item => (
                    <iframe
                      src={item}
                      width="320"
                      height="180"
                      style={{ marginTop: '20px' }}
                      frameborder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  ))}
                {index === 3 &&
                  videoArr3.map(item => (
                    <iframe
                      src={item}
                      width="320"
                      height="180"
                      style={{ marginTop: '20px' }}
                      frameborder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </TrainingWrap>
    </>
  )
}
