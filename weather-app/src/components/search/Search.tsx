import * as React from "react";
import "./search.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISearchProps {}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  return (
    <div className="search-container">
      <div className="close">
        <span className="material-icons close-btn">close</span>
      </div>
      <div className="search__input">
        <div className="search">
          <span className="material-icons">search</span>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search location"
          />
        </div>
        <div className="search-btn">
          <button>Search</button>
        </div>
      </div>
      <div className="search__results">
        {[1, 2, 3].map((item) => {
          return (
            <div className="result-item" key={item}>
              <p>London</p>
              <span className="material-icons">navigate_next</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
