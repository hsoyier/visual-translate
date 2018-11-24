import React, { Component } from "react";
import "./normalize.css";
import "./App.scss";
import Header from "./components/Header";
import Search from "./components/Search";
import Translate from "./components/Translate";
import LanguageSelect from "./components/LanguageSelect";
import Giphys from "./components/Giphys";
import Footer from "./components/Footer";
import CopyMessage from "./components/CopyMessage";

const API_KEY_GIPHY = "GMn5DyhINWapdOlqjorRx7HhEBXj4qCZ";
const API_KEY_GOOGLE_TRANSLATE = "AIzaSyCWGqzdzr8-hC9ADWYSBfuEPltHUIrekj4";
const GIPHY_COUNT = 8;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphy_list: [],
      searchword: "",
      translate: "",
      message: "",
      sourceLang: "",
      targetLang: "",
      supportedLanguages: []
    };
    this.getApi();
    // this.getSupportedLanguages();
  }
  // getSupportedLanguages = async () => {
  //   const response = await fetch(
  //     `https://translation.googleapis.com/language/translate/v2/languages?key=${API_KEY_GOOGLE_TRANSLATE}`
  //   );
  //   if (response.status === 200) {
  //     const json = await response.json();
  //     const supportedLanguages = json.data.languages;
  //     this.setState({
  //       supportedLanguages
  //     });
  //   }
  // };
  searchTranslate = async (searchword, sourceLang, targetLang) => {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?q=${searchword}&source=${
        this.state.sourceLang
      }&target=${this.state.targetLang}&key=${API_KEY_GOOGLE_TRANSLATE}`
    );
    if (response.status === 200) {
      const json = await response.json();
      const translatedText = await json.data.translations[0].translatedText;
      this.setState({
        translate: translatedText
      });
    }
  };
  getApi = async e => {
    const api_call = await fetch(
      `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY_GIPHY}&limit=${GIPHY_COUNT}`
    );
    const json = await api_call.json();
    console.log(json);
    this.setState({
      giphy_list: json.data
    });
  };
  searchGiphy = async e => {
    e.preventDefault();
    const search = e.target.value;
    this.searchTranslate(search, this.state.sourceLang, this.state.targetLang);
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
    this.searchTranslate(
      this.state.searchword,
      sourceLang,
      this.state.targetLang
    );
    this.setState({
      sourceLang
    });
  };
  handleTargetLang = async e => {
    e.preventDefault();
    const targetLang = e.target.value;
    this.searchTranslate(
      this.state.searchword,
      this.state.sourceLang,
      targetLang
    );
    this.setState({
      targetLang
    });
  };
  copyClip = e => {
    e.preventDefault();
    const copyTextarea = document.getElementById("js-copytextarea").value;
    document.execCommand("copy");
    this.setState({
      isCopiedSuccess: true
    });
    setTimeout(() => {
      this.setState({ isCopiedSuccess: false });
    }, 6000);
  };
  render() {
    const {
      giphy_list,
      searchword,
      supportedLanguages,
      translate,
      message,
      isCopiedSuccess
    } = this.state;
    return (
      <div className="wrapper">
        <CopyMessage isCopiedSuccess={isCopiedSuccess} />
        <div className="container">
          <Header />
          <LanguageSelect
            handleSourceLang={this.handleSourceLang}
            handleTargetLang={this.handleTargetLang}
            supportedLanguages={supportedLanguages}
          />
          <div className="translateCol">
            <Search searchGiphy={this.searchGiphy} />
            <Translate translate={translate} message={message} />
          </div>
          <Giphys
            giphy_list={giphy_list}
            searchword={searchword}
            copyClip={this.copyClip}
          />
          <Footer />
        </div>
      </div>
    );
  }
}
