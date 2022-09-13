import React from 'react'
import theme from '../constants/theme'
import HeroTitle from '../components/HeroTitle'
import { ThemeProvider } from 'emotion-theming'
import { FormattedMessage } from 'react-intl'

export default function Curriculum() {
  return (
    <div>
      <ThemeProvider theme={theme.palette.blue}>
        <FormattedMessage id="home.learnMore">
          {downloadPDF => (
            <FormattedMessage id="home.PLCBlurb">
              {blurb => (
                <FormattedMessage id="home.PLC">
                  {text => (
                    <HeroTitle
                      title={text}
                      description={[blurb]}
                      link={'/plc'}
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
    </div>
  )
}
