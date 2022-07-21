import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { FormWrapper } from "./Styles/Form";
import * as actions from "../actions";
import ColorPicker from "./ColorPicker";
import DateSelector from "./DatePicker";
import { FormControl, TextField, Collapse, Select, MenuItem, InputLabel, FormHelperText } from "@mui/material";
import Button from "./Button";
import UserCreationModal from "./UserCreationModal";

import { ColorPickerProps, UserCreationFormProps, UserCreationFormErros } from "./interfaces";

import "./Styles/UserForm.css";
import "./Styles/Form.ts";

const Form = () => {
  const dispatch = useDispatch();
  const { createUser } = bindActionCreators(actions, dispatch);
  const [succesSubmition, setSuccessSubmition] = useState(false);
  const [colorPicker, setColorPicker] = useState(false);
  const [formValues, setFormValues] = useState<UserCreationFormProps>({
    firstname: "",
    lastname: "",
    color: { r: 84, g: 187, b: 255, a: 0.9 },
    pincode: "",
    birthdate: new Date(""),
    function: "",
    phonenumber: "",
  });
  const [errors, setErrors] = useState<UserCreationFormErros>({
    firstnameError: "",
    lastnameError: "",
    pincodeError: "",
    birthdateError: "",
    functionError: "",
    phonenumberError: "",
  });

  // for now hardcoded will be adjusted later
  const functions = ["Manager", "Delivery", "Kitchen", "Bar", "Waiter"];


  const validate = () => {
    const date = formValues.birthdate.getDate();

    const newErrors: UserCreationFormErros = {
      firstnameError: !formValues.firstname && "Firstname is required",
      lastnameError: !formValues.lastname && "Lastname is required",
      pincodeError: !formValues.pincode && "Pincode is required",
      birthdateError: !date && "Birthdate is required",
      functionError: !formValues.function && "Function is required",
      phonenumberError: !formValues.phonenumber && "Phonenumber is required"
    }
    setErrors(newErrors);
    return Object.values(formValues).every((field) => field !== "") && date;
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
    setFormValues({
      firstname: "",
      lastname: "",
      color: { r: 84, g: 187, b: 255, a: 0.9 },
      pincode: "",
      birthdate: null,
      function: "",
      phonenumber: "",
    });
  };

  const translatedColor = `rgba(${formValues.color.r}, ${formValues.color.g}, ${formValues.color.b}, ${formValues.color.a})`;

  return (
    <div className="container">
      <UserCreationModal
        succesSubmition={succesSubmition}
        setSuccessSubmition={setSuccessSubmition}
        clear={clear}
      />

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
          <form className="user-form" autoComplete="off" onSubmit={handleSubmit}>
            <div className="user-form-row-1">
              <TextField
                name="firstName"
                variant="outlined"
                label="First Name"
                fullWidth
                style={{ margin: "20px" }}
                value={formValues.firstname}
                error={errors.firstnameError ? true : false}
                helperText={errors.firstnameError}
                onChange={(e) =>
                  setFormValues({ ...formValues, firstname: e.target.value })
                }
              />
            </div>
            <div className="user-form-row-2">
              <TextField
                name="lastName"
                variant="outlined"
                label="Last Name"
                fullWidth
                style={{ margin: "20px" }}
                value={formValues.lastname}
                error={errors.lastnameError ? true : false}
                helperText={errors.lastnameError}
                onChange={(e) =>
                  setFormValues({ ...formValues, lastname: e.target.value })
                }
              />
            </div>
            <div className="user-form-row-3">
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
            <div className="user-form-row-4">
              <TextField
                name="pincode"
                variant="outlined"
                label="Pincode"
                fullWidth
                value={formValues.pincode}
                style={{ margin: "20px" }}
                error={errors.pincodeError ? true : false}
                helperText={errors.pincodeError}
                onChange={(e) =>
                  setFormValues({ ...formValues, pincode: e.target.value })
                }
              />
            </div>

            <div className="user-form-row-5">
              <FormControl fullWidth
                style={{ margin: "20px" }}
                error={errors.functionError ? true : false}>
                <InputLabel >Function</InputLabel>
                <Select
                  value={formValues.function}
                  label="Function"
                  onChange={(e) => setFormValues({ ...formValues, function: e.target.value })}
                >
                  {functions.map((func) => (<MenuItem key={func} value={func}>{func}</MenuItem>))}

                </Select>
                <FormHelperText>{errors.functionError && (errors.functionError)}</FormHelperText>
              </FormControl>
            </div>
            <div className="user-form-row-6">
              <DateSelector
                birthdate={formValues.birthdate}
                errors={errors}
                handleDateChange={handleDateChange}
                minDate={-100}
                maxDate={-10}
              />
            </div>
            <div className="user-form-row-7">
              <TextField
                name="phonernumber"
                variant="outlined"
                label="Phonenumber"
                fullWidth
                style={{ margin: "20px" }}
                value={formValues.phonenumber}
                error={errors.phonenumberError ? true : false}
                helperText={errors.phonenumberError}
                onChange={(e) =>
                  setFormValues({ ...formValues, phonenumber: e.target.value })
                }
              />
            </div>

            <div className="user-form-row-8">
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
