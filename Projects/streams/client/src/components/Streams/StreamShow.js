import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamShow = ({ fetchStream, stream, match }) => {
  useEffect(() => {
    const streamId = match.params.id;
    fetchStream(streamId);
  }, [fetchStream, match]);

  if (!stream) {
    return <div className="ui container">Loading...</div>;
  }

  return (
    <div className="ui container">
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const streamId = ownProps.match.params.id;
  return { stream: state.streams[streamId] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
