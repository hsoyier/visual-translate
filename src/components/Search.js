import React from "react";
import PropTypes from "prop-types";
import Lang from "./Lang";

const Search = props => {
  return (
    <section className="translateBox">
      <div className="searchForm">
        <select onChange={props.handleSourceLang}>
          {props.supportedLanguages.map((lang, index) => {
            return (
              <option key={index} value={lang.language}>
                {Lang[index]}
              </option>
            );
          })}
        </select>
        <input
          onChange={props.searchGiphy}
          className="searchForm__input"
          type="text"
          placeholder="Search the word"
        />
      </div>
    </section>
  );
};

Search.propTypes = {
  searchGiphy: PropTypes.func
};

export default Search;
