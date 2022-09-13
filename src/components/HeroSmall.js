import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import theme from '../constants/theme'
import BG from './BG'
import svgRects from '../images/svg/hero_rects.svg'

const Main = styled.div`
  min-height: 260px;
  overflow: hidden;
  position: relative;
  margin-bottom: 0;
  display: flex;
  padding-top: ${theme.nav.height};
  justify-content: center;
  & > *:first-child {
    margin-top: auto;
  }
`

const SVGRects = styled.img`
  position: absolute;
  transform: translateY(50%);
  width: 100%;
  bottom: 0;
  pointer-events: none;
`

export default function BlogHeader({ children }) {
  return (
    <ThemeProvider theme={theme.palette.blue}>
      <BG p0>
        <Main>
          {children}
          <SVGRects src={svgRects} />
        </Main>
      </BG>
    </ThemeProvider>
  )
}
