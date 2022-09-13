import React, { Component } from 'react'
import { css } from '@emotion/core'

export default class Placeholder extends Component {
  render() {
    const { width, height } = this.props
    return (
      <div
        css={css`
          width: ${width};
          height: ${height};
          background-color: #626ac1;
          border-radius: ${theme.borderRadius.big};
        `}
      />
    )
  }
}
