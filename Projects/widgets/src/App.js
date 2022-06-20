import React, { useState } from "react";
import "./styles/App.css";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import data from "./data";
import Route from "./components/route";
import Header from "./components/Header";
const { items, colors, languages } = data;

function App() {
  const [selectedColor, setColor] = useState(colors[0]);

  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />;
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          selected={selectedColor}
          options={colors}
          OnSelectedChange={setColor}
        />
      </Route>
      <Route path="/translate">
        <Translate options={languages} />
      </Route>
    </div>
  );
}

export default App;
