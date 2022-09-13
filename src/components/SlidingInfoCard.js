import React from 'react'
import styled from '@emotion/styled'
import theme from '../constants/theme'
import Para from './Para'
import Img from 'gatsby-image'
import { FaAngleUp } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'

const titleSectionSize = `70px`

const SlideOutPart = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  transform: translateY(-${titleSectionSize});
  transition: 0.3s ease-in-out transform;
  background-color: ${theme.colors.white};
`

const ArrowUp = styled.div`
  position: absolute;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${theme.colors.white};
  ${theme.flexCenter()};
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  font-size: ${theme.text.pFeat};
  transition: 0.2s ease-in-out all;
`

const Main = styled.div`
  height: calc(100% + ${titleSectionSize});
  height: 100%;
  position: relative;
  overflow: hidden;
  width: 100%;
  color: ${theme.colors.blackAlt};
  border-radius: ${theme.borderRadius.big};
  margin-bottom: ${theme.margin.mid};

  &:hover {
    ${SlideOutPart} {
      transform: translateY(-100%);
    }

    ${ArrowUp} {
      transform: translate(-50%, 0) scale(0);
    }
  }
`

const TitleWrap = styled.div`
  text-transform: uppercase;
  height: ${titleSectionSize};
  ${theme.flexCenter()};
  padding: 8px;
  text-align: center;
  position: relative;
`

const Pic = styled(Img)`
  width: 100%;
`

const HiddenPart = styled.div`
  font-size: ${theme.text.p};
  padding: 0 24px 16px;
`

const MarginWrap = styled.div`
  margin-bottom: ${theme.margin.small};
`

export default function SlidingInfoCard({ title, text, image }) {
  return (
    <MarginWrap>
      <Main>
        <Pic fluid={image.childImageSharp.fluid} alt="" />
        <SlideOutPart>
          <ArrowUp>
            <FaAngleUp />
          </ArrowUp>
          <TitleWrap>
            <Para style={{ margin: 0, fontWeight: 600 }}>
              <FormattedMessage id={`home.${title}`} />
            </Para>
          </TitleWrap>
          <HiddenPart>
            <FormattedMessage id={`home.${text}`} />
          </HiddenPart>
        </SlideOutPart>
      </Main>
    </MarginWrap>
  )
}
