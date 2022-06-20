import React, { useState, useEffect } from "react";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="App">
      <SearchBar onSubmit={search} />
      <div className="video-content">
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
      </div>

      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
    </div>
  );
};
export default App;
