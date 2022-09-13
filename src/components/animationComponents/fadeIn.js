import { css, keyframes } from '@emotion/core'

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const fadeIn = props => css`
  animation: ${fadeInAnimation} 0.4s ease-in-out forwards;
  animation-delay: ${props.delay}ms;
  opacity: 0;
`
