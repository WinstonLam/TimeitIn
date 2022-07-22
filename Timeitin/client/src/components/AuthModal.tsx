
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { selectAdmin } from "./strore";
import { useAppDispatch } from "./hooks";
import { fetchAdmin } from "../actions";
import Modal from './Modal';
import { PinInput } from 'react-input-pin-code';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

import "./Styles/AuthModal.css";

interface UserAuthModalProps {
    onAuthorization: boolean;
    setOnAuthorization: (onAuthorization: boolean) => void;
    successAuthPath: string;
    currentPath: string;
    clear: () => void;
}

const AuthModal: FunctionComponent<UserAuthModalProps> = ({ currentPath, clear, onAuthorization, setOnAuthorization, successAuthPath }) => {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const fetchedAdmin: any = useSelector(selectAdmin);
    const [showModal, setShowModal] = useState(onAuthorization);
    const [admin, setAdmin] = useState(null);
    const [pin, setPin] = useState(['', '', '', '', '']);
    const [mask, setMask] = useState(true);

    useEffect(() => { dispatch(fetchAdmin()) }, [dispatch]);
    useEffect(() => { setAdmin(fetchedAdmin[0]) }, [fetchedAdmin]);
    useEffect(() => { setShowModal(onAuthorization) }, [onAuthorization]);

    const content = (handleClose: () => void) => {
        const [pinError, setPinError] = useState({ message: "", color: "rgb(220, 53, 69)" });


        return (

            <div className="pincode-container">
                <div className="visibility-auth" onClick={(e) => { setMask(!mask) }}>
                    {mask ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </div>
                <PinInput
                    placeholder=""
                    validBorderColor={pinError.color}
                    values={pin}
                    mask={mask}
                    onChange={(value, index, values) => { handleChange(values, setPinError, pinError) }}
                    inputStyle={{ height: "50px", width: "50px", borderRadius: "3rem", backgroundColor: "transparent" }}
                    onComplete={() => { handleSubmit(setPinError, pinError) }}
                />
                <div className='pininput-helpertext'>
                    {pinError.message}
                </div>
            </div>

        )
    }

    const handleChange = (values: string[], setPinError: any, pinError: any) => {
        setPinError({ ...pinError, color: "rgb(220, 53, 69)" });
        setPinError({ ...pinError, message: "f" })
        setPin(values)
    }

    const handleSubmit = (setPinError: any, pinError: any) => {
        if (pin.join() === admin.pincode.join()) {
            setPinError({ ...pinError, color: "" })
            return
        };
        setPinError({ ...pinError, message: "Incorrect pin" })
    }

    const handleReset = () => {
        setShowModal(!showModal);
        clear();
        setOnAuthorization(!onAuthorization);
    }

    const handleClose = () => {
        setShowModal(!showModal);
        setTimeout(() => {
            navigate(currentPath)
        }, 200);
    }

    if (!admin) return


    return (
        <Modal
            alert={true}
            alertMessage="This action requires a pincode "
            alertType="warning"
            show={showModal}
            handleClose={handleClose}
            content={content(handleClose)} />
    );
}

export default AuthModal;
