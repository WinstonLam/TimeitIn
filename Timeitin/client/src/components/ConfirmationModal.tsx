import React, { FunctionComponent, useState } from 'react';
import Button from './Button';
import Modal from './Modal';


interface ConfirmationModalProps {
    isOpen: boolean;
    onConfirm: any;
    onCancel: string
}

const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = ({ isOpen, onConfirm, onCancel }) => {

    const handleClose = () => {
        return;
    }

    const content = () => {
        return (
            <div className="button-container" style={{ display: "flex" }}>
                <Button
                    text="Confirm"
                    width="250px"
                    onClick={onConfirm} />
                <Button text="Cancel" bgColor="grey" width="250px" link={onCancel} />
            </div>)
    }

    return (
        <Modal
            alert={true}
            alertMessage="Are you sure you want to delete this user?"
            alertType="warning"
            show={isOpen}
            handleClose={handleClose}
            content={content()} />

    )
}

export default ConfirmationModal;