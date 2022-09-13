import { css, keyframes } from '@emotion/core'

const SlideAnimation = keyframes`
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`

export const translateIn = props => css`
  animation: ${SlideAnimation} ${props.delay ? props.delay : 0}ms ease-in-out
    forwards;
  transform: translate(${props.from ? props.from : '0, 0'});
  opacity: 0;
`
