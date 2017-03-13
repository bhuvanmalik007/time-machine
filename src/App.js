import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Transpiler from './components/transpiler';
import { Divider } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'black'}}>
        <Header />
        <Transpiler />
      </div>
    );
  }
}

export default App;
