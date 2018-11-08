import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Giphys = (props) => {
  return (
    <main>
      <h3 className="giphy__title">{props.searchword}</h3>
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
    </main>
  );
}

Giphys.propTypes = {
  giphy_list: PropTypes.array,
  searchword: PropTypes.string
}

export default Giphys;