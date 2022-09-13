import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import styled from '@emotion/styled'
import theme from '../constants/theme'
import { fadeIn } from './animationComponents/'

const Icon = styled(FaChevronDown)`
  font-size: 2em;
  margin-bottom: ${theme.margin.small};
  order: 4;
  cursor: pointer;
  ${fadeIn};
`

export default function ScrollDownChevron(props) {
  return <Icon {...props} />
}
