import * as React from "react";

interface ITranslateProps {
  translate: string;
}

const Translate = (props: ITranslateProps) => {
  return (
    <section className="translateForm ">
      <div className="translateForm__box translate">
        <p className="translateForm__text">{props.translate}</p>
      </div>
    </section>
  );
};

export default Translate;
