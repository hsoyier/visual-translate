import React, { Component } from 'react';
import Header from './Header';
import Category from './Category';
import ArtistList from './ArtistList';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      link: '',
      icon: '',
      img: '',
      getApi: this.test()
    }   
  }
  getApi = async () => {
    // const api_key = "GMn5DyhINWapdOlqjorRx7HhEBXj4qCZ";
    // const artist_count = 100;
    // const search = "japan";
    // const data = await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}&limit=${artist_count}`);
    // if(data.status === 200) {
    //   const json = await data.json();
    //   console.log(json);
    // }
    return <Category />;
  }
  test = () => {
    return <Category />
  }

  render () {
    return (
      <div>
        {this.state.getApi}
        <Header />
        <ArtistList />
      </div>
    );
  }

}

export default Main;