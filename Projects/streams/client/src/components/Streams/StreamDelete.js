import React, { useEffect } from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream, fetchStreams } from "../../actions";
import { connect } from "react-redux";

const StreamDelete = ({
  match,
  deleteStream,
  fetchStream,
  stream,
  currentUserId,
}) => {
  useEffect(() => {
    const streamId = match.params.id;
    fetchStream(streamId);
  }, [fetchStream, match]);

  if (!stream) {
    return <div className="ui container">Loading...</div>;
  } else if (stream.userId !== currentUserId) {
    setTimeout(() => {
      history.push("/");
    }, 2500);
    return (
      <Modal
        title="Unauthorized action"
        content="You do not have the rights to delete this stream \n Redirecting to homepage..."
      />
    );
  }

  const onAccept = () => {
    deleteStream(stream.id);
    fetchStreams();
  };

  const onDismiss = () => {
    history.push("/");
  };

  const actions = (
    <React.Fragment>
      <button onClick={onAccept} className="ui button negative">
        Delete
      </button>
      <button onClick={onDismiss} className="ui primary button ">
        Cancel
      </button>
    </React.Fragment>
  );

  return (
    <div>
      <Modal
        title={`Delete Stream: ${stream.title}`}
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismis={onDismiss}
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
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
