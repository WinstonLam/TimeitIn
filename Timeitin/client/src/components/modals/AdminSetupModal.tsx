
import React, { FunctionComponent, useEffect, useState } from 'react';
import Button from '../Button';
import Modal from './ModalTemplate';
import { useNavigate } from 'react-router-dom';

interface AdminSetupModalProps {
    succesSubmition: boolean;
    pincode: string[];
}


const content = (handleClose: () => void, pincode: string[]) => {

    return (

        <div className="button-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ color: "white" }}>Your pincode is: {pincode}</p>
            <Button text="Home" width="250px" onClick={handleClose} />
        </div>

    )
}

const AdminSetupModal: FunctionComponent<AdminSetupModalProps> = ({ succesSubmition, pincode }) => {
    let navigate = useNavigate();
    const [showModal, setShowModal] = useState(succesSubmition);

    useEffect(() => { setShowModal(succesSubmition) }, [succesSubmition]);

    const handleClose = () => {
        setShowModal(!showModal);
        setTimeout(() => {
            navigate("/")
        }, 200);
    }

    return (
        <Modal
            alert={true}
            alertMessage="Pincode has been succesfully set"
            alertType="success"
            show={showModal}
            handleClose={handleClose}
            content={content(handleClose, pincode)}
            width="500px" />
    );
}

export default AdminSetupModal;
