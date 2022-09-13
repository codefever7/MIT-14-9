import React, { Component } from 'react'
import theme from '../constants/theme'
import styled from '@emotion/styled'
import Link from './Link'

const ButtonA = styled('a')`
  color: ${({ color }) => color};
  border: 3px solid ${({ fill, color }) => (fill ? fill : color)};
  border-radius: ${theme.borderRadius.small};
  ${theme.flexCenter()};
  display: inline-block;
  text-align: center;
  padding: 6px 12px;
  font-size: ${theme.text.p};
  background-color: ${({ fill }) => fill && fill};
  cursor: pointer;

  &:hover {
    color: ${props => props.color};
  }

  ${theme.mq[2]} {
    font-size: ${theme.text.pFeat};
    min-width: 240px;
    line-height: 40px;
  }
`

const ButtonLink = ButtonA.withComponent(Link)
const ButtonDiv = ButtonA.withComponent('div')

export default class FeatureLink extends Component {
  render() {
    const {
      children,
      to,
      className,
      style,
      color,
      fill,
      reg,
      onClick,
    } = this.props
    return reg ? (
      <ButtonA
        href={to}
        className={className}
        style={style}
        color={color}
        fill={fill}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </ButtonA>
    ) : to ? (
      <ButtonLink
        to={to}
        className={className}
        style={style}
        color={color}
        fill={fill}
        onClick={onClick}
      >
        {children}
      </ButtonLink>
    ) : (
      <ButtonDiv
        onClick={onClick}
        className={className}
        style={style}
        color={color}
        fill={fill}
      >
        {children}
      </ButtonDiv>
    )
  }
}
