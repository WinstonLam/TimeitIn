import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../actions";
import {
  TextField,
  Button,
  Paper,
  Alert,
  AlertTitle,
  Collapse,
} from "@mui/material";
import "../Styles/Form.css";

const Form = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    age: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [succesSubmition, setSuccessSubmition] = useState(false);
  const dispatch = useDispatch();

  const validate = () => {
    let temp = {};
    temp.firstname = formValues.firstname ? "" : "Firstname is required";
    temp.lastname = formValues.lastname ? "" : "Lastname is required";
    temp.age = formValues.age ? "" : "Age is required";
    temp.phone = formValues.phone ? "" : "Phone is required";
    setErrors({ ...temp });
    // use every() method to check if all requred fields are filled
    return Object.values(temp).every((field) => field !== "");
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
    <Paper style={{ padding: "30px", borderRadius: "2rem", width: "500px" }}>
      <Collapse in={succesSubmition}>
        <Alert style={{ borderRadius: "2rem" }} severity="success">
          <AlertTitle>
            <strong>User has succesfully been created</strong>
          </AlertTitle>
        </Alert>
      </Collapse>
      <Collapse in={!succesSubmition}>
        <form
          style={{
            padding: "5px",
            display: "flex",
            flexWrap: "wrap",
          }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          {/* <Typography variant="h6">
          {currentId ? `Editing "${post.title}"` : "Creating a Memory"}
        </Typography> */}

          <TextField
            name="firstName"
            variant="outlined"
            label="First Name"
            style={{ margin: "20px", width: "40%" }}
            value={formValues.firstname}
            error={errors.firstname}
            helperText={errors.firstname ? "First Name is required" : ""}
            onChange={(e) =>
              setFormValues({ ...formValues, firstname: e.target.value })
            }
          />
          <TextField
            name="lastName"
            variant="outlined"
            label="Last Name"
            style={{ margin: "20px", width: "40%" }}
            value={formValues.lastname}
            error={errors.lastname}
            helperText={errors.lastname ? "Last Name is required" : ""}
            onChange={(e) =>
              setFormValues({ ...formValues, lastname: e.target.value })
            }
          />
          <TextField
            name="age"
            variant="outlined"
            label="Age"
            fullWidth
            style={{ margin: "20px" }}
            error={errors.age}
            helperText={errors.age ? "Age is required" : ""}
            onChange={(e) =>
              setFormValues({ ...formValues, age: e.target.value })
            }
          />
          <TextField
            name="phone"
            variant="outlined"
            label="Phone Number"
            fullWidth
            style={{ margin: "20px" }}
            value={formValues.phone}
            error={errors.phone}
            helperText={errors.phone ? "Phone is required" : ""}
            onChange={(e) =>
              setFormValues({ ...formValues, phone: e.target.value })
            }
          />
          <div className="actionsWrapper">
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
      </Collapse>
    </Paper>
  );
};

export default Form;
