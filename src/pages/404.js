import React from 'react'
import theme from '../constants/theme'
import { ThemeProvider } from 'emotion-theming'
import { FormattedMessage } from 'react-intl'
import HeroTitle from '../components/HeroTitle'

const NotFoundPage = () => (
  <ThemeProvider theme={theme.palette.white}>
    <FormattedMessage id="navbar.home">
      {downloadPDF => (
        <FormattedMessage id="404.blurb">
          {blurb => (
            <FormattedMessage id="404.title">
              {text => (
                <HeroTitle
                  title={text}
                  description={[blurb]}
                  link={'/'}
                  linkText={downloadPDF}
                  includeScrollChevron
                />
              )}
            </FormattedMessage>
          )}
        </FormattedMessage>
      )}
    </FormattedMessage>
  </ThemeProvider>
)

export default NotFoundPage
