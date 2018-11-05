import React from 'react';
import PropTypes from 'prop-types';

const Giphys = (props) => {
  return (
    <ul className="giphy__list">
      {props.giphy_list.map(giphy => {
        return <li className="giphy__item" key={giphy.id}>
          <p>@{giphy.username}</p>
          <img src={giphy.images.original.url} alt={giphy.title} className="" />
          <p>{giphy.title}</p>
        </li>;
      })};
    </ul>
  );
}

Giphys.prototype = {
  giphy_list: PropTypes.array
}

export default Giphys;