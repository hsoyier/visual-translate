import React, { Component } from 'react';
import './App.css';
import './normalize.css';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Main />
        </div>
      </div>
    )
  }
}

export default App;
