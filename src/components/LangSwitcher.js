import React, { useState, useEffect, useRef } from 'react'
import locales from '../constants/locales'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../constants/theme'
import { FormattedMessage } from 'react-intl'
import { FaAngleDown } from 'react-icons/fa'

export default function LangSwitcher({
  pageResources: { pathname },
  pageContext,
}) {
  let [dropdownOpen, setToggle] = useState(false)
  const refContainer = useRef(null)

  const toggleDropdown = () => setToggle(!dropdownOpen)

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside)
    return () => document.removeEventListener('mouseup', handleClickOutside)
  })

  const handleClickOutside = event => {
    if (refContainer.current !== event.target.parentNode) {
      setToggle(false)
    }
  }
 
  const replaceLocale = (path, locale) => {
    // console.log(path);
    
    let localePrefix = locale === 'en' ? '' : locale
    let newPath
    if (pageContext.locale === 'en') {
      newPath = `${localePrefix}${path}`
    } else {
      newPath = path.replace(pageContext.locale, localePrefix)
    }
    return newPath.replace(/^\//, '')
    
  }

  return (
    <div style={{ position: 'relative' }}>
      <div
        css={css`
          ${theme.flexCenter()};
          color: ${theme.colors.white};
          cursor: pointer;
          text-transform: uppercase;
          flex-direction: column;
          position: relative;
          height: ${theme.nav.height};
          user-select: none;
        `}
        onClick={toggleDropdown}
      >
        <FormattedMessage id="locale" />
        <FaAngleDown
          css={css`
            position: absolute;
            top: 60%;
          `}
        />
      </div>
      {dropdownOpen && (
        <div
          css={css`
            position: absolute;
            display: flex;
            flex-direction: column;
            top: 100%;
            background: ${theme.colors.blue};
            left: -12px;
            box-shadow: 0 0 12px 6px rgba(0, 0, 0, 0.08);
          `}
          ref={refContainer}
        >
          {Object.keys(locales).map(key => (
            <>
              {/* {console.log(locales[key].locale)} */}
            <Link
              onClick={() => setToggle(false)}
              css={css`
                color: ${theme.colors.white};
                padding: 6px 12px;
                transition: 0.2s ease-in-out;

                &:hover {
                  background: ${theme.colors.blueLight};
                }
              `}
              key={locales[key].locale}
              to={`/${replaceLocale(pathname, locales[key].path)}`}
            >
              {locales[key].locale}
              </Link>
              </>
          ))}
        </div>
      )}
    </div>
  )
}
