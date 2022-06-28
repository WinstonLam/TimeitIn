import React from "react";
import { Field, reduxForm } from "redux-form";

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

const StreamForm = ({ onSubmit, handleSubmit }) => {
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

export default reduxForm({
  form: "streamForm",
  validate: validate,
  enableReinitialize: true,
})(StreamForm);
