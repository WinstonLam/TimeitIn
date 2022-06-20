import { useState } from "react";
import Youtube from "../api/Youtube";

const useVideos = () => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    const response = await Youtube.get("search/", { params: { q: term } });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
