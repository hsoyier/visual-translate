import React from "react";

const copyMessage = "Link copied to clipboard";

const CopyMessage = props => {
  if (props.isCopiedSuccess) {
    return (
      <div className="copyMessage">
        <p className="copyMessage__text">{copyMessage}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default CopyMessage;
