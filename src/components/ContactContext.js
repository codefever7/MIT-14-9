import React, { Component, createContext } from 'react'

// Provider and Consumer are connected through their "parent" context
const { Provider, Consumer } = createContext()

// Provider will be exported wrapped in ConfigProvider component.
class ConfigProvider extends Component {
  state = { contactOpen: false }
  toggleContact = () => this.setState({ contactOpen: !this.state.contactOpen })

  render() {
    return (
      <Provider
        value={{
          open: this.state.contactOpen,
          toggleFunc: this.toggleContact,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { ConfigProvider }

// I make this default since it will probably be exported most often.
export default Consumer
