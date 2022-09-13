import React from 'react'
import styled from '@emotion/styled'
import theme from '../constants/theme'

const Wrap = styled('div')`
  border-radius: 50%;
  // width: 200px;
  width: 100%;
  // height: 200px;
  overflow: hidden;
  position: relative;
  ${theme.flexCenter()};
  color: ${theme.colors.white};
  margin-bottom: ${theme.margin.mid};
`

const PersonImage = styled('img')`
  width: 100%;
`

const TextWrap = styled('div')`
  background: ${theme.colors.blue};
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  opacity: 0;
  transition: 0.12s ease-in-out opacity;
  flex-direction: column;
  left: 0;
  top: 0;
  ${theme.flexCenter()};

  &:hover {
    opacity: 0.9;
  }
`

const PersonName = styled('h4')`
  font-size: ${theme.text.p};
  max-width: 85%;

  ${theme.mq[2]} {
    font-size: ${theme.text.pFeat};
  }
`
const Company = styled('p')`
  margin-bottom: 0;
  font-size: calc(${theme.text.p} * 0.8);

  ${theme.mq[2]} {
    font-size: ${theme.text.p};
  }
`

export default function TeamMember({ imgUrl, firstName, surname, company }) {
  return (
    <Wrap>
      <PersonImage src={imgUrl} alt={`${firstName} ${surname}`} />
      <TextWrap>
        <PersonName>{`${firstName} ${surname}`}</PersonName>
        <Company>{`${company}`}</Company>
      </TextWrap>
    </Wrap>
  )
}
