
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { selectAdmin } from "../strore";
import { useAppDispatch } from "../hooks";
import { fetchAdmin } from "../../actions";
import Modal from './ModalTemplate';
import { PinInput } from 'react-input-pin-code';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

import "../Styles/AuthModal.css";

interface UserAuthModalProps {
    onAuthorization: boolean;
    setOnAuthorization: (onAuthorization: boolean) => void;
    successAuthPath: string;
    currentPath: string;

}

const AuthModal: FunctionComponent<UserAuthModalProps> = ({ currentPath, onAuthorization, successAuthPath, setOnAuthorization }) => {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const fetchedAdmin: any = useSelector(selectAdmin);
    const [showModal, setShowModal] = useState(onAuthorization);
    const [admin, setAdmin] = useState(null);
    const [mask, setMask] = useState(true);
    const [pin, setPin] = useState(['', '', '', '', '']);
    const [pinError, setPinError] = useState({ message: "", color: "" });

    useEffect(() => { dispatch(fetchAdmin()) }, [dispatch]);
    useEffect(() => { setAdmin(fetchedAdmin[0]) }, [fetchedAdmin]);
    useEffect(() => {
        if (admin) {
            if (pin.join() === admin.pincode.join()) {
                setPinError({ ...pinError, color: "" });
                handleSubmit();
            } else if (pin.filter(number => number).length === 5) {
                console.log("set pin error");
                setPinError({ ...pinError, color: "rgb(220, 53, 69)", message: "Incorrect pin code" })
            } else {
                setPinError({ ...pinError, color: "", message: "" })
            }
        };
    }, [pin]);

    const content = () => {
        return (
            <div className="pincode-container">
                <div className="visibility-auth" onClick={(e) => { setMask(!mask) }}>
                    {mask ? <VisibilityOffIcon htmlColor="white" /> : <VisibilityIcon htmlColor="white" />}
                </div>
                <PinInput
                    placeholder=""
                    validBorderColor={pinError.color}
                    values={pin}
                    mask={mask}
                    onChange={(value, index, values) => { handleChange(values, setPinError, pinError) }}
                    inputStyle={{ fontSize: "23px", color: "white", height: "50px", width: "50px", borderRadius: "3rem", backgroundColor: "transparent" }}
                />
                <div className='pininput-helpertext'>
                    {pinError.message ? pinError.message : <span>&nbsp;&nbsp;</span>}
                </div>
            </div>
        )
    }

    const handleChange = (values: string[], setPinError: any, pinError: any) => {
        setPin(values)
    }

    const handleSubmit = () => {
        setShowModal(false);
        setOnAuthorization(!onAuthorization);
        navigate(successAuthPath);
    }
    const handleClose = () => {
        setOnAuthorization(!onAuthorization);
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
            content={content()}
            width="400px" />

    );
}

export default AuthModal;
