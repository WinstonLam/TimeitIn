
import React, { FunctionComponent, useEffect, useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

interface UserCreationModalProps {
    succesSubmition: boolean;
    setSuccessSubmition: (succesSubmition: boolean) => void;
    clear: () => void;
}


const content = (handleReset: () => void, handleClose: () => void) => {

    return (
        <div className="button-container" style={{ display: "flex" }}>
            <Button
                text="Create new user"
                width="250px"
                onClick={handleReset} />

            <Button text="Overview" bgColor="grey" width="250px" onClick={handleClose} />
        </div>
    )
}

const UserCreationModal: FunctionComponent<UserCreationModalProps> = ({ clear, succesSubmition, setSuccessSubmition }) => {
    let navigate = useNavigate();
    const [showModal, setShowModal] = useState(succesSubmition);

    useEffect(()=>{setShowModal(succesSubmition)}, [succesSubmition]);

    const handleReset = () => {
        setShowModal(!showModal);
        clear();
        setSuccessSubmition(!succesSubmition);
    }

    const handleClose = () => {
        setShowModal(!showModal);
        setTimeout(() => {
            navigate("/users")
        }, 200);
    }

    return (
        <Modal
            alert={true}
            alertMessage="User has succesfully been created"
            alertType="success"
            show={showModal}
            handleClose={handleClose}
            content={content(handleReset, handleClose)} />
    );
}

export default UserCreationModal;
