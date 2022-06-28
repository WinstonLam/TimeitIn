import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = ({ stream, fetchStream, streamId }) => {
  useEffect(() => {
    fetchStream(streamId);
  }, []);
  console.log(stream);
  const onSubmit = (formValues) => {};

  return (
    <div className="ui container">
      <h3>Edit a Stream</h3>
      <StreamForm
        initialValues={{ title: stream.title, description: stream.description }}
        onSubmit={onSubmit}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const streamId = ownProps.match.params.id;
  return {
    streamId: streamId,
    stream: state.streams[streamId],
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
