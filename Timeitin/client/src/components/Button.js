import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Button.css";

const Button = ({
  text,
  textColor = "black",
  bgColor = "rgba(84, 187, 255, 0.9)",
  bdColor = "none",
  link,
  onClick,
}) => {
  if (link) {
    return (
      <Link
        to={link}
        className="button"
        onClick={onClick}
        style={{
          color: textColor,
          background: bgColor,
          borderColor: bdColor,
        }}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <button
        className="button"
        onClick={onClick}
        style={{
          color: textColor,
          background: bgColor,
          borderColor: bdColor,
        }}
      >
        {text}
      </button>
    );
  }
};

export default Button;
