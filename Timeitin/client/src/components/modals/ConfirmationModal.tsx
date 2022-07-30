import React, { FunctionComponent } from 'react';
import Button from '../Button';
import Modal from './ModalTemplate';


interface ConfirmationModalProps {
    isOpen: boolean;
    onConfirm: any;
    onCancel: any
}

const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = ({ isOpen, onConfirm, onCancel }) => {

    const handleClose = () => {
        onCancel(false);
    }

    const handleConfirm = () => {
        onConfirm();
        handleClose();
    }

    const content = () => {
        return (
            <div className="button-container" style={{ display: "flex" }}>
                <Button
                    text="Confirm"
                    width="250px"
                    onClick={handleConfirm} />
                <Button text="Cancel" bgColor="grey" width="250px" onClick={handleClose} />
            </div>)
    }

    return (
        <Modal
            overlay={true}
            alert={true}
            alertMessage="Are you sure you want to preform this action?"
            alertType="warning"
            show={isOpen}
            handleClose={handleClose}
            content={content()} />

    )
}

export default ConfirmationModal;