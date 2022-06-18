import React, { useState } from "react";
import "./styles/App.css";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "test title",
    content: "this is test content",
  },
  {
    title: "test title",
    content: "this is test content",
  },
  {
    title: "test title",
    content: "this is test content",
  },
];

const options = [
  {
    label: "the color red",
    value: "red",
  },
  {
    label: "the color green",
    value: "green",
  },
  {
    label: "the color blue",
    value: "blue",
  },
];

function App() {
  const [selectedColor, setColor] = useState(options[0]);
  return (
    <div className="App">
      <Accordion items={items} />
      <Search />
      <Dropdown
        options={options}
        selected={selectedColor}
        OnColorChange={setColor}
      />
    </div>
  );
}

export default App;
