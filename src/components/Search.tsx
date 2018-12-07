import * as React from "react";

interface ISearchProps {
  searchGiphy: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Search = (props: ISearchProps) => {
  return (
    <section className="translateForm">
      <textarea
        onChange={props.searchGiphy}
        className="translateForm__box select"
        // type="text"
        placeholder="Search the word"
      />
    </section>
  );
};

export default Search;
