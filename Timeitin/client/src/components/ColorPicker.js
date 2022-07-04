import React from "react";

import { RgbaColorPicker } from "react-colorful";

const ColorPicker = ({ selectedColor, setSelectedColor }) => {
  return <RgbaColorPicker color={selectedColor} onChange={setSelectedColor} />;
};

export default ColorPicker;
