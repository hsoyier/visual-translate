import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Giphys = (props) => {
  return (
    <div>
      <h3>{props.searchword}</h3>
      <ul className="giphy__list">
        {props.giphy_list.map(giphy => {
          return <li className="giphy__item" key={giphy.id}>
            <img src={giphy.images.fixed_width.url} alt={giphy.title} />
            <p>{giphy.title}</p>
            <button><Link to={{ 
              pathname: `/giphys/${giphy.id}`,
              state: { 
                giphy_id: giphy.id
              },
             }}>Link</Link></button>
          </li>;
        })};
      </ul>
    </div>
  );
}

Giphys.propTypes = {
  giphy_list: PropTypes.array,
  searchword: PropTypes.string
}

export default Giphys;