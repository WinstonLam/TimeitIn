import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

const StreamCreate = ({ handleSubmit, createStream }) => {
  const renderError = ({ error, touched }) => {
    console.log(touched);
    if (touched && error) {
      console.log(error);
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = (formProps) => {
    return (
      <div
        className={`field ${
          formProps.meta.error && formProps.meta.touched ? "error" : ""
        } `}
      >
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        {renderError(formProps.meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    createStream(formValues);
  };

  return (
    <div className="ui container">
      <form onSubmit={handleSubmit(onSubmit)} className="ui form error">
        <Field name="title" component={renderInput} label="Enter Title" />
        <Field
          name="description"
          component={renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Title required";
  }

  if (!formValues.description) {
    errors.description = "Description required";
  }

  return errors;
};

const formWrapped = reduxForm({ form: "streamCreate", validate: validate })(
  StreamCreate
);

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { createStream })(formWrapped);
