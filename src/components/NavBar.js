import React, { Component } from 'react'
import styled from '@emotion/styled'
import { ClassNames } from '@emotion/core'
import { Keyframes, animated } from 'react-spring/renderprops.cjs'
import Link from '../components/Link'
import theme from '../constants/theme'
import shortID from 'shortid'
import mticLogo from '../images/mticLogoSimple.svg'
import FeatureLink from '../components/FeatureLink'
import Consumer from './ContactContext'
import PlayStoreSVG from '../images/navbar/gplay.svg'
import AppStoreSVG from '../images/navbar/appstore.svg'
// import locales from '../constants/locales'
import LangSwitcher from './LangSwitcher'
import { FormattedMessage } from 'react-intl'

const navLinks = [
  {
    titleID: 'home',
    to: '/',
  },
  {
    titleID: 'features',
    to: '/features',
  },
  {
    titleID: 'about',
    to: '/about',
  },
  {
    titleID: 'curriculum',
    to: '/curriculum',
  },
  {
    titleID: 'community',
    to: '/community',
  },
  {
    titleID: 'plc',
    to: '/plc_intro',
  },
  {
    titleID: 'news',
    to: '/news',
  },
  {
    titleID: 'training',
    to: '/trainings',
  },
]

const SideLinks = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MainLinks = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  ${theme.transformCenterX()};
  display: none;
  justify-content: center;
  width: auto;


  ${theme.mq[2]} {
    /* display: flex; */
    display: inline-flex;
  }

  ${theme.mq[3]} {
    /* justify-content: space-between; */
    /* max-width: 700px; */
  }

  /* ${theme.mq[4]} {
    max-width: 800px;
  } */

  @media (max-width: ${1300}px) {
    justify-content: flex-start;
    left: 80px;
    transform: translate(0);
  }
`

const MainLinksItem = styled(Link)`
  color: ${theme.colors.white};
  margin: 12px 18px;
  text-align: center;
  position: relative;
  height: 100%;
  ${theme.flexCenter()};
  margin: 12px 10px;
  white-space: nowrap;

  ${theme.mq[3]} {
    margin: 12px 18px;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    height: 5px;
    background-color: currentColor;
    width: 120%;
    min-width: 80px;
    transform-origin: 0;
    transition: 0.2s ease-in-out transform;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
  }

  &:hover:before {
    transform: translateX(-50%) scaleX(1);
  }
`

const UtilityLinks = styled.div`
  margin: 0 12px;
  ${theme.flexCenter()};

  & > * {
    margin-left: 16px;
  }
`

const ConnectLinkNavbar = styled('div')`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.small};
  color: ${theme.colors.blueLight};
  padding: 6px 24px;
  font-size: 24px;
  text-transform: uppercase;
  display: none;

  &:hover,
  &:focus {
    color: ${theme.colors.blueLight};
  }

  ${theme.mq[2]} {
    display: inline-block;
  }
`

const LogoLink = styled(Link)`
  margin: 0 12px;
`

const Wrap = styled.div`
  background-color: ${props =>
    !props.isTop ? theme.colors.blue : 'transparent'};
  color: ${theme.colors.white};
  height: ${theme.nav.height};
  width: 100%;
  position: fixed;
  z-index: ${theme.z.mobileNavMenu};
  transition: 0.2s ease-in-out all;
  box-shadow: ${props =>
    !props.isTop ? '2px 2px 2px rgba(0,0,0,0.15)' : 'none'};

  & > * {
    user-select: none;
  }
`

const MticLogo = styled.img`
  max-width: 100%;
  position: relative;
  z-index: ${theme.z.mobileNavMenuToggle};
`

const HamburgerButton = styled('button')`
  background: transparent;
  border: none;
  ${theme.flexCenter()};
  height: 40px;
  flex-direction: column;
  position: relative;
  z-index: ${theme.z.mobileNavMenuToggle};

  ${theme.mq[2]} {
    display: none;
  }
`

const HamburgerBar = styled('div')`
  width: 30px;
  height: 3px;
  background-color: ${theme.colors.white};

  & + div {
    margin-top: 5px;
  }
`

const MobileMenuWrap = styled('div')`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.blue};
  position: relative;
  z-index: ${theme.z.mobileNavMenu};
  ${theme.flexCenter()};
  transition: all 0.2s ease-in;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
  justify-content: flex-start;
  padding: ${theme.nav.height} 0;

  ${theme.mq[2]} {
    display: none;
  }

  ${MainLinksItem} {
    height: unset;
    font-size: ${theme.text.pFeat};
    margin: 0 0 16px;

    &:hover,
    &:focus {
      content: ' ';
    }
  }
`

const ConnectLinkMobile = styled(ConnectLinkNavbar)`
  display: inline-block;
  width: 80%;
  text-align: center;
  margin-bottom: ${theme.margin.small};
  text-transform: uppercase;
  height: 56px;
`

const Contactlink = styled(FeatureLink)`
  width: 80%;
  color: ${theme.colors.white};
  text-align: center;
  text-transform: uppercase;
  height: 56px;
  font-size: 24px;
  margin-bottom: ${theme.margin.small};
  cursor: pointer;
`

const ContactLinkBtnArchetype = Contactlink.withComponent('div')
const ContactLinkBtn = styled(ContactLinkBtnArchetype)`
  border: 2px solid ${theme.colors.white};
  ${theme.flexCenter()};
  border-radius: ${theme.borderRadius.small};
`

const AppStoreLink = styled(Link)`
  z-index: ${theme.z.mobileNavMenu + 1};
  display: none;

  ${UtilityLinks} & {
    ${theme.mq[2]} {
      display: block;
    }
  }
  ${MobileMenuWrap} & {
    display: block;
  }
`
const MobileAppStoreLinksWrap = styled.div`
  display: flex;

  ${AppStoreLink} {
    margin: 0 6px;
  }
`

const Sidebar = Keyframes.Spring({
  open: { x: 0 },
  close: { x: 100 },
})

const Content = Keyframes.Trail({
  open: { x: 0, opacity: 1, delay: 0 },
  close: { x: 100, opacity: 0 },
})

export default class NavBar extends Component {
  state = {
    isTop: false,
    mobileNavOpen: false,
  }

  setIsTop = () => {
    const isTop = window.scrollY < 1
    if (isTop !== this.state.isTop) {
      this.setState({ isTop })
    }
  }

  toggleMobileNav = () =>
    this.setState(state => ({ mobileNavOpen: !state.mobileNavOpen }))

  componentDidMount() {
    document.addEventListener('scroll', this.setIsTop)
    this.setIsTop()
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.setIsTop)
  }

  render() {
    const items = [<MobileMenuWrap />]
    const state = this.state.mobileNavOpen ? 'open' : 'close'

    return (
      <Wrap isTop={this.state.isTop}>
        <SideLinks>
          <LogoLink to="/">
            <MticLogo src={mticLogo} width="55px" alt="Mathematic Logo" />
          </LogoLink>
          <UtilityLinks>
            <LangSwitcher
              pageResources={this.props.pageResources}
              pageContext={this.props.pageContext}
            />
            <AppStoreLink to="https://itunes.apple.com/ca/app/mathematic.lu/id1061078441?mt=8">
              <img src={AppStoreSVG} alt="" />
            </AppStoreLink>
            <AppStoreLink to="https://play.google.com/store/apps/details?id=com.vretta.mathematic">
              <img src={PlayStoreSVG} alt="" />
            </AppStoreLink>
            {/* <ConnectLinkNavbar to="//mathematic.org/app2" bold="true">
              <FormattedMessage id="navbar.connect" />
            </ConnectLinkNavbar> */}
            <HamburgerButton onClick={this.toggleMobileNav}>
              <HamburgerBar />
              <HamburgerBar />
              <HamburgerBar />
            </HamburgerButton>
          </UtilityLinks>
        </SideLinks>
        <div className="container">
          <MainLinks>
            {navLinks
              .filter(link => link.titleID !== 'home')
              .map(link => (
                <ClassNames key={shortID()}>
                  {({ css }) => (
                    <MainLinksItem
                      to={link.to}
                      activeClassName={css`
                        &:before {
                          transform: translateX(-50%) scaleX(1) !important;
                        }
                      `}
                      onClick={this.toggleMobileNav}
                    >
                      <FormattedMessage id={`navbar.${link.titleID}`} />
                    </MainLinksItem>
                  )}
                </ClassNames>
              ))}
          </MainLinks>
        </div>

        <Sidebar native state={state}>
          {({ x }) => (
            <animated.div
              style={{
                transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
              }}
            >
              <Content
                native
                items={items}
                keys={items.map((_, i) => i)}
                reverse={!this.state.mobileNavOpen}
                state={state}
              >
                {(item, i) => ({ x, ...props }) => (
                  <animated.div
                    style={{
                      transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                      ...props,
                    }}
                  >
                    <MobileMenuWrap>
                      {navLinks.map(link => (
                        <MainLinksItem
                          to={link.to}
                          reg={link.external}
                          onClick={this.toggleMobileNav}
                          key={shortID()}
                        >
                          <FormattedMessage id={`navbar.${link.titleID}`} />
                        </MainLinksItem>
                      ))}
                      <ConnectLinkMobile
                        onClick={e => {
                          e.preventDefault()
                          if (window.location.host === 'mathematic.org') {
                            window.open('https://mathematic.org/app2')
                          } else {
                            window.open('https://mathematic.lu/app2')
                          }
                        }}
                        bold="true"
                      >
                        <FormattedMessage id="navbar.connect" />
                      </ConnectLinkMobile>
                      <Consumer>
                        {context => (
                          <ContactLinkBtn onClick={context.toggleFunc}>
                            Contact
                          </ContactLinkBtn>
                        )}
                      </Consumer>
                      <MobileAppStoreLinksWrap>
                        <AppStoreLink to="https://itunes.apple.com/ca/app/mathematic.lu/id1061078441?mt=8">
                          <img src={AppStoreSVG} alt="" />
                        </AppStoreLink>
                        <AppStoreLink to="https://play.google.com/store/apps/details?id=com.vretta.mathematic">
                          <img src={PlayStoreSVG} alt="" />
                        </AppStoreLink>
                      </MobileAppStoreLinksWrap>
                    </MobileMenuWrap>
                  </animated.div>
                )}
              </Content>
            </animated.div>
          )}
        </Sidebar>
      </Wrap>
    )
  }
}
