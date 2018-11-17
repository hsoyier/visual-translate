import React from "react";
import PropTypes from "prop-types";

const Giphys = props => {
  return (
    <main>
      <h3 className="searchword">{props.searchword}</h3>
      <ul className="giphy__list">
        {props.giphy_list.map(giphy => {
          return (
            <li className="giphy__item" key={giphy.id}>
              <img src={giphy.images.fixed_width.url} alt={giphy.title} />
              <p className="giphy__title">{giphy.title}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

Giphys.propTypes = {
  giphy_list: PropTypes.array,
  searchword: PropTypes.string
};

export default Giphys;
