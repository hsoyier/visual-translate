import React, { Component } from "react";
import "./normalize.css";
import "./App.scss";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Giphys from "./components/Giphys";
import Definition from "./components/Definition";
import Footer from "./components/Footer";

const API_KEY_GIPHY = "GMn5DyhINWapdOlqjorRx7HhEBXj4qCZ";
const API_KEY_GOOGLE_TRANSLATE = "AIzaSyCWGqzdzr8-hC9ADWYSBfuEPltHUIrekj4";
const GIPHY_COUNT = 3;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphy_list: [],
      searchword: "",
      definitions: "",
      message: "",
      sourceLang: "en",
      targetLang: "ja",
      supportedLanguages: []
    };
    this.getApi();
    this.getSupportedLanguages();
  }
  getSupportedLanguages = async () => {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2/languages?key=${API_KEY_GOOGLE_TRANSLATE}`
    );
    if (response.status === 200) {
      const json = await response.json();
      const supportedLanguages = json.data.languages;
      this.setState({
        supportedLanguages
      });
      console.log(supportedLanguages);
    }
  };
  searchTranslate = async searchWord => {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?q=${searchWord}&source=${
        this.state.sourceLang
      }&target=${this.state.targetLang}&key=${API_KEY_GOOGLE_TRANSLATE}`
    );
    console.log(this.state.targetLang, this.state.sourceLang);
    if (response.status === 200) {
      console.log("success");

      const json = await response.json();
      const translatedText = await json.data.translations[0].translatedText;
      this.setState({
        definitions: translatedText
      });
    }
  };
  getApi = async e => {
    const api_call = await fetch(
      `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY_GIPHY}&limit=${GIPHY_COUNT}`
    );
    const json = await api_call.json();
    this.setState({
      giphy_list: json.data
    });
  };
  searchGiphy = async e => {
    e.preventDefault();
    const search = e.target.value;
    console.log(search);
    this.searchTranslate(search);
    const api_call = await fetch(
      `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY_GIPHY}&limit=${GIPHY_COUNT}`
    );
    const json = await api_call.json();
    this.setState({
      giphy_list: json.data,
      searchword: search
    });
  };
  handleSourceLang = async e => {
    e.preventDefault();
    const sourceLang = e.target.value;
    this.setState({
      sourceLang
    });
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?q=${
        this.state.searchWord
      }&source=${this.state.sourceLang}&target=${
        this.state.targetLang
      }&key=${API_KEY_GOOGLE_TRANSLATE}`
    );
    if (response.status === 200) {
      const json = await response.json();
      const translatedText = await json.data.translations[0].translatedText;
      this.setState({
        definitions: translatedText
      });
    }
  };
  handleTargetLang = async e => {
    e.preventDefault();
    const targetLang = e.target.value;
    this.setState({
      targetLang
    });
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?q=${
        this.state.searchWord
      }&source=${this.state.sourceLang}&target=${
        this.state.targetLang
      }&key=${API_KEY_GOOGLE_TRANSLATE}`
    );
    if (response.status === 200) {
      const json = await response.json();
      const translatedText = await json.data.translations[0].translatedText;
      this.setState({
        definitions: translatedText
      });
    }
  };
  render() {
    const {
      giphy_list,
      searchword,
      supportedLanguages,
      definitions,
      message
    } = this.state;
    return (
      <div className="wrapper">
        <div className="container">
          <Header />
          <div className="searchBox">
            <SearchForm
              searchGiphy={this.searchGiphy}
              handleSourceLang={this.handleSourceLang}
              supportedLanguages={supportedLanguages}
            />
            <Definition
              handleTargetLang={this.handleTargetLang}
              supportedLanguages={supportedLanguages}
              definitions={definitions}
              message={message}
            />
          </div>
          <Giphys giphy_list={giphy_list} searchword={searchword} />
          <Footer />
        </div>
      </div>
    );
  }
}
