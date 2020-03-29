import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  slectSong = () => {};
  renderSongList = () => {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <div
              className="ui button"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </div>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  render() {
    return (
      console.log(this.props),
      (<div className="ui aligned divided list">{this.renderSongList()}</div>)
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { selectSong })(SongList);
