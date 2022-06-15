import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Unsplash from "../api/Unsplash";
import "../styles/App.css";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await Unsplash.get("search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
