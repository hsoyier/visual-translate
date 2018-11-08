import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Header from './components/Header';
import Topics from './components/Topics';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import Giphys from './components/Giphys';
var unirest = require('unirest');

const API_KEY = "GMn5DyhINWapdOlqjorRx7HhEBXj4qCZ";
const ARTIST_COUNT = 100;
const topicKeyWords = [
  "celebrity", "food", "animal", "travel", "programming"
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphy_list: [],
      searchword: "",
      topicFirstImage: []
    }
    this.getApi();
    this.getTopicFirstImage();
    this.SearchTranslate();
  }
  SearchTranslate = () => {
    // const api_call = await fetch(`https://wordsapiv1.p.mashape.com/words/life`);
    // const json = await api_call.json();
    // console.log(json);
    // These code snippets use an open-source library. http://unirest.io/nodejs
    unirest.get("https://wordsapiv1.p.mashape.com/words/example")
    .header("X-Mashape-Key", "WoAmKo0QVemshgMdu2IOI7brF2uZp1RQP4Ejsn5eT2fyJvoQcK")
    .header("Accept", "application/json")
    .end(function (result) {
      console.log(result.status, result.headers, result.body.word);
    });
  }
  getApi = async (e) => {
    const search = "japan";
    const api_call = await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&limit=${ARTIST_COUNT}`);
    const json = await api_call.json();
    this.setState({
      giphy_list: json.data
    })
  }
  searchGiphy = async (e) => {
    e.preventDefault();
    const search = e.target.elements.searchGiphy.value;
    const api_call = await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&limit=${ARTIST_COUNT}`);
    const json = await api_call.json();
    this.setState({
      giphy_list: json.data,
      searchword: search
    })    
  }
  getTopicFirstImage = async () => {
    const topicImages = [];
    let topicImageInfo = {};
    for (const keyword of topicKeyWords) {
      const api_call = await fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}&limit=${ARTIST_COUNT}`);
      const json = await api_call.json();
      const image = json.data[0].images.fixed_height.url;
      const id = json.data[0].id;
      topicImageInfo = {image, id, keyword}
      topicImages.push(topicImageInfo);
    }
    this.setState({
      topicFirstImage: topicImages
    })    
  }
  handleTopic = async (e) => {
    e.preventDefault();
    const topic = e.target.name;
    let search = "";
    switch (topic) {
      case "celebrity":
        search = "celebrity";
        break;
      case "food":
        search = "food";
        break;
      case "animal":
        search = "animal";
        break;
      case "travel":
        search = "travel";
        break;
      case "programming":
        search = "programming";
        break;
      default:
        break;
      }
    search = topic;
    const api_call = await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&limit=${ARTIST_COUNT}`);
    const json = await api_call.json();
    this.setState({
      giphy_list: json.data,
      searchword: search,
    })    
  }
  render () {
    const {giphy_list, searchword, topicFirstImage} = this.state;
    return (
        <div className="wrapper">
          <div className="container">
            <Header />
            <SearchForm searchGiphy={this.searchGiphy} />
            <Topics handleTopic={this.handleTopic} topicFirstImage={topicFirstImage} />
            <Giphys giphy_list={giphy_list} searchword={searchword} />
            <Footer />
          </div>
        </div>
    );
  }

}