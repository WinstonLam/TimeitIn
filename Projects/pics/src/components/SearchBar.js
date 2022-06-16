import React from "react";
import "../styles/SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui segment">
          <div className="title">
            <h1>Find your favorite stuff here!</h1>
          </div>
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <input
                type="text"
                value={this.state.term}
                onChange={(event) =>
                  this.setState({ term: event.target.value })
                }
                placeholder="Enter search term..."
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
