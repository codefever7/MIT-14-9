import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import { Spring, animated } from 'react-spring/renderprops.cjs'
import theme from '../../constants/theme'
import tabletShadow from '../../images/home/hero/TabletShdw_box.svg'
import tabletBox from '../../images/home/hero/Tablet_box.svg'
import tabletGlow from '../../images/home/hero/TabletGlow_box.svg'
import characterTeal from '../../images/home/hero/TealChArw_box.svg'
import characterRed from '../../images/home/hero/RedChArw_box.svg'
import characterYellow from '../../images/home/hero/YllwChArw_box.svg'
import characterGreen from '../../images/home/hero/GrnChArw.svg'
import MticNewLogo from '../../images/home/hero/MticNewLogo.svg'

import { fadeIn, translateIn } from '../animationComponents/'

const SVGNewWrap = styled.div`
  position: absolute;
  width: 100%;
  bottom: -10%;
  ${theme.transformCenterX()};

  & > * {
    position: absolute;
    bottom: 0;
    ${theme.transformCenterX()};
    width: 100%;
  }

  ${theme.mq[2]} {
    max-width: 54vw;
    width: 80%;
  }
`

const OuterWrap = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  order: 1;
  left: 50%;
  transform: translateX(-50%) scale(0.8);

  ${theme.mq[2]} {
    order: 2;
    padding-top: 13%;
  }
`

const UpdatedPositionContainer = styled.div`
  transform: translate(-50%, -30px);

  ${theme.mq[2]} {
    transform: translate(-50%, -170px);
  }

  & > * {
    position: absolute;
    bottom: 20px;
    ${theme.transformCenterX()};
    width: 100%;
  }
`

export const startAnimationDuration = 800

const Tablet = styled.img`
  position: relative;
  ${translateIn};
`

const TabletShadow = styled.img`
  ${fadeIn}
`

const TabletGlow = styled.img`
  ${fadeIn}
`

const CharacterAndArrow = styled.img`
  ${fadeIn}
`

const LogoSlideAnimation = keyframes`
  to {
    opacity: 1;
    transform: translate(-50%, -70%);
  }
`

export const logoTranslateIn = props => css`
  animation: ${LogoSlideAnimation} 600ms ease-in-out forwards;
  animation-delay: 600ms;
  transform: translate(${props.from ? props.from : '0, 0'});
  opacity: 0;
`

const MticLogo = styled.img`
  position: absolute;
  width: 45% !important;
  transform: translate(-50%, -70%);
  bottom: 0;
  left: 50%;

  ${logoTranslateIn};
`

export default class Illustration extends React.Component {
  state = {
    offsets: {
      green: 0,
      red: 0,
      teal: 0,
      yellow: 0,
    },
  }

  componentDidMount() {
    this.setState({
      offsets: {
        green: this.pathGreen.current.getTotalLength(),
        red: this.pathRed.current.getTotalLength(),
        teal: this.pathTeal.current.getTotalLength(),
        yellow: this.pathYellow.current.getTotalLength(),
      },
    })
  }

  paths = [
    {
      ref: 'pathGreen',
      title: 'green',
      color: '#23d160',
      path: 'M146.2 425.33h314v239.96',
      reverse: true,
    },
    {
      ref: 'pathRed',
      title: 'red',
      color: '#fe6462',
      path: 'M477.86 258v407.29',
      reverse: true,
    },
    {
      ref: 'pathTeal',
      title: 'teal',
      color: '#18eadf',
      path: 'M847.53 367.33H496.2v297.96',
      reverse: true,
    },
    {
      ref: 'pathYellow',
      title: 'yellow',
      color: '#e7dc48',
      path: 'M442.86 665.29v-341H43.53v-237',
      reverse: false,
    },
  ]

  pathGreen = React.createRef()
  pathRed = React.createRef()
  pathTeal = React.createRef()
  pathYellow = React.createRef()

  render() {
    const { offsets } = this.state

    return (
      <OuterWrap>
        <SVGNewWrap>
          <Tablet
            src={tabletBox}
            from={'-50%, 50px'}
            delay={startAnimationDuration}
          />
          <TabletShadow
            src={tabletShadow}
            alt=""
            delay={startAnimationDuration}
          />
          <TabletGlow src={tabletGlow} alt="" delay={startAnimationDuration} />

          <UpdatedPositionContainer>
            <CharacterAndArrow
              src={characterGreen}
              alt=""
              delay={Math.abs(offsets.green + startAnimationDuration * 1.2)}
            />
            <CharacterAndArrow
              src={characterRed}
              alt=""
              delay={Math.abs(offsets.red + startAnimationDuration * 1.2)}
            />
            <CharacterAndArrow
              src={characterTeal}
              alt=""
              delay={Math.abs(offsets.teal + startAnimationDuration * 1.2)}
            />
            <CharacterAndArrow
              src={characterYellow}
              alt=""
              delay={Math.abs(offsets.yellow + startAnimationDuration * 1.2)}
            />

            <div
              css={css`
                position: relative;
                /* to deal with the weird ie11 svg scaling issues */
                width: 100%;
                height: 0;
                /* to preserve the aspect ratio of the paths illustration */
                padding-top: 88.3%;
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 940 830"
                /* to deal with the weird ie11 svg scaling issues */
                style={{ position: 'absolute', top: 0, left: 0 }}
              >
                <g
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="15"
                  ref={this.fakeRef}
                >
                  {this.paths.map(path => (
                    <Spring
                      key={'path_' + path.title}
                      native
                      reset
                      from={{
                        dash: (path.reverse ? -1 : 1) * offsets[path.title],
                        opacity: 0,
                      }}
                      to={{ dash: 0, opacity: 0.5 }}
                      delay={startAnimationDuration * 1.5}
                      config={{
                        duration: Math.abs(offsets[path.title] * 0.4),
                        // easeInOUtQuad from https://gist.github.com/gre/1650294
                        easing: t => --t * t * t + 1,
                      }}
                    >
                      {props => (
                        <animated.path
                          ref={this[path.ref]}
                          stroke={path.color}
                          opacity={props.opacity}
                          strokeDasharray={offsets[path.title]}
                          strokeDashoffset={props.dash}
                          d={path.path}
                        />
                      )}
                    </Spring>
                  ))}
                </g>
              </svg>
              <MticLogo
                src={MticNewLogo}
                delay={startAnimationDuration}
                from={'-50%, -30%'}
              />
            </div>
          </UpdatedPositionContainer>
        </SVGNewWrap>
      </OuterWrap>
    )
  }
}
