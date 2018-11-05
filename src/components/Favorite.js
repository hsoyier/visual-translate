import React, { Component } from 'react'
import '../normalize.css';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

export default class Favorite extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Header />
          <Footer />
        </div>
      </div>
    )
  }
}
