import React from 'react'
import { css } from '@emotion/core'

class DemoOverlay extends React.Component {
  constructor() {
    super()
    this.state = {
      url: `https://www.mathematic.org/previews/20160507_machine/`,
    }
  }

  componenDidMount() {
    this.setState({
      url: `https://www.mathematic.org/previews/20160507_machine/`,
    })
  }

  handleClick1 = () =>
    this.setState({
      url: `https://www.mathematic.org/previews/20160507_machine/`,
    })
  handleClick2 = () =>
    this.setState({
      url: `https://www.mathematic.org/previews/20160507_fractions/`,
    })

  render() {
    let TRAN_SAMPLEITEM = 'Sample Item'
    return (
      <div
        id="preview-overlay"
        css={css`
          position: fixed;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          background: rgba(0, 0, 0, 0.8);
          z-index: 2000;
          text-align: center;
          padding-top: 30px;
        `}
      >
        <div
          css={css`
            display: inline-block;
            position: relative;
          `}
        >
          <iframe
            src={this.state.url}
            width="800"
            height="440"
            title="MTIC Demo"
          />
          <div
            id="close-btn"
            css={css`
              position: absolute;
              top: -10px;
              right: -10px;
              cursor: pointer;
            `}
            onClick={this.props.hideFunc}
          >
            <img
              src="https://www.mathematic.org//previews/close.png"
              alt="close button"
            />
          </div>
        </div>
        <div
          css={css`
            margin-top: 12px;
            display: flex;
            justify-content: center;
          `}
        >
          <p
            onClick={this.handleClick1}
            css={css`
              cursor: pointer;
            `}
          >{`${TRAN_SAMPLEITEM} 1`}</p>
          <p
            onClick={this.handleClick2}
            css={css`
              margin-left: 30px;
              cursor: pointer;
            `}
          >{`${TRAN_SAMPLEITEM} 2`}</p>
        </div>
      </div>
    )
  }
}

export default DemoOverlay
