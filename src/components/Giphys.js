import React from "react";
import PropTypes from "prop-types";

const Giphys = props => {
  return (
    <main>
      <h3 className="searchword">{props.searchword}</h3>
      <ul className="giphy__list">
        {props.giphy_list.map(giphy => {
          return (
            <li
              className="giphy__item"
              key={giphy.id}
              style={{
                backgroundImage: `url(
                  ${giphy.images.fixed_height.url}
                  )`
              }}
            >
              <button
                key={giphy.id}
                className="btn__copy"
                onClick={props.copyClipboard}
                name={giphy.images.original.url}
              >
                <i className="fas fa-paperclip fa-lg" />
              </button>
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
