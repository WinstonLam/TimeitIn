import React from "react";
import ReactDom from "react-dom";
import "./Styles/Modal.css";
import { Collapse, Alert, AlertTitle } from "@mui/material";
import useMountTransition from "./useMountTransition";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const Modal = ({ content, show, handleClose }: any) => {
    const hasTransitionedIn = useMountTransition(true, 1000);

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // event.preventDefault();
        // handleClose();

    }
    return ReactDom.createPortal(

        <div className="modal">
            {hasTransitionedIn && (
                <>
                    <div className="closing-button">
                        <button onClick={handleOnClick}><AddCircleRoundedIcon fontSize="large" /></button>
                    </div>
                    <div className="modal-content">
                        <Alert style={{ borderRadius: "2rem" }} severity="success">
                            <AlertTitle>
                                <strong>User has succesfully been created</strong>
                            </AlertTitle>
                        </Alert>


                        {content}


                    </div>
                </>
            )}

        </div>
        ,

        document.getElementById('modal')
    );
}

export default Modal;