import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { injectIntl } from 'react-intl'
import locales from '../constants/locales'

// Since DOM elements <a> cannot receive activeClassName,
// destructure the prop here and pass it only to GatsbyLink
const Link = ({
  children,
  intl: { locale },
  to,
  activeClassName,
  noIntl,
  ...other
}) => {
  // to support multilingual page links
  const path = locales[locale].default || noIntl ? to : `/${locale}${to}`
  // const path = `/${locale}${to}`
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  const mailTo = /^mailto/.test(to)
  const file = /\.[0-9a-z]+$/i.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal && !file) {
    return (
      <GatsbyLink to={path} activeClassName={activeClassName} {...other}>
        {children}
      </GatsbyLink>
    )
  } else if (mailTo) {
    return (
      <a href={to} {...other}>
        {children}
      </a>
    )
  } else {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...other}>
        {children}
      </a>
    )
  }
}

export default injectIntl(Link)
