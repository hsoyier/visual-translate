import React, { Component } from 'react';
import './App.css';
import './normalize.css';
import Giphy from './components/Giphy';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Header />>
          <Giphy />
        </div>
      </div>
    )
  }
}

export default App;
