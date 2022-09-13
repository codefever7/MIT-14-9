import React from 'react'
// import { css, cx } from 'emotion'
import theme from '../constants/theme'
import styled from '@emotion/styled'

const Head = styled('h1')`
  font-size: calc(${theme.text.h1} * 0.6);
  color: ${({ theme }) => theme.color};
  margin-bottom: ${props => (props.m0 ? 0 : theme.margin.small)};

  ${theme.mq[2]} {
    margin-bottom: ${props => (props.m0 ? 0 : theme.margin.mid)};
    font-size: ${theme.text.h1};
  }
`

const Header = ({ className, children, m0 }) => (
  <Head className={className} m0={m0}>{children}</Head>
)

export default Header
