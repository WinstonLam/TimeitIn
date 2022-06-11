import "./LoadingDisplay.css";
import React from "react";

const LoadingDisplay = (props) => {
  return (
    <div className="loading-display">
      <h1>{props.message}</h1>
      <div class="ui large active inline inverted loader"></div>
    </div>
  );
};

LoadingDisplay.defaultProps = {
  message: "Loading",
};

export default LoadingDisplay;
