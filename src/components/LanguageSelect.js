import React from "react";

const LanguageSelect = props => {
  return (
    <section className="langSelect">
      <div className="langSelect__col">
        <select
          className="langSelect__select"
          onChange={props.handleSourceLang}
        >
          <option value="en">English</option>
          <option value="ja">Japanese</option>
          <option value="es">Spanish</option>
          {/* {props.supportedLanguages.map((lang, index) => {
            return (
              <option key={index} value={lang.language}>
                {Lang[index]}
              </option>
            );
          })} */}
        </select>
      </div>
      <div className="langSelect__col">
        <select
          className="langSelect__select"
          onChange={props.handleTargetLang}
        >
          <option value="ja">Japanese</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          {/* {props.supportedLanguages.map((lang, index) => {
            return (
              <option key={index} value={lang.language}>
                {Lang[index]}
              </option>
            );
          })} */}
        </select>
      </div>
    </section>
  );
};

export default LanguageSelect;
