import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Giphys from './components/Giphys';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphy_list: [],
    }
    this.getApi();
  }
  getApi = async (e) => {
    const API_KEY = "GMn5DyhINWapdOlqjorRx7HhEBXj4qCZ";
    const artist_count = 25;
    const search = "japan";
    const api_call = await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&limit=${artist_count}`);
    const json = await api_call.json();
    this.setState({
      giphy_list: json.data,
    })
  }
 
  render () {
    const {giphy_list} = this.state;
    return (
      <div className="wrapper">
        <div className="container">
          <Header />
          <Giphys giphy_list={giphy_list} />
          <Footer />
        </div>
      </div>
    );
  }

}

export default App;