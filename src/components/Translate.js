import React from "react";
import PropTypes from "prop-types";
import Lang from "./Lang";

const Translate = props => {
  return (
    <section className="translateBox">
      <select onChange={props.handleTargetLang}>
        {props.supportedLanguages.map((lang, index) => {
          return (
            <option key={index} value={lang.language}>
              {Lang[index]}
            </option>
          );
        })}
      </select>
      <div className="translateForm">
        <p className="translateForm__text">{props.translate}</p>
      </div>
    </section>
  );
};

Translate.propTypes = {
  message: PropTypes.string,
  definitions: PropTypes.string
};

export default Translate;
