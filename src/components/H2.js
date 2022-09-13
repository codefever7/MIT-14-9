import React from 'react'
import theme from '../constants/theme'
import styled from '@emotion/styled'

const Head = styled('h2')`
  font-size: calc(${theme.text.h2} * 0.6);
  margin-bottom: ${props => (props.m0 ? 0 : theme.margin.small)};
  color: ${({ theme }) => theme.color};

  ${theme.mq[2]} {
    font-size: ${theme.text.h2};
    margin-bottom: ${props => (props.m0 ? 0 : theme.margin.mid)};
  }
`

const H2 = ({ className, children, m0 }) => (
  <Head className={className} m0={m0}>
    {children}
  </Head>
)

export default H2
