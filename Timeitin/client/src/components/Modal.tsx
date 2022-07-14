import React, { FunctionComponent } from "react";
import ReactDom from "react-dom";
import "./Styles/Modal.css";
import { Alert, AlertTitle } from "@mui/material";
import useMountTransition from "./useMountTransition";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

interface ModalProps {
    show: boolean;
    handleClose: () => void;
    content?: any;
    alert?: boolean;
    alertMessage?: string;
    alertType?: "success" | "error" | "warning" | "info";
}

const Modal: FunctionComponent<ModalProps> = ({ content, show, handleClose, alert, alertType, alertMessage }) => {
    const hasTransitionedIn = useMountTransition(show, 100);

    return ReactDom.createPortal(
        <>
            {hasTransitionedIn && (
                <div className="modal">
                    <div className="closing-button">
                        <button onClick={handleClose}><AddCircleRoundedIcon fontSize="large" /></button>
                    </div>
                    <div className="modal-content">
                        {alert && (<Alert style={{ borderRadius: "2rem" }} severity={alertType}>
                            <AlertTitle>
                                <strong>{alertMessage}</strong>
                            </AlertTitle>
                        </Alert>)}

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