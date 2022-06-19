import React, { useState } from "react";
import "./styles/App.css";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import data from "./data";

const { items, colors, languages } = data;

function App() {
  const [selectedColor, setColor] = useState(colors[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="App">
      {/* <Accordion items={items} />
      <Search />  
      <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          label="Select a color"
          options={colors}
          selected={selectedColor}
          OnSelectedChange={setColor}
        />
      ) : 

      null} */}
      <Translate options={languages} />
    </div>
  );
}

export default App;
