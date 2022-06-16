import React from "react";
import "../styles/VideoDetail.css";

const VideoDetail = ({ video }) => {
  const link = "https://www.youtube.com/embed/";
  if (!video) {
    return <div></div>;
  }
  return (
    <div className="wrapper">
      <div className="ui embed">
        <iframe title="videoplayer" src={link + video.id.videoId}></iframe>
      </div>
      <div className="video-detail">
        <h2>{video.snippet.title}</h2> <br />
        {video.snippet.description}
      </div>
    </div>
  );
};

export default VideoDetail;
