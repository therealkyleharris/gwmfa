import React, { Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import OktaSignInWidget from './OktaSignInWidget';



class App extends Component {

  constructor(props) {
    super(props);
  }

  
  
  render() {
    return (
      <div className="App">
        <OktaSignInWidget
        />
      </div>
    );
  }
}

export default App;
