import React from "react";
import Youtube from "../api/Youtube";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSubmit = async (term) => {
    const response = await Youtube.get("search/", { params: { q: term } });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSubmit} />
        <div className="video-content">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>

        <div className="background-container">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
      </div>
    );
  }
}
export default App;
