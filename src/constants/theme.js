import { css } from '@emotion/core'

const colors = {
  teal: '#18eadf',
  blue: '#2096ff',
  blueLight: '#33ccff',
  green: '#23d160',
  greenDark: '#29b473',
  red: '#fe6462',
  black: '#1D1C26',
  blackAlt: '#444b56',
  greyDark: '#999999',
  greyMid: '#cccccc',
  greyLight: '#E9F0F3',
  white: '#fff',
}

const breakpoints = [576, 768, 992, 1200]

export default {
  colors: {
    teal: colors.teal,
    blue: colors.blue,
    blueLight: colors.blueLight,
    green: colors.green,
    red: colors.red,
    black: colors.black,
    blackAlt: colors.blackAlt,
    greyDark: colors.greyDark,
    greyMid: colors.greyMid,
    greyLight: colors.greyLight,
    white: colors.white,
  },

  nav: {
    height: '66px',
  },

  text: {
    heroHeader: `96px`,
    h1: `60px`,
    h2: `48px`,
    p: `18px`,
    pFeat: `24px`,
    pSmall: `16px`,
  },

  margin: {
    large: `96px`,
    mid: `48px`,
    small: `18px`,
  },

  borderRadius: {
    big: `10px`,
    small: `5px`,
  },

  z: {
    mobileNavMenu: 100,
    mobileNavMenuToggle: 101,
    contactButtonSticky: 2,
    contactFormModal: 200,
  },

  palette: {
    grey: {
      color: colors.blackAlt,
      bg: colors.greyLight,
    },
    blue: {
      color: colors.white,
      bg: colors.blue,
    },
    green: {
      color: colors.white,
      bg: colors.greenDark,
    },
    white: {
      color: colors.blackAlt,
      bg: colors.white,
    },
  },

  flexCenter: () => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  transformCenterX: () => css`
    left: 50%;
    transform: translateX(-50%);
  `,

  transformCenter: () => css`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,

  // maps over all breakpoints, from lowest to highest. to be used as
  // ${theme.mq[0]} {
  //   font-size: 24px;
  // }
  //
  // to get set different font size at smallest breakpoint
  //
  mq: breakpoints.map(bp => `@media (min-width: ${bp}px)`),
}
