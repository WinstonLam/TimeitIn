import React from "react";

import { RgbaColorPicker } from "react-colorful";

interface ColorPickerProps {
  selectedColor: { r: number; g: number; b: number; a: number };
  handleColorPicker: (e: any) => void;
}

const ColorPicker = ({ selectedColor, handleColorPicker }: ColorPickerProps) => {
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
