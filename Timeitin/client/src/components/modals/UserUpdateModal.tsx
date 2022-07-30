
import React, { FunctionComponent, useEffect, useState } from 'react';
import Button from '../Button';
import Modal from './ModalTemplate';
import { useNavigate } from 'react-router-dom';

interface UserCreationModalProps {
    succesSubmition: boolean;
    setSuccessSubmition: (succesSubmition: boolean) => void;
    clear: () => void;
}


const content = (handleClose: () => void) => {

    return (
        <div className="button-container" style={{ display: "flex", justifyContent: "center" }}>
            <Button text="Overview" bgColor="grey" width="250px" onClick={handleClose} />
        </div>
    )
}

const UserUpdateModal: FunctionComponent<UserCreationModalProps> = ({ clear, succesSubmition, setSuccessSubmition }) => {
    let navigate = useNavigate();
    const [showModal, setShowModal] = useState(succesSubmition);

    useEffect(() => { setShowModal(succesSubmition) }, [succesSubmition]);

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
            alertMessage="User has succesfully been updated"
            alertType="success"
            show={showModal}
            handleClose={handleClose}
            content={content(handleClose)} />
    );
}

export default UserUpdateModal;
