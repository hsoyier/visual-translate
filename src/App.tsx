import * as React from "react";
import "./App.scss";
import Clipboard from "./components/Clipboard";
import Footer from "./components/Footer";
import Giphys from "./components/Giphys";
import Header from "./components/Header";
import LanguageSelect from "./components/LanguageSelect";
import Search from "./components/Search";
import Translate from "./components/Translate";

const API_KEY_GIPHY = "GMn5DyhINWapdOlqjorRx7HhEBXj4qCZ";
const API_KEY_GOOGLE_TRANSLATE = "AIzaSyCWGqzdzr8-hC9ADWYSBfuEPltHUIrekj4";
const GIPHY_COUNT = 8;

interface IState {
  giphy_image: string;
  giphy_list: [string];
  isCopiedSuccess: boolean;
  searchword: string;
  sourceLang: string;
  targetLang: string;
  translate: string;
}

interface IsearchTranslate {
  searchword: string;
  sourceLang: string;
  targetLang: string;
}

export default class App extends React.Component<{}, IState> {
  state: IState = {
    giphy_image: "",
    giphy_list: [""],
    isCopiedSuccess: false,
    searchword: "",
    sourceLang: "en",
    targetLang: "fr",
    translate: ""
  };

  componentWillMount() {
    this.getApi();
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     giphy_list: [],
  //     searchword: "",
  //     translate: "",
  //     sourceLang: "en",
  //     targetLang: "fr",
  //     isCopiedSuccess: false,
  //     giphy_image: ""
  //   };
  //   this.getApi();
  // }
  searchTranslate = async (
    searchword: IsearchTranslate["searchword"],
    sourceLang: IsearchTranslate["sourceLang"],
    targetLang: IsearchTranslate["targetLang"]
  ) => {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?q=${searchword}&source=${sourceLang}&target=${targetLang}&key=${API_KEY_GOOGLE_TRANSLATE}`
    );
    if (response.status === 200) {
      const json = await response.json();
      const translatedText = await json.data.translations[0].translatedText;
      this.setState({
        translate: translatedText
      });
    }
  };
  getApi = async () => {
    const apiCall = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY_GIPHY}&limit=${GIPHY_COUNT}`
    );
    const json = await apiCall.json();
    this.setState({
      giphy_list: json.data
    });
  };
  searchGiphy = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const search = e.currentTarget.value;
    this.searchTranslate(search, this.state.sourceLang, this.state.targetLang);
    const apiCall = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY_GIPHY}&limit=${GIPHY_COUNT}`
    );
    const json = await apiCall.json();
    this.setState({
      giphy_list: json.data,
      searchword: search
    });
  };
  handleSourceLang = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const sourceLang = e.currentTarget.value;
    this.setState({
      sourceLang
    });
    this.searchTranslate(
      this.state.searchword,
      sourceLang,
      this.state.targetLang
    );
  };
  handleTargetLang = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const targetLang = e.currentTarget.value;
    this.setState({
      targetLang
    });
    this.searchTranslate(
      this.state.searchword,
      this.state.sourceLang,
      targetLang
    );
  };
  copyClipboard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.createElement("textarea");
    el.value = e.currentTarget.name;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    this.setState({
      giphy_image: el.value,
      isCopiedSuccess: true
    });
    setTimeout(() => {
      this.setState({ isCopiedSuccess: false });
    }, 60000);
  };
  render() {
    const {
      giphy_list,
      searchword,
      translate,
      isCopiedSuccess,
      giphy_image
    } = this.state;
    return (
      <div className="wrapper">
        <Clipboard
          isCopiedSuccess={isCopiedSuccess}
          giphy_image={giphy_image}
        />
        <div className="container">
          <Header />
          <LanguageSelect
            handleSourceLang={this.handleSourceLang}
            handleTargetLang={this.handleTargetLang}
          />
          <div className="translateCol">
            <Search searchGiphy={this.searchGiphy} />
            <Translate translate={translate} />
          </div>
          <Giphys
            giphy_list={giphy_list}
            searchword={searchword}
            copyClipboard={this.copyClipboard}
          />
          <Footer />
        </div>
      </div>
    );
  }
}
