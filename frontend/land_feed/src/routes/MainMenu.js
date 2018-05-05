import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class MainMenu extends Component {
  state = { activeItem: 'newspaper' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu container icon='labeled'>
        <Menu.Item name='newspaper' active={activeItem === 'newspaper'} onClick={this.handleItemClick}>
          <Icon name='newspaper' />
          Home
        </Menu.Item>
      </Menu>
    )
  }
}

