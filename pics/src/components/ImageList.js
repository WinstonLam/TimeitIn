import React from "react";
import "../styles/ImageList.css";
import ImageCard from "./ImageCard";

function ImageList(props) {
  const imagelist = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="images">{imagelist}</div>;
}

export default ImageList;
