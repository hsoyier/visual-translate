import React from "react";
import PropTypes from "prop-types";

const Definition = props => {
  return (
    <section className="search">
      <select onChange={props.handleTargetLang}>
        {props.supportedLanguages.map(lang => {
          return <option value={lang.language}>{lang.language}</option>;
        })}
      </select>
      <div className="targetLang-box">
        <p className="targetLang-box__text">{props.definitions}</p>
      </div>
    </section>
  );
};

Definition.propTypes = {
  message: PropTypes.string,
  definitions: PropTypes.array
};

export default Definition;
