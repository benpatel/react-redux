import React from "react";
import SongList from "./SongList";
import SelectedSong from "./SelectedSong";

const App = () => {
  return (
    <div className="ui container">
      <p>Welcome To React</p>
      <SelectedSong></SelectedSong>
      <SongList></SongList>
    </div>
  );
};
export default App;
