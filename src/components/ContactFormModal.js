import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import theme from '../constants/theme'
import Consumer from '../components/ContactContext'
import { FormattedMessage } from 'react-intl'
import { FaCheckCircle } from 'react-icons/fa'
import ReCAPTCHA from 'react-google-recaptcha'

const FormModal = styled('div')`
  position: fixed;
  width: 90%;
  top: calc(${theme.nav.height} + 12px);
  background-color: ${theme.colors.greyLight};
  padding: 10px;
  border-radius: ${theme.borderRadius.big};
  right: 5%;
  transition: 0.2s ease-in-out all;
  box-shadow: 2px 8px 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  z-index: ${theme.z.contactFormModal};
  opacity: 0;
  opacity: ${props => (!props.open ? 0 : 1)};
  pointer-events: ${props => (!props.open ? 'none' : 'auto')};
  transform: ${props =>
    !props.open ? 'translateY(30px) scale(0.8)' : 'translateY(0) scale(1)'};

  ${theme.mq[2]} {
    bottom: 100px;
    width: 400px;
    right: 24px;
    top: auto;
    transform-origin: 100% 100%;
  }
`

const Form = styled('form')`
  * + * + * {
    margin-top: ${theme.margin.small};
  }
`

const FormInput = styled('input')`
  border-radius: ${theme.borderRadius.small};
  background-color: ${theme.colors.white};
  width: 100%;
  border: none;
  font-size: ${theme.text.p};
  height: calc(${theme.text.p} * 2.5);
  padding-left: 12px;

  &:focus {
    outline: 0;
  }
`

const FormTextAreaArchetype = FormInput.withComponent('textarea')
const FormTextArea = styled(FormTextAreaArchetype)`
  height: unset;
`

class ContactFormModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      token: null,
      submitted: false,
    }
    this.contactFormEl = React.createRef()
    this.recaptchaRef = React.createRef()
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  handleSubmit = e => {
    e.preventDefault()
    if (
      this.state.email !== '' &&
      this.state.message.length >= 20 &&
      this.token !== null
    ) {
      fetch('/?no-cache=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'contact', ...this.state }),
      })
        .then(response => {
          console.log('====================================')
          console.log('response', response)
          if (response.status === 200) {
            this.setState({ submitted: true })
          }
          console.log('====================================')
          console.log(this.state.submitted)
        })
        .catch(error => {
          console.log('====================================')
          console.log(`error in submiting the form data:${error}`)
          console.log('====================================')
        })
    }
  }
  onCaptchaChange = () => {
    this.setState({ token: this.recaptchaRef.current.getValue() })
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message, token, submitted } = this.state

    return (
      <Consumer>
        {context => (
          <FormModal open={context.open}>
            <Form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
              ref={this.contactFormEl}
            >
              <input type="hidden" name="form-name" value="contact" />
              <FormattedMessage id="contactForm.name">
                {txt => (
                  <FormInput
                    type="text"
                    placeholder={txt + ' *'}
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    key="contact_name"
                    required
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="contactForm.email">
                {txt => (
                  <FormInput
                    type="email"
                    placeholder={txt + ' *'}
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    key="contact_email"
                    required
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="contactForm.message">
                {txt => (
                  <FormTextArea
                    placeholder={txt + ' *'}
                    rows="4"
                    name="message"
                    cols="50"
                    value={message}
                    onChange={this.handleChange}
                    key="contact_message"
                    required
                  />
                )}
              </FormattedMessage>
              <div
                className="spam-filter-container"
                css={{
                  cursor: `pointer`,
                  width: `100%`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <ReCAPTCHA
                  sitekey="6LfvueEdAAAAAOPPWnnx1FfSGSZfz4Bj0oeBA98i"
                  size="normal"
                  onChange={this.onCaptchaChange}
                  ref={this.recaptchaRef}
                  type="image"
                />
              </div>
              <button
                type="submit"
                css={{
                  backgroundColor:
                    theme.colors[submitted ? 'teal' : 'blueLight'],
                  fontSize: theme.text.pFeat,
                  color: theme.colors.white,
                  border: `none`,
                  borderRadius: theme.borderRadius.small,
                  cursor: `pointer`,
                  width: `100%`,
                  padding: `4px 12px`,
                  transition: `0.5s ease-in-out all`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',

                  '&:focus': {
                    outline: 0,
                  },
                }}
                disabled={submitted}
              >
                <FaCheckCircle
                  css={{
                    position: 'absolute',
                    left: `8px`,
                    opacity: submitted ? 1 : 0,
                    transition: `0.5s ease-in-out opacity`,
                  }}
                />
                <FormattedMessage id="contactForm.submit" />
              </button>
            </Form>
          </FormModal>
        )}
      </Consumer>
    )
  }
}

export default ContactFormModal
