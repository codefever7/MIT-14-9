import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import theme from '../constants/theme.js'
import FeatureLink from './FeatureLink'
import { Spring, Trail, animated } from 'react-spring/renderprops.cjs'
import { TweenMax, ScrollToPlugin } from 'gsap/all'
import ScrollDownChevron from './ScrollDownChevron'
import mainbg from '../images/plc-bg.svg'
// import { useSpring, animated as animated2 } from 'react-spring'

// import Link from "./Link"

const gsapPlugins = [ScrollToPlugin]

const Wrap = styled('div')`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  ${theme.flexCenter()};
  background-color: ${theme.colors.blue};
  flex-direction: column;
  color: ${theme.colors.white};
  overflow: hidden;
  position: relative;
  padding-top: ${theme.nav.height};
  transition: 0.12s ease-in-out all;
  background-image: url(${mainbg});
  background-position: bottom center;
  background-size: 100%;
  background-repeat: no-repeat;
`

const Header = styled('h1')`
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  font-size: 24px;
  margin-top: -150px;
  ${theme.mq[0]} {
    font-size: 48px;
  }

  ${theme.mq[3]} {
    font-size: 92px;
  }

  @media (min-width: 1520px) {
    font-size: 128px;
  }

  & > div {
    display: inline-flex;
  }
`

const Description = styled('p')`
  font-size: ${theme.text.p};
`

const slideUpAnimation = keyframes`
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const SlideUp = styled.div`
  animation: ${slideUpAnimation} 0.5s ease-in-out forwards;
  animation-delay: ${props => props.delay}s;
  opacity: 0;
  transform: translate3d(0, 30px, 0);

  .button {
    background-color: #18eadf;
    font-size: 24px;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    padding: 8px 22px;
    -webkit-transition: 0.5s ease-in-out all;
    transition: 0.5s ease-in-out all;

    position: relative;
  }
`

const LetterWrap = styled('div')`
  position: relative;
  z-index: 2;
`

const HeaderWrap = styled('div')`
  position: relative;
`

const SymbolWrap = styled('div')`
  position: relative;
  ${theme.flexCenter()};
  ${theme.transformCenter()}
  position: absolute;
  width: 100%;
`

const SymbolOuter = styled('div')`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > div {
    width: 300%;
    padding-bottom: 300%;

    ${theme.mq[2]} {
      width: 200%;
      padding-bottom: 200%;
    }
  }
`

const LetterContentWrap = styled('div')`
  position: relative;
  ${theme.flexCenter()};
`

export default function HeroTitle({
  title,
  description,
  link,
  linkText,
  includeScrollChevron,
  isButton,
}) {
  const scrollFunc = () => {
    TweenMax.to(window, 1, {
      scrollTo: { y: scrollTarget, offsetY: parseInt(theme.nav.height) },
    })
  }
  const scrollFunc2 = () => {
    TweenMax.to(window, 1, {
      scrollTo: { y: scrollTarget2, offsetY: -5100 },
    })
  }
  let scrollTarget
  let scrollTarget2
  const letters = title
    .split('')
    // replace spaces with nbsp; since spaces don't take up space when breaking up the words into letters
    .map(letter => (letter === ' ' ? '\u00a0' : letter))

  const symbolsPerLetter = 3
  const symbolColors = [
    theme.colors.teal,
    theme.colors.blueLight,
    theme.colors.red,
  ]

  const posNeg = () => (Math.random() < 0.5 ? -1 : 1)
  const randomScale = () => Array(2).fill(Math.random())

  const randomOpacity = () => Math.min(Math.random(), 0.3)
  const randomRotateion = () => Math.random() * 0.2 * posNeg()

  // const scrollDown = useSpring({})
  // console.log('scrollTarget', scrollTarget)

  return (
    <>
      <Wrap>
        <HeaderWrap>
          <SymbolWrap>
            {letters.map((letter, j) => (
              <Header
                key={j + 'hiddenHeader'}
                style={{ pointerEvents: 'none' }}
              >
                <SymbolOuter>
                  <div style={{ height: 0, opacity: 0 }}>{letter}</div>

                  {Array(symbolsPerLetter)
                    .fill(0)
                    .map((_, i) => (
                      <Spring
                        native
                        from={{
                          transform: `translate(-50%,-50%) scale(${randomScale()}) rotate(${randomRotateion()}turn)`,
                          opacity: 0,
                          backgroundColor:
                            symbolColors[
                              Math.floor(Math.random() * symbolColors.length)
                            ],
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                        }}
                        to={{
                          transform: `
                              translate(
                                ${4 * i * posNeg() - 50}%,
                                ${30 * i * posNeg() - 50}%
                              ),
                              scale(${randomScale()})
                              rotate(${randomRotateion()}turn)`,
                          opacity: randomOpacity(),
                        }}
                        delay={50 * (j + Math.random())}
                        key={i + 'symbolSpring'}
                        config={{ mass: 10, tension: 200, friction: 40 }}
                      >
                        {decorativeStyles => (
                          <animated.div style={decorativeStyles} />
                        )}
                      </Spring>
                    ))}
                </SymbolOuter>
              </Header>
            ))}
          </SymbolWrap>
          <Header>
            <Trail
              native
              items={letters}
              keys={item => item + Math.random()}
              from={{ transform: 'translateY(-202px)', opacity: 0 }}
              to={{ transform: 'translateY(0px)', opacity: 1 }}
              config={{ mass: 3, tension: 900, friction: 66 }}
            >
              {item => props => (
                <animated.div style={props}>
                  <LetterContentWrap>
                    <LetterWrap>{item}</LetterWrap>
                  </LetterContentWrap>
                </animated.div>
              )}
            </Trail>
          </Header>
        </HeaderWrap>

        <div className="container text-center">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              {description &&
                description.map((text, i) => (
                  <SlideUp delay={1} key={i + 'description'}>
                    <Description>{text}</Description>
                  </SlideUp>
                ))}
              {link && linkText && (
                <SlideUp delay={1.5}>
                  <button className="button" onClick={scrollFunc2}>
                    {linkText}
                  </button>
                </SlideUp>
              )}
            </div>
          </div>
          {includeScrollChevron && (
            <ScrollDownChevron
              delay={1500}
              css={css`
                position: absolute;
                bottom: 0;
                transform: translateX(-50%);
                left: 50%;
              `}
              onClick={scrollFunc}
            />
          )}
        </div>
      </Wrap>
      <div ref={div => (scrollTarget = div)} />
      <div ref={div => (scrollTarget2 = div)} />
    </>
  )
}
