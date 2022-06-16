import axios from "axios";

const KEY = "AIzaSyCWaWH--oAQV1FYuWOpjjjY8ddLvq3lw7E";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
