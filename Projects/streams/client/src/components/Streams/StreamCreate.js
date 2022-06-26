import React from "react";
import { Field, reduxForm } from "redux-form";

const StreamCreate = ({ handleSubmit }) => {
  const renderInput = (formProps) => {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input
          onChange={formProps.input.onChange}
          value={formProps.input.value}
          // alternatively use {...formProps.input}
        />
      </div>
    );
  };

  const onSubmit = (formValues) => {
    return;
  };

  return (
    <div className="ui container">
      <form onSubmit={handleSubmit(onSubmit)} className="ui form">
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

export default reduxForm({ form: "streamCreate" })(StreamCreate);
