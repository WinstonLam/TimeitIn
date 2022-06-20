import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  return (
    <div className="ui container">
      <div className="ui segment">
        <div className="title">
          <h1>Find your favorite video here!</h1>
        </div>
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <input
              type="text"
              value={term}
              onChange={(event) => setTerm(event.target.value)}
              placeholder="Enter search term..."
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
