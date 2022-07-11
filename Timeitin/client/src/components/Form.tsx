import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { FormWrapper } from "./Styles/Form";
import * as actions from "../actions";

import ColorPicker from "./ColorPicker";
import DateSelector from "./DatePicker";
import { FormControl, TextField, Alert, AlertTitle, Collapse, Paper } from "@mui/material";
import Button from "./Button";
import Modal from "./Modal";

import { ColorPickerProps, } from "../components/interfaces";

import "./Styles/Form.css";
import "./Styles/Form.ts";

const Form = () => {
  const dispatch = useDispatch();
  const { createUser } = bindActionCreators(actions, dispatch)
  const [succesSubmition, setSuccessSubmition] = useState(false);
  const [colorPicker, setColorPicker] = useState(false);
  const [formValues, setFormValues] = useState<{
    firstname: null | string,
    lastname: null | string,
    color: ColorPickerProps["selectedColor"],
    pincode: null | string,
    birthdate: null | Date,
    phonenumber: null | string,
  }>({ firstname: "", lastname: "", color: { r: 84, g: 187, b: 255, a: 0.9 }, pincode: "", birthdate: new Date(""), phonenumber: "" });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    pincode: "",
    birthdate: "",
    phonenumber: "",
  });

  const validate = () => {
    const date = formValues.birthdate.getDate()

    const firstnameError = formValues.firstname ? "" : "Firstname is required";
    const lastnameError = formValues.lastname ? "" : "Lastname is required";
    const pincodeError = formValues.pincode ? "" : "Pincode is required";
    const birthdateError = date ? "" : "Birthdate is required";
    const phonenumberError = formValues.phonenumber ? "" : "Phonenumber is required";

    setErrors({
      ...errors, firstname: firstnameError, lastname: lastnameError,
      pincode: pincodeError, birthdate: birthdateError, phonenumber: phonenumberError
    });


    return Object.values(formValues).every((field) => field !== null) && date;
  };

  const handleColorToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setColorPicker(!colorPicker);
  };

  const handleColorPicker = (color: ColorPickerProps["selectedColor"]) => {
    setFormValues({
      ...formValues,
      color: color,
    });
  };

  const handleDateChange = (date: Date | null) => {
    setFormValues({
      ...formValues,
      birthdate: date,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) {
      return console.log("Form contains invalid fields");
    }
    createUser(formValues);
    setSuccessSubmition(true);
  };

  const clear = () => {
    setFormValues({ firstname: "", lastname: "", color: { r: 84, g: 187, b: 255, a: 0.9 }, pincode: "", birthdate: null, phonenumber: "", });
  };

  const translatedColor = `rgba(${formValues.color.r}, ${formValues.color.g}, ${formValues.color.b}, ${formValues.color.a})`;

  return (
    <div className="container">
      <Collapse in={succesSubmition}>

        <Modal handleClose={setSuccessSubmition} show={succesSubmition} content={<>some Shit</>} />
        {/* <div className="succes-creation">
          <Alert style={{ borderRadius: "2rem" }} severity="success">
            <AlertTitle>
              <strong>User has succesfully been created</strong>
            </AlertTitle>
          </Alert>
          <div className="button-container">
            <Button
              text="Create another user"

              onClick={() => {
                setSuccessSubmition(!succesSubmition)
                clear()
              }} />
            <Button text="Undo" bgColor="red" onClick={clear} />
            <Button text="Overview" bgColor="green" link="/users" />
          </div>
        </div> */}

      </Collapse>


      <FormWrapper in={!succesSubmition}>
        <FormControl>
          <div className="user-icon">
            <div className="icon" style={{ backgroundColor: translatedColor }}>
              <h1>
                {formValues.firstname ? formValues.firstname[0] : ""}
                {formValues.lastname ? formValues.lastname[0] : ""}
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
                error={errors.firstname ? true : false}
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
                error={errors.lastname ? true : false}
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
                  style={{ backgroundColor: translatedColor }}
                  className="color-picker-toggle"
                  onClick={handleColorToggle}
                ></button>
              </div>
              <div className="color-picker">
                <Collapse in={colorPicker} style={{ position: "absolute" }}>
                  <ColorPicker
                    selectedColor={formValues.color}
                    handleColorPicker={handleColorPicker}
                  />
                </Collapse>
              </div>
            </div>
            <div className="form-row-4">
              <TextField
                name="pincode"
                variant="outlined"
                label="Pincode"
                fullWidth
                value={formValues.pincode}
                style={{ margin: "20px" }}
                error={errors.pincode ? true : false}
                helperText={errors.pincode}
                onChange={(e) =>
                  setFormValues({ ...formValues, pincode: e.target.value })
                }
              />
            </div>

            <div className="form-row-5">
              <DateSelector
                birthdate={formValues.birthdate}
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
                error={errors.phonenumber ? true : false}
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
                  type="button"
                  text="Clear"
                  bgColor="grey"
                  onClick={clear}
                ></Button>
                <Button text="Cancel" bgColor="red" link="/users"></Button>
              </div>
            </div>
          </form>
        </FormControl>
      </FormWrapper>
    </div>
  );
};

export default Form;
