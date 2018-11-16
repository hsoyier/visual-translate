import React from "react";
import PropTypes from "prop-types";
import Lang from "./Lang";

const Definition = props => {
  return (
    <section className="search">
      <select onChange={props.handleTargetLang}>
        {props.supportedLanguages.map((lang, index) => {
          return <option value={lang.language}>{Lang[index]}</option>;
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
