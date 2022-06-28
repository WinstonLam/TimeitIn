import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamCreate = ({ createStream }) => {
  const onSubmit = (formValues) => {
    createStream(formValues);
  };

  return (
    <div className="ui container">
      <h3>Create a stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { createStream })(StreamCreate);
