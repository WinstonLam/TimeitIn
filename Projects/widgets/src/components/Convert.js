import React, { useState, useEffect } from "react";
import axios from "axios";
import { debounce } from "debounce";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  const doTranslation = async () => {
    const { data } = await axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
        },
      }
    );
    setTranslated(data.data.translations[0].translatedText);
  };

  const debounced = debounce(doTranslation, 500);

  useEffect(() => {
    debounced();

    return () => {
      debounced.clear();
    };
  }, [debounced, language, text]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
