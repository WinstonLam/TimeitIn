import React from "react";
import "../styles/VideoItem.css";

function VideoItem({ video, onVideoSelect }) {
  return (
    <div className="video-item" onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <h1>{video.snippet.title}</h1>
    </div>
  );
}

export default VideoItem;
