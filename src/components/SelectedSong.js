import React from "react";
import { connect } from "react-redux";

const SelectedSoong = props => {
  return (
    <div>
      {props.selectedSong ? <p>{props.song.title}</p> : "No Song Selected"}
    </div>
  );
};
const mapStateToProps = state => {
  return state.selectedSong;
};
export default connect(mapStateToProps)(SelectedSoong);
