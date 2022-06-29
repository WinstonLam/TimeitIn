import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import Modal from "../Modal";
import history from "../../history";
import _ from "lodash";

const StreamEdit = ({
  match,
  fetchStream,
  editStream,
  stream,
  currentUserId,
}) => {
  useEffect(() => {
    const streamId = match.params.id;
    fetchStream(streamId);
  }, [fetchStream, match]);

  const onSubmit = (formValues) => {
    editStream(match.params.id, formValues);
  };

  if (!stream) {
    return <div className="ui container">Loading...</div>;
  } else if (stream.userId !== currentUserId) {
    setTimeout(() => {
      history.push("/");
    }, 2500);
    return (
      <Modal
        title="Unauthorized action"
        content="You do not have the rights to edit this stream {'\n'} Redirecting to homepage..."
      />
    );
  }

  const initialValues = stream
    ? _.pick(stream, ["title", "description"])
    : null;

  return (
    <div className="ui container">
      <h3>Edit a Stream</h3>
      <StreamForm initialValues={initialValues} onSubmit={onSubmit} />
      {initialValues.title}
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

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
