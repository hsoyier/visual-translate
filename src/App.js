import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import './normalize.css';
import Giphy from './components/Giphy';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="wrapper">
        <div className="container">
          <Header />
          <Switch>
            <Route exact path='/' component={Giphy} />
          </Switch>
        </div>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
