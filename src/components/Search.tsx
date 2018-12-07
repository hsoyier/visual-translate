import React from "react";
import PropTypes from "prop-types";

const Search = props => {
  return (
    <section className="translateForm">
      <textarea
        onChange={props.searchGiphy}
        className="translateForm__box select"
        type="text"
        placeholder="Search the word"
      />
    </section>
  );
};

Search.propTypes = {
  searchGiphy: PropTypes.func
};

export default Search;
