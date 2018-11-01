import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Giphy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphy_array: "",
      tag_array: ["test1", "test2", "test3"],
      tag: ""
    }
    this.getApi();
  }
  addTag = (e) => {
    e.preventDefault();
    const { tag_array } = this.state;
    const newArray = this.newArray.value;

    this.setState({
      tag_array: [...tag_array, newArray]
    })

    this.addForm.reset();
  }
  getApi = async (e) => {
    const api_key = "GMn5DyhINWapdOlqjorRx7HhEBXj4qCZ";
    // const artist_count = 100;
    // const search = "japan";
    // const data = await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}&limit=${artist_count}`);
    const data = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=50`);
    //  console.log(data);
    if(data.status === 200) {
      const json = await data.json();
      // console.log(json);
      const giphys = [];
      json.data.sort((a, b) => {
        return (a.title > b.title ? 1 : -1);
      });
      json.data.forEach(giphy => {
        // console.log(json.data);
        giphys.push(
            <li key={giphy.id} className="giphy__item">
              <p>@{giphy.username}</p>
              <p>{giphy.title}</p>
              <img src={giphy.images.original.url} alt="" className="" />
            </li>
        );
      });
      this.setState({
        giphy_array: giphys
      })
    } else {
      console.log(e);
    }
  }
 
  render () {
    const {giphy_array, tag_array} = this.state;
    return (
      <main>
        <form ref={input => this.addForm = input} onSubmit={this.addTag}>
          <input ref={input => this.newArray = input} type="text" placeholder="New tag?" />
          <button type="submit">Add</button>
        </form>
        {tag_array}
        <ul className="giphy__list">
         {giphy_array}
        </ul>
      </main>
    );
  }

}

// Giphy.defaultProps = {
//   name: 'Stranger'
// };

// Giphy.propTypes = {
//   name: PropTypes.string
// };

export default Giphy;