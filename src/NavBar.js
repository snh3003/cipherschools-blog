import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'

 class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item>
          <img src='https://cipherschools.com/static/media/3.7574d05c.png' />
        </Menu.Item>

        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Courses
        </Menu.Item>

        <Menu.Item>
            <Button color='green'>Sign Up</Button>
          </Menu.Item>
      </Menu>
    )
  }
}
export default Navbar;