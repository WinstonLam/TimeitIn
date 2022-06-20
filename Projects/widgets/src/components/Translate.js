import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const Translate = ({ options }) => {
  const [selectedLanguage, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        options={options}
        selected={selectedLanguage}
        OnSelectedChange={setLanguage}
      />{" "}
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={selectedLanguage} />
    </div>
  );
};

export default Translate;
