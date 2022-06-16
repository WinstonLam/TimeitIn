import React from "react";
import VideoItem from "./VideoItem";
import "../styles/VideoList.css";

function VideoList({ videos, onVideoSelect }) {
  const videoslist = videos.map((video) => {
    console.log(video);
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <div className="videolist">{videoslist}</div>;
}

export default VideoList;
