import React, { Component } from 'react';

const API_KEY = "GMn5DyhINWapdOlqjorRx7HhEBXj4qCZ";

export default class Giphy extends Component {
  state = {
    giphy: [],
  }
  componentDidMount = async () => {
    const giphy = this.props.location.state.giphy;
    const req = await fetch(`http://api.giphy.com/v1/gifs/search?q=${giphy}&api_key=${API_KEY}`);
    const res = await req.json();
    this.setState({
      giphy: res.data[0],
    })    
    console.log(this.state.giphy.images.original.url);
  }
  render() {
    return (
      <div>
        <p>{this.state.giphy.id}</p>
        {/* <img src={this.state.giphy.images.original.url} alt=""/> */}
      </div>
    )
  }
}
