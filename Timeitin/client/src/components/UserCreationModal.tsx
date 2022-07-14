
import React, { FunctionComponent, useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import history from './history';

interface UserCreationModalProps {
    succesSubmition: boolean;
    setSuccessSubmition: (succesSubmition: boolean) => void;
    clear: () => void;
}


const content = (handleClose: () => void) => {
    return(
        <div className="button-container" style={{display: "flex"}}>
        <Button
        text="Create new user"
        width="250px"
        onClick={
            handleClose
        } />
      
        <Button text="Overview" bgColor="grey" width="250px" link="/users" />
    </div>
    )
}

const UserCreationModal: FunctionComponent<UserCreationModalProps> = ({ clear ,succesSubmition, setSuccessSubmition}) => {
    const [showModal, setShowModal] = useState(succesSubmition);

    const handleReset = () => {
        setShowModal(!showModal);
        clear();
        setSuccessSubmition(!succesSubmition);
    }

    const handleClose = () => {
        console.log("handleClose");
        setShowModal(!showModal);
        history.push("/users");
    }

    return (
        <Modal show={showModal} handleClose={handleClose} content={content(handleReset)}>  </Modal>
    );
}

export default UserCreationModal;
