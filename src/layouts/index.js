import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { IntlProvider, addLocaleData } from 'react-intl'
// import { FormattedMessage } from 'react-intl'

import { Global, css } from '@emotion/core'
import theme from '../constants/theme'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ContactFormButton from '../components/ContactFormButton'
import ContactFormModal from '../components/ContactFormModal'
// import flatten from 'flat'
// to test ie locally
import 'airbnb-js-shims'

import { ConfigProvider } from '../components/ContactContext'

// Locale data
import enData from 'react-intl/locale-data/en'
import frData from 'react-intl/locale-data/fr'
import deData from 'react-intl/locale-data/de'
import ptData from 'react-intl/locale-data/pt'
import lbData from 'react-intl/locale-data/lb'

// Messages
import en from '../i18n/en.json'
import fr from '../i18n/fr.json'
import de from '../i18n/de.json'
import pt from '../i18n/pt.json'
import lb from '../i18n/lb.json'

const messages = { en, fr, de, pt, lb}
// console.log('messages', messages)
// const messages = { en, fr }

addLocaleData([...enData, ...frData, ...deData, ...ptData, ...lbData])

// addLocaleData([...enData])

// To be able to access nested objects from messages object with dot notation (since react-intl only uses flat objects)
// commenting it out since it doesn't work with SSR for some reason :(
// export const flattenMessages = (nestedMessages, prefix = '') => {
//   if (nestedMessages === null) {
//     nestedMessages = {}
//   }
//   return Object.keys(nestedMessages).reduce((messages, key) => {
//     const value = nestedMessages[key]
//     const prefixedKey = prefix ? `${prefix}.${key}` : key

//     if (typeof value === 'string') {
//       Object.assign(messages, { [prefixedKey]: value })
//     } else {
//       Object.assign(messages, flattenMessages(value, prefixedKey))
//     }

//     return messages
//   }, {})
// }

class Layout extends React.Component {
  render() {
    const {
      pageContext: { locale },
      pageContext,
      location,
      children,
    } = this.props
    // const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          // console.log('messages[locale]', messages[locale])
          // console.log('flaaaat', JSON.stringify(messages[locale]))
          // console.log('locale', locale, 'name', name)
          // console.log('messages', messages)
          // console.log('locale', locale)
          return (
            <IntlProvider locale={locale} messages={messages[locale]}>
              <div>
                <Global
                  styles={css`
                    html {
                      box-sizing: border-box;
                      color: ${theme.colors.blackAlt};
                      /* to deal with pesky overflow issues on mobile */
                      overflow-x: hidden;
                      height: 100%;
                      position: relative;
                      min-height: 100vh;
                    }

                    body {
                      font-family: 'Lato', sans-serif;
                    }

                    a:hover,
                    a:focus {
                      text-decoration: none;
                      color: currentColor;
                    }

                    .text-center {
                      text-align: center !important;
                    }

                    p,
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    span,
                    b,
                    i,
                    u {
                      &::selection {
                        color: ${theme.colors.white};
                        background: ${theme.colors.blueLight};
                      }
                    }
                  `}
                />
                <Helmet title={data.site.siteMetadata.title}>
                  <html lang="en" />
                </Helmet>
                <link
                  href="https://fonts.googleapis.com/css?family=Lato:400,700"
                  rel="stylesheet"
                />
                {/* <script src="https://cdn.polyfill.io/v2/polyfill.min.js" /> */}
                <div>
                  <ConfigProvider>
                    <NavBar
                      pageResources={location}
                      pageContext={pageContext}
                    />
                    <div>{children}</div>
                    <Footer />
                    <ContactFormButton />
                    <ContactFormModal />
                  </ConfigProvider>
                </div>
              </div>
            </IntlProvider>
          )
        }}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
