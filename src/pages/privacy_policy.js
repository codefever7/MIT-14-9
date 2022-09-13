import React from 'react'
import theme from '../constants/theme'
import { ThemeProvider } from 'emotion-theming'
import HeroSmall from '../components/HeroSmall'
import H2 from '../components/H2'

const NotFoundPage = ({ data }) => {
  // console.log('dataaa', data)
  return (
    <ThemeProvider theme={theme.palette.white}>
      <div>
        <HeroSmall>
          <div className="container text-center">
            <H2>PRIVACY POLICY</H2>
          </div>
        </HeroSmall>
        <div className="container" style={{ marginBottom: theme.margin.mid }}>
          <div>
            <p>
              MathemaTIC (“we”, “us”, or “our”) values your privacy. We are
              committed to protecting your personal information whether you are
              engaging in learning, conducting business with us electronically,
              or simply browsing for information. As such, MathemaTIC has
              developed this Privacy Policy in order for you to understand how
              we collect, communicate, disclose and make use of your personal
              information.
            </p>
            <p>
              The MathemaTIC team considers data security to be our top priority
              and we are committed to maintaining the highest standards in
              accordance with established best practices and legal requirements.
              We strive to hold your data in a secure manner while helping you
              attain your educational goals.
            </p>
            <p>
              Your ministry of education, academic institution, or organization
              decides the purpose and method of data processing on MathemaTIC
              and are therefore considered "Data Controllers". Vretta, as the
              learning technology partner for MathemaTIC, is considered
              a "Data Processor" since the data is processed on behalf of
              the Data Controller, as per its instructions.  
            </p>
            <p>
              This privacy policy will explain how our organization uses the
              personal data we collect from you when you use our website.
            </p>
            <h2>PRIVACY STATEMENT</h2>
            <p>
              MathemaTIC strongly adheres to the principles outlined in the{' '}
              <b>Regulation (EU) 2016/679</b> of the European Parliament and of
              the Council of 27 April 2016 on the protection of natural persons
              with regard to the processing of personal data and on the free
              movement of such data. This Regulation applies to all users with
              whom MathemaTIC interacts in the course of its business, including
              international users and minors.
            </p>
            <h2>GENERAL PROVISION</h2>
            <ul>
              <li>
                We will collect and use your personal information only within
                the bounds of this Privacy Policy and the documented
                instructions of the relevant Data Controller
              </li>
              <li>
                We undertake to collect your personal information solely by
                lawful and fair means.
                <ul>
                  <li>
                    It is ultimately the responsibility of the Data Controller
                    to ensure personal data has been processed legally. However
                    we have put in place measures to ensure that data is not
                    processed without justifiable legal basis. The lawful basis
                    for processing your data in this case is your explicit
                    consent.
                  </li>
                  <li>
                    In some cases the legal justification may be different and
                    in those cases your Data Controller has chosen to utilize
                    other means of justifying processing.
                  </li>
                </ul>
              </li>
              <li>
                We will not share your personal information with any third
                parties, except as necessary to provide you with the services
                and products you have requested or to comply with the law.
              </li>
              <li>We will not sell or rent our mailing list.</li>
            </ul>
            <h2>WHAT PERSONAL DATA WILL MATHEMATIC COLLECT?</h2>
            <h3>Personal Information</h3>
            <p>
              When you use our products, as instructed by your academic
              institution (or ministry or organization), we collect personal
              information such as your first name, last name, email address. In
              some cases, we may be instructed by the Data Controller to collect
              sensitive personal information such as your sex, so that they may
              carry out questionnaires on the platform. Under some circumstances
              we collect your age in order to verify your status as a minor and
              ensure your rights are protected accordingly.
            </p>

            <h3>Credentials</h3>
            <p>
              We collect usernames and passwords that are created by users
              participating in our system. Your teacher or school administration
              may create these credentials.
            </p>

            <h3>Device Data</h3>
            <p>
              We collect information on the version of the device or software
              you are using while interacting with our products. We will also
              collect other information, such as the type of Internet Browser
              you are using and your IP address, and what Country you are in.
            </p>
            <p>
              We also use cookies that are essential to delivering the service,
              to handle login authentication and language selection.
            </p>

            <h3>Language Data</h3>
            <p>
              We collect what language of the application is being used, as well
              as when the language is changed.
            </p>

            <h3>Activity Data</h3>
            <p>
              We collect data about which lessons you have used, how long you
              spend on them, whether you have completed them or not, and your
              score on them.
            </p>
            <p>
              We also collect log data associated to browsing different sections
              within the application.
            </p>

            <h3>Opinions</h3>
            <p>
              In some schools and countries we carry out questionnaires (e.g.
              opinions about Mathematics) on request from our Data Controllers.
              They are responsible for designing the content and deciding the
              purposes for this content, however we will process the data as
              part of the platform. 
            </p>

            <h3>Other</h3>
            <p>
              We collect other administrative information such as your
              college/school name, online class name, professor’s/teacher’s
              name, and grade level. 
            </p>
            <p>
              We do not use what is sometimes referred to as "machine learning"
              or "artificial intelligence" algorithms to process personal data.
            </p>

            <h2>HOW WILL WE COLLECT YOUR DATA?</h2>

            <p>
              You directly provide MathemaTIC with the data we collect. We
              process and store data when you:
            </p>
            <ul>
              <li>Register an account</li>
              <li>
                Use our application by creating classes, joining classes,
                changing your configuration options in the application (e.g.
                changing a language), attempt and/or complete educational
                content
              </li>
              <li>Fill out a questionnaire (where applicable)</li>
            </ul>

            <h2>DISCLOSURE OF YOUR PERSONAL DATA</h2>
            <p>
              MathemaTIC will disclose your personal information to third
              parties under the following circumstances:
            </p>
            <ul>
              <li>When we are required or permitted to do so by law</li>
              <li>
                When we retain a third party to provide support to us, such as
                technical support and system maintenance services
              </li>
              <li>When we have your consent</li>
            </ul>
            <p>
              If and when your information is no longer required for the
              purposes specified by the Data Controller, we will delete your
              information.  
            </p>
            <h2>RETENTION OF INFORMATION</h2>
            <p>
              MathemaTIC will retain your personal and non-personal information
              only for the period of time that is necessary under the
              circumstances or required by law. If and when your information is
              no longer required for the purposes specified by the Data
              Controller, we will delete your information.
            </p>
            <h2>SHARING OF INFORMATION</h2>
            <p>
              At times, MathemaTIC is required to share your personal
              information with its affiliated entities that help MathemaTIC
              provide the service or products you have requested. All such
              affiliated entities are strictly bound by this Privacy Policy and
              will adhere to the same level of privacy protection as we do.
              Certain personal information becomes public when you voluntarily
              post it in the public area(s) of the website, such as a chat-room
              or a discussion forum. Public information is not protected by this
              Privacy Policy. All messages and comments posted in the public
              area(s) of the website express the views of the author and
              MathemaTIC shall not be held accountable for the content of any
              such message or comment. We do not control and are not responsible
              for the information that users may post, transmit or share on the
              website. If data is transferred internationally, it is only done
              either with user consent or if there is an adequate standard of
              protection and privacy in the relevant country. The classes of
              persons to whom the data will be transferred include only
              sub-processors who have met sufficient standards of data
              protection and privacy, including cloud storage providers and
              other Data Controllers.
            </p>
            <h2>SECURITY OF INFORMATION</h2>
            <p>
              MathemaTIC strives to ensure that your personal information is
              stored securely. We are committed to protecting your information
              by utilizing reasonable security safeguards against loss, theft,
              unauthorized access, disclosure, copying, unauthorized use or
              modification. However, we do not guarantee that our security
              safeguards will never fail. As such, MathemaTIC will have no
              liability to you or to any third party in the event that a loss,
              misuse, destruction, or alternation of your personal information
              shall occur. Please note that any information sent or received via
              e-mail is generally not secure. Therefore, we do not guarantee the
              security of such electronic transmissions.
            </p>
            <h2>THIRD-PARTY WEBSITES</h2>
            <p>
              Our website may contain links to other websites (“third party
              sites”), which are not covered under this Privacy Policy.
              MathemaTIC does not provide any representation or warranty with
              respect to third party sites. MathemaTIC does not endorse third
              party sites and is not liable or otherwise responsible for the
              data collection procedures implemented by third parties.
            </p>
            <h2>YOUR PERSONAL DATA RIGHTS</h2>
            <p>
              Your rights will vary by country and region. For European users
              that fall under the General Data Protection Regulation (GDPR), the
              following rights are supported:
            </p>
            <ul>
              <li>
                The right to be informed: Individuals have the right to know
                what kind of processing is happening to their data.
              </li>
              <li>
                The right to access data: Organizations must be able to, free of
                charge, confirm that an individual’s data is being held as well
                as notifying them of the type of data.
              </li>
              <li>
                Rectification or correction of inaccuracies: If any personal
                data is either inaccurate or incomplete, an individual can
                request this to be fixed.
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
                Organizations may not analyze an individual’s personal
                information to predict their economic situation, health,
                location, or personal preferences.
              </li>
              <li>
                Erasing personal data: Individuals have the right to have their
                data erased if the data was processed unlawfully, if they
                withdraw consent, or if their data is no longer necessary for
                the original purpose in which it was collected.
              </li>
            </ul>
            <p>
              You may obtain access to any personally identifiable information
              relating to you that we have on file by submitting a formal
              request to us at{' '}
              <a href="mailto:mathematic@vretta.com">mathematic@vretta.com</a>.
              You can help us maintain the accuracy of your personal information
              by notifying us of any changes to your information.
            </p>

            <h2>CONTACT INFORMATION</h2>
            <p>
              If you have any questions or concerns about Data Protection and
              Privacy, feel free to contact Vretta’s Data Protection Officer at 
              <a href="mailto:dpo@vretta.com">dpo@vretta.com.</a>
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default NotFoundPage
