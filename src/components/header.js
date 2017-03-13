import React, { Component } from 'react'
import { Menu, Segment, Button, Icon } from 'semantic-ui-react'

export default class Header extends Component {
  render() {
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item header><h3>Time Machine</h3></Menu.Item>
          <Menu.Item onClick={this.openGit}><Icon name='github' size='big'></Icon></Menu.Item>
        </Menu>
      </Segment>
    )
  }
  openGit = ()=>{
    window.location.href="https://github.com/bhuvanmalik007/time-machine";
  }
}
