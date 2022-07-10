import React from "react";
import { RgbaColorPicker } from "react-colorful";
import { ColorPickerProps } from "./interfaces";

const ColorPicker = ({
  selectedColor,
  handleColorPicker,
}: ColorPickerProps) => {
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
