import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormWrapper } from "./Styles/Form";
import { createUser } from "../actions";
import ColorPicker from "./ColorPicker";
import { TextField, Button, Alert, AlertTitle, Collapse } from "@mui/material";

import "./Styles/Form.css";
import "./Styles/Form.js";

const Form = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    pincode: "",
    birthdate: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [selectedColor, setSelectedColor] = useState({
    r: 84,
    g: 187,
    b: 255,
    a: 0.9,
  });
  const [succesSubmition, setSuccessSubmition] = useState(false);
  const [colorPicker, setColorPicker] = useState(false);
  const dispatch = useDispatch();

  const validate = () => {
    let temp = {};
    temp.firstname = formValues.firstname ? "" : "Firstname is required";
    temp.lastname = formValues.lastname ? "" : "Lastname is required";
    temp.pincode = formValues.pincode ? "" : "Pincode is required";
    temp.birthdate = formValues.birthdate ? "" : "Age is required";
    temp.phone = formValues.phone ? "" : "Phone is required";
    setErrors({ ...temp });
    // use every() method to check if all requred fields are filled
    console.log(Object.values(temp).every((field) => field !== ""));
    return Object.values(temp).every((field) => field !== "");
  };

  const handleColorToggle = (e) => {
    e.preventDefault();
    setColorPicker(!colorPicker);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      return console.log("Form contains invalid fields");
    }
    dispatch(createUser(formValues));
    setSuccessSubmition(true);
    return <div>User created</div>;
  };
  const clear = () => {};

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
          <div
            className="icon"
            style={{
              backgroundColor: `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, ${selectedColor.a}
              )`,
            }}
          >
            <h1>
              {formValues.firstname[0]} {formValues.lastname[0]}
            </h1>
          </div>
        </div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          {/* <Typography variant="h6">
          {currentId ? `Editing "${post.title}"` : "Creating a Memory"}
        </Typography> */}
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
                style={{
                  backgroundColor: `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, ${selectedColor.a}
                  )`,
                }}
                className="color-picker-toggle"
                onClick={handleColorToggle}
              ></button>
            </div>
            <div className="color-picker">
              <Collapse in={colorPicker} style={{ position: "absolute" }}>
                <ColorPicker
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
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
              style={{ margin: "20px" }}
              error={errors.pincode}
              helperText={errors.pincode}
              onChange={(e) =>
                setFormValues({ ...formValues, pincode: e.target.value })
              }
            />
          </div>
          <div className="form-row-5">
            <TextField
              name="birthdate"
              variant="outlined"
              label="Birth Date"
              fullWidth
              style={{ margin: "20px" }}
              value={formValues.birthdate}
              error={errors.birthdate}
              helperText={errors.birthdate}
              onChange={(e) =>
                setFormValues({ ...formValues, birthdate: e.target.value })
              }
            />
          </div>
          <div className="form-row-6">
            <TextField
              name="phonenumber"
              variant="outlined"
              label="Phonenumber"
              fullWidth
              style={{ margin: "20px" }}
              value={formValues.phone}
              error={errors.phone}
              helperText={errors.phone}
              onChange={(e) =>
                setFormValues({ ...formValues, phone: e.target.value })
              }
            />
          </div>

          <div className="form-row-7">
            <div className="actions">
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
              >
                Submit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={clear}
              >
                Clear
              </Button>
            </div>
          </div>
        </form>
      </FormWrapper>
    </div>
  );
};

export default Form;
