import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Button.css";
import { ButtonProps } from "./interfaces";

const Button = ({
  text,
  textColor = "black",
  bgColor = "rgba(84, 187, 255, 0.9)",
  bdColor = "none",
  link,
  onClick,
  height = "50px",
  width = "150px",
  type,
}: ButtonProps) => {
  if (link) {
    return (
      <Link
        type={type}
        to={link}
        className="button"
        onClick={onClick}
        style={{
          color: textColor,
          background: bgColor,
          borderColor: bdColor,
          height: height,
          width: width,
        }}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <button
        type={type}
        className="button"
        onClick={onClick}
        style={{
          color: textColor,
          background: bgColor,
          borderColor: bdColor,
          height: height,
          width: width,
        }}
      >
        {text}
      </button>
    );
  }
};

export default Button;
