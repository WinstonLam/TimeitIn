import React from "react";

import { RgbaColorPicker } from "react-colorful";

const ColorPicker = ({ selectedColor, handleColorPicker }) => {
  return (
    <RgbaColorPicker
      color={selectedColor}
      onChange={(e) => {
        handleColorPicker(e);
      }}
    />
  );
};

export default ColorPicker;
