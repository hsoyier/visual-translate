import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Header from './components/Header';
import Topics from './components/Topics';
import SearchForm from './components/SearchForm';
import Giphys from './components/Giphys';
import Definition from './components/Definition';
import Footer from './components/Footer';

const API_KEY_GIPHY = "GMn5DyhINWapdOlqjorRx7HhEBXj4qCZ";
const API_KEY_WORDS = "zxEaJYkQ3tmshQQch8HAQiX9T8bjp12MWApjsn6Z3tJS2MB1bl";
const API_HOST = "https://wordsapiv1.p.mashape.com";
const GIPHY_COUNT = 8;
const topicKeyWords = [
  "celebrity", "food", "animal", "travel", "programming"
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphy_list: [],
      searchword: "",
      topicFirstImage: [],
      definitions: [],
      message: ""
    }
    this.getApi();
    this.getTopicFirstImage();
  }
  searchTranslate = async (searchWord) => {
    const header = new Headers({
      "X-Mashape-Key": API_KEY_WORDS,
      "X-Mashape-Host": API_HOST,
    });
    const response = await fetch(`http://cors-anywhere.herokuapp.com/https://wordsapiv1.p.mashape.com/words/${searchWord}`, {headers : header});
    if (response.status === 200) {      
      const json = await response.json();
      const definitions = json.results.map(def => def.definition);
      this.setState({
        definitions
      });
    } else {
      this.setState({
        definitions: [],
        message: "Such words do not exist"
      });      
    }
  }
  getApi = async (e) => {
    const api_call = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY_GIPHY}&limit=${GIPHY_COUNT}`);
    const json = await api_call.json();
    this.setState({
      giphy_list: json.data
    })
  }
  searchGiphy = async (e) => {
    e.preventDefault();
    const search = e.target.elements.searchGiphy.value;
    this.searchTranslate(search); 
    const api_call = await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY_GIPHY}&limit=${GIPHY_COUNT}`);
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
      const api_call = await fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY_GIPHY}&limit=${GIPHY_COUNT}`);
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
    const api_call = await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY_GIPHY}&limit=${GIPHY_COUNT}`);
    const json = await api_call.json();
    this.setState({
      giphy_list: json.data,
      searchword: search,
    })    
  }
  render () {
    const {giphy_list, searchword, topicFirstImage, definitions, message} = this.state;
    return (
        <div className="wrapper">
          <div className="container">
            <Header />
            <section className="search">
              <SearchForm searchGiphy={this.searchGiphy} />
              <Definition definitions={definitions} message={message} />
            </section>
            {/* <Topics handleTopic={this.handleTopic} topicFirstImage={topicFirstImage} /> */}
            <Giphys giphy_list={giphy_list} searchword={searchword} />
            <Footer />
          </div>
        </div>
    );
  }

}