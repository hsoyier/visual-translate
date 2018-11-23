import React from "react";

const LanguageSelect = props => {
  return (
    <section className="langSelect">
      <div className="langSelect__col">
        <select
          className="langSelect__select"
          onChange={props.handleSourceLang}
        >
          <option value="">from</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="zh">Chinese</option>
          <option value="ru">Russian</option>
          <option value="ar">Arabic</option>
          <option value="nl">Dutch</option>
          <option value="de">German</option>
          <option value="ja">Japanese</option>
          <option value="id">Indonesian</option>
          <option value="it">Italian</option>
          <option value="ko">Korean</option>
          <option value="pl">Polish</option>
          <option value="th">Thai</option>
          <option value="tr">Turkish</option>

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
          <option value="">to</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="zh">Chinese</option>
          <option value="ru">Russian</option>
          <option value="ar">Arabic</option>
          <option value="nl">Dutch</option>
          <option value="de">German</option>
          <option value="ja">Japanese</option>
          <option value="id">Indonesian</option>
          <option value="it">Italian</option>
          <option value="ko">Korean</option>
          <option value="pl">Polish</option>
          <option value="th">Thai</option>
          <option value="tr">Turkish</option>
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
