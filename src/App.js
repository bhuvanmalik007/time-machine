import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Transpiler from './components/transpiler';
import ES6 from './components/es6';
import { Message, Icon } from 'semantic-ui-react'

class App extends Component {
  constructor(props){
    super(props);
    this.state={currentTab: 'home'};
    this.setState = this.setState.bind(this);
  }
  render() {
    this.tabChanger = (e, tabName)=>{
      this.setState({currentTab: tabName.name});
    }
    return (
        <div className="flex-container">
          <div className='Content'>
            <Header active={this.state.currentTab} tabChanger={this.tabChanger}/>
            {this.state.currentTab==='home' && <Transpiler />}
            {this.state.currentTab==='What is ES6' && <ES6 />}
          </div>
          <Message className="Footer" color='black'>Made with <Icon name="heart outline"></Icon>using React by Bhuvan Malik.</Message>
        </div>
    );
  }
}

export default App;
