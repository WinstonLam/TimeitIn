import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { FormWrapper } from "./Styles/Form";
import * as actions from "../actions";
import { FormControl, TextField } from "@mui/material";
import Button from "./Button";
import UserCreationModal from "./UserCreationModal";

import "./Styles/AdminSetup.css";
import "./Styles/Form.ts";

const AdminSetup = () => {
    const dispatch = useDispatch();
    const { createAdmin } = bindActionCreators(actions, dispatch);
    const [succesSubmition, setSuccessSubmition] = useState(false);
    const [pincode, setPincode] = useState("");
    const [error, setError] = useState("");


    const validate = () => {
        if (pincode.length !== 4) {
            setError("Pincode must be 4 digits");
            return false;
        }
    };


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!validate()) {
            return console.log("Form contains invalid fields");
        }
        // createAdmin(pincode);
        setSuccessSubmition(true);
    };

    const clear = () => {
        setPincode("");
    };

    return (
        <div className="container">
            <UserCreationModal
                succesSubmition={succesSubmition}
                setSuccessSubmition={setSuccessSubmition}
                clear={clear}
            />

            <FormWrapper in={!succesSubmition}>
                <FormControl>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <div className="form-row-1">
                            <p>Fill in the required fields</p>
                        </div>
                        <div className="form-row-2">
                            <TextField
                                name="pincode"
                                variant="outlined"
                                label="Pincode"
                                fullWidth
                                value={pincode}
                                style={{ margin: "20px" }}
                                error={pincode ? true : false}
                                helperText={error}
                                onChange={(e) => setPincode(e.target.value)}
                            />
                        </div>


                        <div className="form-row-3">
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

export default AdminSetup;
