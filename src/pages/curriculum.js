import React from 'react'
import theme from '../constants/theme'
// import Layout from '../components/Layout'
import HeroTitle from '../components/HeroTitle'
import { ThemeProvider } from 'emotion-theming'
import curriculumPDF from '../images/MathemaTIC_Curriculum_.pdf'
import { FormattedMessage } from 'react-intl'

export default function Curriculum() {
  return (
    <div>
      <ThemeProvider theme={theme.palette.blue}>
        <FormattedMessage id="curriculum.downloadPDF">
          {downloadPDF => (
            <FormattedMessage id="curriculum.blurb">
              {blurb => (
                <FormattedMessage id="curriculum.title">
                  {text => (
                    <HeroTitle
                      title={text}
                      description={[blurb]}
                      link={curriculumPDF}
                      linkText={downloadPDF}
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
