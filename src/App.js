import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import './normalize.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Giphy from './components/Giphy';

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
          <Footer />
        </div>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
