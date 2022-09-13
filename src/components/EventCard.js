import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import theme from '../constants/theme'
import Para from '../components/Para'
import shortID from 'shortid'

const Wrap = styled('div')`
  background-color: ${theme.colors.greyLight};
  display: flex;
  padding: 12px 24px 12px 12px;
  margin-bottom: ${theme.margin.small};
  border-radius: ${theme.borderRadius.big};
  flex-direction: column;

  ${theme.mq[2]} {
    flex-direction: row;
  }
`

const ImageWrap = styled('div')`
  ${theme.flexCenter()};
  background-color: ${theme.colors.white};
  padding: 12px;
  flex-shrink: 0;
  border-radius: ${theme.borderRadius.big};
  overflow: hidden;
  margin-bottom: ${theme.margin.small};
  align-self: center;

  ${theme.mq[2]} {
    margin-bottom: 0;
    align-self: auto;
    margin-right: 16px;
    width: 174px;
  }
`

const InfoWrap = styled('div')`
  display: flex;
  flex-direction: column;
`

const Divider = styled('div')`
  width: 100%;
  background-color: ${theme.colors.greyMid};
  height: 2px;
  margin-bottom: ${theme.margin.small};
`

const EventLogistics = styled(Para)`
  color: ${theme.colors.blue};
  margin-bottom: 0;
`

const DescriptionPara = styled(Para)`
  color: ${theme.colors.greyDark};
`

export default function EventCard({imgObject, title, description, logisticInfo, imageBG}) {
  return (
    <Wrap>
      <ImageWrap style={{backgroundColor: imageBG ? imageBG : theme.colors.white}}>
        <Img fixed={imgObject}/>
      </ImageWrap>
      <InfoWrap>
        <Para bold>{title}</Para>
        <DescriptionPara>{description}</DescriptionPara>
        <Divider />
        {logisticInfo.map(info => <EventLogistics feat key={shortID()}>{info}</EventLogistics>)}
      </InfoWrap>
    </Wrap>
  )
}
