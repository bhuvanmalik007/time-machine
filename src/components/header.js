import React, { Component } from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'

export default class Header extends Component {
  render() {
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item header>Time-Machine</Menu.Item>
          <Menu.Item name='home' active={this.props.active === 'home'} onClick={this.props.tabChanger} />
          <Menu.Item name='What is ES6' active={this.props.active === 'What is ES6'}  onClick={this.props.tabChanger} />
          <Menu.Item onClick={this.openGit}><Icon name='github' size='large'></Icon></Menu.Item>
        </Menu>
      </Segment>
    )
  }
  openGit = ()=>{
    window.location.href="https://github.com/bhuvanmalik007/time-machine";
  }
}
