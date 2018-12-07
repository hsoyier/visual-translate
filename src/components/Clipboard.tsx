import * as React from "react";

interface ICopyMessageProps {
  isCopiedSuccess: boolean;
  giphy_image: string;
}

const copyMessage = "Link copied to clipboard";

const CopyMessage = (props: ICopyMessageProps) => {
  if (props.isCopiedSuccess) {
    return (
      <div className="clipboard">
        <div className="clipboard-inner">
          <p className="clipboard__text">{copyMessage}</p>
          <div
            className="clipboard__image"
            style={{
              backgroundImage: `url(
                  ${props.giphy_image}
                  )`
            }}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CopyMessage;
