import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Giphy from './Giphy';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route exact path="/giphys/:id" component={Giphy}></Route>
        </Switch>
      </BrowserRouter>        
    )
  }
}

