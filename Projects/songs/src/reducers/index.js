import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Sicko Mode", duration: "3.35" },
    { title: "Astroworld", duration: "3.55" },
    { title: "Gods Plan", duration: "5.35" },
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
});
