import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import Giphys from './components/Giphys';

const API_KEY = "GMn5DyhINWapdOlqjorRx7HhEBXj4qCZ";
const ARTIST_COUNT = 25;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphy_list: [],
      searchword: "",
    }
    this.getApi();
  }
  getApi = async (e) => {
    const search = "japan";
    const api_call = await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&limit=${ARTIST_COUNT}`);
    const json = await api_call.json();
    this.setState({
      giphy_list: json.data,
    })
  }
  searchGiphy = async (e) => {
    e.preventDefault();
    const search = e.target.elements.searchGiphy.value;
    const api_call = await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&limit=${ARTIST_COUNT}`);
    const json = await api_call.json();
    this.setState({
      giphy_list: json.data,
      searchword: search,
    })    
  }
  render () {
    const {giphy_list, searchword} = this.state;
    return (
        <div className="wrapper">
          <div className="container">
            <Header />
            <SearchForm searchGiphy={this.searchGiphy} />
            <Giphys giphy_list={giphy_list} searchword={searchword} />
            <Footer />
          </div>
        </div>
    );
  }

}

export default App;