import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID fWqXydgV09BrWhHDe4XTgVLhvDOlguj-TrYXKiR1qiY",
  },
});
