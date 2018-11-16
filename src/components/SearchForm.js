import React from "react";
import PropTypes from "prop-types";
import Lang from "./Lang";

const SearchForm = props => {
  return (
    <section className="search">
      <div className="searchForm">
        <select onChange={props.handleSourceLang}>
          {props.supportedLanguages.map((lang, index) => {
            return <option value={lang.language}>{Lang[index]}</option>;
          })}
        </select>
        <input
          onChange={props.searchGiphy}
          className="search-input"
          type="text"
          placeholder="Search the word"
        />
      </div>
    </section>
  );
};

SearchForm.propTypes = {
  searchGiphy: PropTypes.func
};

export default SearchForm;
