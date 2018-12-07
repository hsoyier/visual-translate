import * as React from "react";

interface ILanguageSelectProps {
  handleSourceLang: (
    event: React.SyntheticEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  handleTargetLang: (
    event: React.SyntheticEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
}

const LanguageSelect = (props: ILanguageSelectProps) => {
  return (
    <section className="langSelect">
      <div className="langSelect__col">
        <select
          className="langSelect__select"
          onChange={props.handleSourceLang}
        >
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
        </select>
      </div>
      <div className="langSelect__col">
        <select
          className="langSelect__select"
          onChange={props.handleTargetLang}
        >
          <option value="fr">French</option>
          <option value="es">Spanish</option>
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
          <option value="en">English</option>
        </select>
      </div>
    </section>
  );
};

export default LanguageSelect;
