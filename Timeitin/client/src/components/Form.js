import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormWrapper } from "./Styles/Form";
import { createUser } from "../actions";
import ColorPicker from "./ColorPicker";
import DateSelector from "./DatePicker";
import { TextField, Alert, AlertTitle, Collapse } from "@mui/material";
import Button from "../components/Button";

import "./Styles/Form.css";
import "./Styles/Form.js";

const Form = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    color: "rgba(84, 187, 255, 0.9)",
    pincode: "",
    birthdate: "",
    phonenumber: "",
  });
  const [errors, setErrors] = useState({});

  const [succesSubmition, setSuccessSubmition] = useState(false);
  const [colorPicker, setColorPicker] = useState(false);
  const dispatch = useDispatch();

  const validate = () => {
    let temp = {};
    temp.firstname = formValues.firstname ? "" : "Firstname is required";
    temp.lastname = formValues.lastname ? "" : "Lastname is required";
    temp.pincode = formValues.pincode ? "" : "Pincode is required";
    temp.birthdate = formValues.birthdate ? "" : "Date of birth is required";
    temp.phonenumber = formValues.phonenumber ? "" : "Phonenumber is required";
    setErrors({ ...temp });
    // use every() method to check if all requred fields are filled
    return Object.values(formValues).every((field) => field !== "");
  };

  const handleColorToggle = (e) => {
    e.preventDefault();
    setColorPicker(!colorPicker);
  };

  const handleColorPicker = (e) => {
    setFormValues({
      ...formValues,
      color: `rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`,
    });
  };

  const handleDateChange = (e) => {
    setFormValues({
      ...formValues,
      birthdate: e,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return console.log("Form contains invalid fields");
    }
    dispatch(createUser(formValues));
    setSuccessSubmition(true);
  };

  const clear = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <Collapse in={succesSubmition}>
        <Alert style={{ borderRadius: "2rem" }} severity="success">
          <AlertTitle>
            <strong>User has succesfully been created</strong>
          </AlertTitle>
        </Alert>
      </Collapse>

      <FormWrapper in={!succesSubmition}>
        <div className="user-icon">
          <div className="icon" style={{ backgroundColor: formValues.color }}>
            <h1>
              {formValues.firstname[0]} {formValues.lastname[0]}
            </h1>
          </div>
        </div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-row-1">
            <TextField
              name="firstName"
              variant="outlined"
              label="First Name"
              fullWidth
              style={{ margin: "20px" }}
              value={formValues.firstname}
              error={errors.firstname}
              helperText={errors.firstname}
              onChange={(e) =>
                setFormValues({ ...formValues, firstname: e.target.value })
              }
            />
          </div>
          <div className="form-row-2">
            <TextField
              name="lastName"
              variant="outlined"
              label="Last Name"
              fullWidth
              style={{ margin: "20px" }}
              value={formValues.lastname}
              error={errors.lastname}
              helperText={errors.lastname}
              onChange={(e) =>
                setFormValues({ ...formValues, lastname: e.target.value })
              }
            />
          </div>
          <div className="form-row-3">
            <div className="color-picker-title">
              <h3>Color:</h3>
              <button
                style={{ backgroundColor: formValues.color }}
                className="color-picker-toggle"
                onClick={handleColorToggle}
              ></button>
            </div>
            <div className="color-picker">
              <Collapse in={colorPicker} style={{ position: "absolute" }}>
                <ColorPicker handleColorPicker={handleColorPicker} />
              </Collapse>
            </div>
          </div>
          <div className="form-row-4">
            <TextField
              name="pincode"
              variant="outlined"
              label="Pincode"
              fullWidth
              style={{ margin: "20px" }}
              error={errors.pincode}
              helperText={errors.pincode}
              onChange={(e) =>
                setFormValues({ ...formValues, pincode: e.target.value })
              }
            />
          </div>

          <div className="form-row-5">
            <DateSelector
              style={{ margin: "20px" }}
              formValues={formValues}
              errors={errors}
              handleDateChange={handleDateChange}
              minDate={-100}
              maxDate={-10}
            />
          </div>
          <div className="form-row-6">
            <TextField
              name="phonernumber"
              variant="outlined"
              label="Phonenumber"
              fullWidth
              style={{ margin: "20px" }}
              value={formValues.phonenumber}
              error={errors.phonenumber}
              helperText={errors.phonenumber}
              onChange={(e) =>
                setFormValues({ ...formValues, phonenumber: e.target.value })
              }
            />
          </div>

          <div className="form-row-7">
            <div className="form-actions">
              <Button text="Submit"></Button>
              <Button
                text="Clear"
                bgColor="grey"
                link="/users"
                onClick={clear}
              ></Button>
              <Button text="Cancel" bgColor="red" link="/users"></Button>
            </div>
          </div>
        </form>
      </FormWrapper>
    </div>
  );
};

export default Form;
