import React from "react";
import PropTypes from "prop-types";

const Translate = props => {
  return (
    <section className="translateForm ">
      <div className="translateForm__box translate">
        <p className="translateForm__text">{props.translate}</p>
      </div>
    </section>
  );
};

Translate.propTypes = {
  translate: PropTypes.string
};

export default Translate;
