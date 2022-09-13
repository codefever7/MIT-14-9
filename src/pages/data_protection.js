import React from 'react'
import { graphql } from 'gatsby'
import theme from '../constants/theme'
import { ThemeProvider } from 'emotion-theming'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Link from '../components/Link'

import HeroSmall from '../components/HeroSmall'
import H2 from '../components/H2'

const GDPRTable = styled.table`
  margin-bottom: ${theme.margin.small};

  &,
  & td {
    border: 1px solid black;
    padding: 0 6px;
    text-align: right;
  }
`

const LinkWithIcon = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 18px;

  *:first-child {
    max-width: 112px;
    margin-right: 12px;
  }

  span {
    max-width: 200px;
  }
`

const NotFoundPage = ({ data }) => {
  return (
    <ThemeProvider theme={theme.palette.white}>
      <div>
        <HeroSmall>
          <div className="container text-center">
            <H2>DATA PROTECTION</H2>
          </div>
        </HeroSmall>
        <div className="container" style={{ marginBottom: theme.margin.mid }}>
          <p>
            The MathemaTIC team considers data security to be our top priority
            and we are committed to maintaining the highest standards in
            accordance with established best practices and legal requirements.
            We strive to hold your data in a secure manner while helping you
            attain your educational goals.
          </p>
          <p>
            For your reference, we have compiled the following information
            providing you with an overview of our current data policy and
            answers to frequently asked questions regarding the General Data
            Protection Regulation (GDPR).
          </p>
          <h2>WHAT IS THE GENERAL DATA PROTECTION REGULATION?</h2>
          <p>
            The GDPR is a strong move forward in the protection of data across
            the European Union. Effective May 25 2018, it has replaced the EC
            Data Protection Directive (EC/95/46), bringing new legal rights for
            individuals, extending the scope of responsibilities for data
            controllers and data processors while enhancing the regime for
            enforcement.
          </p>
          <p>
            The new regulations in the GDPR enhance the protection of personal
            data (any information that can identify a person, from names and
            emails to identification numbers). Personal data of a more sensitive
            nature (such as ethnicity or sexual orientation) is given even
            higher protection in the GDPR and requires stronger grounds to
            collect.
          </p>
          <p>
            The GDPR applies to any organization that collects personal data
            from an individual residing in the European Union. This means
            individual rights are protected no matter where the organization is
            located. The right of consent has also been strengthened. In order
            to acquire personal information, consent must be an active process,
            separate from other processing, involving clear and plain language.
          </p>
          <h2>WHAT ARE YOUR RIGHTS UNDER THE GDPR?</h2>
          <p>
            In addition to regulating the behavior of organizations, the GDPR
            also grants new rights for individuals. These rights aim to give
            individuals more control over their data and how it is processed.
            The information below should help individuals familiarize themselves
            with what rights they have under the GDPR:
          </p>
          <ul>
            <li>
              The right to be informed: Individuals have the right to know what
              kind of processing is happening to their data.
            </li>
            <li>
              The right to access data: Organizations must be able to, free of
              charge, confirm that an individual’s data is being held as well as
              notifying them of the type of data.
            </li>
            <li>
              Rectification or correction of inaccuracies: If any personal data
              is either inaccurate or incomplete, an individual can request this
              to be fixed.
            </li>
            <li>
              Restricting the processing of personal data: If an individual
              feels the processing of their data is either inaccurate or
              unlawful, they have the right to stop processing activities.
            </li>
            <li>
              Data portability: Individuals have the right to move their data
              from one organization to another, without any loss of usability.
            </li>
            <li>
              Objecting to processing activities: Individuals can object to
              their personal data being used for scientific or historical
              research, direct marketing, processing based on official
              authority, legitimate interests or in the public interest.
            </li>
            <li>
              The right not to be subject to automated decision-making:
              Individuals have the right not to be subject to profiling.
              Organizations may not analyze an individual’s personal information
              to predict their economic situation, health, location, or personal
              preferences.
            </li>
            <li>
              Erasing personal data: Individuals have the right to have their
              data erased if the data was processed unlawfully, if they withdraw
              consent, or if their data is no longer necessary for the original
              purpose in which it was collected.
            </li>
          </ul>
          <h2>WHAT IS OUR ROLE AS OUTLINED BY THE GDPR?</h2>
          <p>
            The GDPR distinguishes two important roles that classify what an
            organization must to do comply with the regulation. Your ministry of
            education, academic institution, or organization decides the purpose
            and method of data processing on MathemaTIC and are therefore
            considered{' '}
            <Link to="https://ec.europa.eu/info/law/law-topic/data-protection/reform/rules-business-and-organisations/obligations/controller-processor/what-data-controller-or-data-processor_en">
              data controllers
            </Link>
            . Vretta, as the learning technology partner for MathemaTIC, is
            considered a{' '}
            <Link
              to="https://ec.europa.eu/info/law/law-topic/data-protection/reform/rules-business-and-organisations/obligations/controller-processor/what-data-controller-or-data-processor_en"
              target="_blank"
            >
              data processor
            </Link>{' '}
            since the data is processed on behalf of the data controller, as per
            its instructions.
          </p>
          <h2>HOW IS DATA CURRENTLY BEING MANAGED?</h2>
          <p>
            Vretta has implemented rigorous safeguards to protect your data. An
            encryption configuration necessary to achieve an ‘A’ grade on Qualys
            SSL Labs Report is maintained. All personal data is kept strictly
            confidential, meaning only those authorized for access may process
            it and personal data is processed only as per instructions from the
            data controller.
          </p>
          <p>
            Protocols have been established to handle data processing. Just as
            Vretta guarantees the confidentiality and security of data, you can
            be assured that at the end of the service any personal data
            processed will be erased. Additionally, should a data breach occur,
            Vretta will immediately report the event and its details to the data
            controller upon its identification
          </p>
          <p>
            Vretta has a team of highly specialized data personnel responsible
            to process data and to ensure that it is fully compliant with data
            protection regulations. Its data team monitors data integrity,
            accuracy and confidentiality and performs regular security reviews.
            The team keeps a record of all processing activities. When an
            inaccuracy is discovered, the data is updated without undue delay.
          </p>
          <p>
            Vretta’s{' '}
            <Link to="https://ec.europa.eu/info/law/law-topic/data-protection/reform/rules-business-and-organisations/obligations/data-protection-officers/what-are-responsibilities-data-protection-officer-dpo_en">
              Data Protection Officer
            </Link>{' '}
            (DPO) keeps Vretta’s management fully updated on data protection
            responsibilities, risks and issues. The DPO also deals with access
            requests and approvals of any contracts with third parties that may
            handle sensitive data. Since large amounts of data is handled on a
            regular basis, the DPO oversees the compliance with the GDPR.
          </p>
          <p>
            Vretta's Data Management Framework details the policies concerning
            the usage, storage, dissemination, and deletion of all data that is
            collected. If you would like to know more, download the Data
            Management Framework by clicking the link or the icon below.
          </p>
          <LinkWithIcon
            to="https://s3.amazonaws.com/vrettamedia/mathematic_gatsby/pdf/Data_Management_Framework.pdf"
            className="linkWithIcon"
          >
            <Img fixed={data.iconPdf.childImageSharp.fixed} alt=" " />
            <span className="linkWithIcon__text">
              Click to Download the Data Management Framework
            </span>
          </LinkWithIcon>
          <h2>HOW DO I REQUEST DATA?</h2>
          <p>
            If you would like to request any of your data from MathemaTIC,
            download the Data Request Form by clicking the link or the icon
            below, fill in the details, and send the document as an email
            attachment to <Link to="mailto:dpo@vretta.com">dpo@vretta.com</Link>
            .
          </p>
          <LinkWithIcon
            to="https://vretta.box.com/s/tcg4ggektce1dlvswywukzkely14imhe"
            className="linkWithIcon"
          >
            <Img fixed={data.iconDoc.childImageSharp.fixed} alt=" " />
            <span className="linkWithIcon__text">
              Click to Download the Data Request Form
            </span>
          </LinkWithIcon>

          <h2>DATA PROCESSING AGREEMENT</h2>
          <p>
            Data Controllers may download a Data Processing Agreement that
            serves as documented instructions between the Data Controller and
            Data Processor. This documentation is necessary in some
            jurisdictions, including the European Union.
          </p>
          <LinkWithIcon
            to="https://boxen.vretta.com/index.php/s/R4KTibOpyEDnhFu"
            className="linkWithIcon"
          >
            <Img fixed={data.iconPdf.childImageSharp.fixed} alt=" " />
            <span className="linkWithIcon__text">
              Click to Download the Data Processing Agreement
            </span>
          </LinkWithIcon>

          <h2>WHAT DATA CAN MY DATA CONTROLLER VIEW?</h2>
          <p>
            A Data Governance Agreement is maintained between your Data
            Controller (the data department at the Ministry of Education) and
            Vretta to share data that is requested. Your Data Controller will
            not have visibility of names of students, teachers, or schools. Here
            is a snapshot of what they can see when data is sent to them:
          </p>
          <GDPRTable className="gdpr-table">
            <tbody>
              <tr>
                <td>53621</td>
                <td>1234</td>
                <td>34355</td>
                <td>227</td>
                <td>11/12/2017 14:02</td>
                <td>11/12/2017 14:02</td>
                <td>27655</td>
                <td>27655</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0.25</td>
              </tr>
              <tr>
                <td>24536</td>
                <td>1235</td>
                <td>35226</td>
                <td>228</td>
                <td>11/11/2017 17:03</td>
                <td>11/11/2017 17:04</td>
                <td>80987</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>80987</td>
                <td>0.65</td>
              </tr>
              <tr>
                <td>24356</td>
                <td>1455</td>
                <td>26644</td>
                <td>229</td>
                <td>12/27/2017 21:04</td>
                <td>12/27/2017 21:04</td>
                <td>25657</td>
                <td>0</td>
                <td>0</td>
                <td>25657</td>
                <td>0</td>
                <td>0.95</td>
              </tr>
              <tr>
                <td>97812</td>
                <td>6444</td>
                <td>7555</td>
                <td>230</td>
                <td>9/25/2018 13:04</td>
                <td>9/25/2018 13:04</td>
                <td>31440</td>
                <td>0</td>
                <td>31440</td>
                <td>0</td>
                <td>0</td>
                <td>0.33</td>
              </tr>
              <tr>
                <td>32566</td>
                <td>5999</td>
                <td>53211</td>
                <td>607</td>
                <td>9/15/2018 23:58</td>
                <td>9/15/2018 23:58</td>
                <td>11322</td>
                <td>11322</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0.15</td>
              </tr>
            </tbody>
          </GDPRTable>
          <p>
            The data we share with your Data Controller is created when you use
            the MathemaTIC app. The data we send includes user identifiers,
            which are needed to ensure data is accurately associated to the
            right user across all events on the system. The app creates a unique
            identifier for each time a user starts a new activity, as well as
            what time an activity is started and when it ends. The app also
            tracks how much time is spent in each of the available languages,
            which makes it easier for the Data Controller to identify languages
            that need more inclusion. Finally, the score for each activity is
            available (ranging from 0 to 1), which makes it possible for the
            data department of your Data Controller to assess student
            performance.
          </p>
          <h2>WHO DO I CONTACT IF I HAVE ANY QUESTIONS?</h2>
          <p>
            If you have any questions or concerns, feel free to contact Vretta’s
            Data Protection Officer at{' '}
            <Link to="mailto:dpo@vretta.com">dpo@vretta.com</Link>.
          </p>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default NotFoundPage

export const query = graphql`
  query {
    iconDoc: file(relativePath: { eq: "data_protection/icon_doc.png" }) {
      ...dataIcon
    }
    iconPdf: file(relativePath: { eq: "data_protection/icon_pdf.png" }) {
      ...dataIcon
    }
  }
`

export const dataIconFrag = graphql`
  fragment dataIcon on File {
    childImageSharp {
      fixed(width: 112, quality: 90) {
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
`
