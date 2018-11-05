import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

const API_KEY = "GMn5DyhINWapdOlqjorRx7HhEBXj4qCZ";

export default class Giphy extends Component {
  state = {
    giphy: null,
    giphy_img: undefined,
    giphy_source: undefined
  }
  componentWillMount = async () => {
    const giphy_id = this.props.location.state.giphy_id;
    const req = await fetch(`http://api.giphy.com/v1/gifs/${giphy_id}?api_key=${API_KEY}`);
    const res = await req.json();
    this.setState({
      giphy: res.data
    })   
    this.setState({
      giphy_title: this.state.giphy.title,
      giphy_img: this.state.giphy.images.original.url,
      giphy_source: this.state.giphy.source
    })
  }
  render() {
    const { giphy, giphy_title, giphy_img, giphy_source } = this.state;
    return (
      <div className="wrapper">
        <div className="container">
          <Header />
          <p>{giphy_title}</p>
          <p>{giphy_source}</p>
          <img src={giphy_img} alt="a" />
          <Footer />
        </div>
      </div>
    )
  }
}
