import { combineReducers } from "redux";

const songListReducer = () => {
  return [
    { title: "song 1", duration: "4:05" },
    { title: "song 2", duration: "5:05" },
    { title: "song 3", duration: "1:05" },
    { title: "song 4", duration: "10:05" }
  ];
};

const selectedSongReucer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songListReducer,
  selectedSong: selectedSongReucer
});
