import React from 'react'
import styled from '@emotion/styled'
import theme from '../constants/theme'
import { FormattedMessage } from 'react-intl'

const P = styled('p')`
  color: ${({ theme }) => theme.color};
  font-size: ${props => (props.feat ? theme.text.pFeat : theme.text.p)};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  display: inline-block;
`

const Para = ({ children, className, bold, feat, style, ml }) => (
  <P bold={bold} className={className} feat={feat} style={style}>
    {ml && <FormattedMessage id={ml} />}
    {!ml && children}
  </P>
)

export default Para
