import * as React from "react";

interface IGiphy {
  id: string;
  images: any;
}

interface IGiphysProps {
  searchword: string;
  giphy_list: any;
  copyClipboard: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Giphys = (props: IGiphysProps) => {
  return (
    <main>
      <h3 className="searchword">{props.searchword}</h3>
      <ul className="giphy__list">
        {props.giphy_list.map((giphy: IGiphy, index: number) => {
          return (
            <li
              key={index}
              className="giphy__item"
              style={{
                backgroundImage: `url(
                    ${giphy.images && giphy.images.fixed_height.url}
                    )`
              }}
            >
              <button
                className="btn__copy fas fa-paperclip fa-lg"
                onClick={props.copyClipboard}
                name={giphy.images && giphy.images.original.url}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Giphys;
