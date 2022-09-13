import React from 'react'
import styled from '@emotion/styled'
import theme from '../constants/theme'
import Consumer from './ContactContext'
import { FaEnvelope, FaTimes } from 'react-icons/fa'

const Button = styled('button')`
  position: fixed;
  bottom: 24px;
  right: 24px;
  /* ${theme.flexCenter()}; */
  background-color: ${theme.colors.white};
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 50%;
  box-shadow: 2px 6px 5px 3px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  z-index: ${theme.z.contactButtonSticky};

  &:focus {
    outline: 0;
  }

  & > * {
    ${theme.transformCenter()};
  }
`

const EnvelopeIcon = styled(FaEnvelope)`
  color: ${theme.colors.blue};
  font-size: ${theme.text.pFeat};
  transition: 0.2s ease-in-out;
  position: absolute;

  .open & {
    opacity: 0;
  }

  .closed & {
    opacity: 1;
  }
`
const CloseIcon = styled(FaTimes)`
  color: ${theme.colors.blue};
  font-size: ${theme.text.pFeat};
  transition: 0.2s ease-in-out;
  position: absolute;

  .open & {
    opacity: 1;
  }

  .closed & {
    opacity: 0;
  }
`

export default function ContactFormButton() {
  return (
    <Consumer>
      {context => (
        <Button
          onClick={context.toggleFunc}
          className={context.open ? 'open' : 'closed'}
        >
          <EnvelopeIcon delay={0} />
          <CloseIcon delay={0} />
        </Button>
      )}
    </Consumer>
  )
}
