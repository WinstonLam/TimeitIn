import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  return (
    <div>
      Title: {selectedSong ? selectedSong.title : ""}
      <br />
      Length: {selectedSong ? selectedSong.duration : ""}{" "}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
