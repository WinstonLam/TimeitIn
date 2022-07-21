import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { FormWrapper } from "./Styles/Form";
import * as actions from "../actions";
import { PinInput } from 'react-input-pin-code'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from "./Button";
import UserCreationModal from "./UserCreationModal";

import "./Styles/AdminSetup.css";
import "./Styles/Form.ts";


const AdminSetup = () => {
    const dispatch = useDispatch();
    const { createAdmin } = bindActionCreators(actions, dispatch);
    const [succesSubmition, setSuccessSubmition] = useState(false);
    const [admin, setAdmin] = useState({ pincode: ['', '', '', '', ''] });
    const [mask, setMask] = useState(true);
    const [required, setRequired] = useState(false);


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const valid = Object.values(admin.pincode).every((field) => field !== '')
        if (!valid) {
            setRequired(true);
            return console.log("Invalid Pincode");
        }
        setRequired(false);
        createAdmin(admin);
        // setSuccessSubmition(true);
    };

    const clear = () => {
        setAdmin({ ...admin, pincode: ['', '', '', '', ''] });
        setRequired(false);
    };

    return (
        <div className="container">
            <UserCreationModal
                succesSubmition={succesSubmition}
                setSuccessSubmition={setSuccessSubmition}
                clear={clear}
            />
            <FormWrapper in={!succesSubmition}>
                <form className="admin-form" autoComplete="off" onSubmit={handleSubmit}>
                    <div className="admin-form-row-1">
                        <h3>Choose a pincode to setup</h3>
                    </div>
                    <div className="admin-form-row-2">
                        <PinInput
                            placeholder=""
                            required={required}
                            values={admin.pincode}
                            mask={mask}
                            onChange={(value, index, values) => { setAdmin({ ...admin, pincode: values }) }}
                            inputStyle={{ height: "75px", width: "75px", borderRadius: "3rem", borderColor: "black", border: "2px solid" }}

                        />
                        <div className="visibility" onClick={(e) => { setMask(!mask) }}>
                            {mask ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </div>
                    </div>

                    <div className="admin-form-row-3">
                        <div className="form-actions">
                            <Button text="Submit"></Button>
                            <Button
                                type="button"
                                text="Clear"
                                bgColor="grey"
                                onClick={clear}
                            ></Button>
                            <Button text="Cancel" bgColor="red" link="/"></Button>
                        </div>
                    </div>
                </form>
            </FormWrapper>
        </div >
    );
};

export default AdminSetup;
