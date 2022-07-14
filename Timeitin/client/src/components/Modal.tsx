import React from "react";
import ReactDom from "react-dom";
import "./Styles/Modal.css";
import { Collapse, Alert, AlertTitle } from "@mui/material";
import useMountTransition from "./useMountTransition";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { CommentsDisabledOutlined } from "@mui/icons-material";

const Modal = ({ content, show, handleClose }: any) => {
    const hasTransitionedIn = useMountTransition(show, 100);

    return ReactDom.createPortal(
        <>
            {hasTransitionedIn && (
                <div className="modal">
                    <div className="closing-button">
                        <button onClick={handleClose}><AddCircleRoundedIcon fontSize="large" /></button>
                    </div>
                    <div className="modal-content">
                        <Alert style={{ borderRadius: "2rem" }} severity="success">
                            <AlertTitle>
                                <strong>User has succesfully been created</strong>
                            </AlertTitle>
                        </Alert>


                        {content}


                    </div>
                    </div>
              

            )}

            </>
        ,

        document.getElementById('modal')
    );
}

export default Modal;