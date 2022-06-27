import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

const StreamList = ({ fetchStreams, streams }) => {
  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);

  const renderedList = streams.map((stream) => {
    return (
      <div key={stream.id} className="item">
        <i className="large middle aligned icon camera" />
        <div className="content">{stream.title}</div>
        <div className="description">{stream.description}</div>
      </div>
    );
  });

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list"> {renderedList}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
